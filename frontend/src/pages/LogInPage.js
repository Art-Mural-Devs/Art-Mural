import React from "react"
import {SignUpForm} from "../shared/components/account/SignupForm";
import {SignInForm} from "../shared/components/account/SignInForm";



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
