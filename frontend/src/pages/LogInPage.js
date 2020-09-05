import React,{useState} from "react"
import  axios from 'axios';
import { useHistory } from "react-router-dom";
import {SignUpForm} from "./SignupForm";
import {SignInForm} from "./SignInForm";



export const LogInPage   = () => {


  return (
    <>
        <div className="container">
            <div className="row  mt-5 mb-5">
                <div className="col-sm-3 offset-sm-3">
                    <h2 className="text-center mb-5">SIGN IN</h2>
                    <SignInForm/>

                </div>

                <div className="col-sm-3 offset-sm-1">



                        <h2 className="text-center mb-5">SIGN UP</h2>

                    <SignUpForm></SignUpForm>

                </div>
            </div>
        </div>
    </>
  )
};


