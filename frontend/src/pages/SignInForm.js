import React from 'react';
import {httpConfig} from "../shared/utils/http-config";
import {Formik} from "formik";
import * as Yup from "yup";
import {SignInFormContent} from "./SignInFormContent";
import {useDispatch} from "react-redux";
import {fetchAuth} from "../store/auth.js";



export const SignInForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        signinEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        signinPassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters")
    });


    //the initial values object defines what the request payload is.
    const signIn = {
        signinEmail: "",
        signinPassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();
                    dispatch(fetchAuth())
                    // window.location = "/";
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
            >
                {SignInFormContent}
            </Formik>
        </>
    )
};
