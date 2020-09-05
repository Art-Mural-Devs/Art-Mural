import React, {useState} from 'react';
import {httpConfig} from "../shared/utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent.js";

export const SignUpForm = () => {
    const signUp = {
        profileEmail: "",
        profileContent: "",
        profilePassword: "",
        profilePasswordConfirm: "",
        profileName: "",
            };

    const [status, setStatus] = useState(null);
    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profileContent: Yup.string()
            .required("profile about me is required"),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        profilePasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),
        profileName: Yup.string()
            .min(1, "Name is to short")
            .max(20, "Name is to long")
    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignUpFormContent}
        </Formik>

    )
};