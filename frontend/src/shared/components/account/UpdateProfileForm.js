import React from 'react';
import {Formik} from "formik";
import {UpdateProfileContent} from "./UpdateProfileContent";
import './updateForm.css'
import {httpConfig} from "../../../utils/httpConfig";
import * as Yup from "yup";

export const UpdateProfileForm = ({profile}) => {
    const validationObject = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email"),
        profileContent: Yup.string()
            .max(1000, "profile details is to long"),
        profileName: Yup.string().max(128, "profile name is to long")
    });
    const handleUpdate = (values, {setStatus, resetForm}) => {
        httpConfig.put(`/apis/profile/${values.profileId}`, values)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
                return (reply)
            })

    };

    return (
        <>
            {profile &&<Formik initialValues={profile}
          onSubmit={handleUpdate}
            validationSchema={validationObject}>
              {UpdateProfileContent}
          </Formik>}

   </>

    )
};
