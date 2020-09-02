import React,{useState} from "react"
import {SignUpForm} from "./SignupForm";


export const LogInPage   = () => {



  return (
    <>
        <div className="container">
            <div className="row  mt-5 mb-5">
                <div className="col-sm-3 offset-sm-3">
                    <form>
                        <h2 class="text-center mb-5">LOG IN</h2>
                        <div className="form-group">
                            <label htmlFor="loginEmail">email</label>
                            <input type="email" className="form-control" id="loginEmail"
                                   aria-describedby="emailHelp" placeholder="enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">password</label>
                            <input type="password" className="form-control" id="loginPassword"
                                   placeholder="password"/>
                        </div>

                        <button type="submit" className="btn btn-primary">log in</button>
                    </form>
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
