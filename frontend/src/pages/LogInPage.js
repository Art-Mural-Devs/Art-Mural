import React,{useState} from "react"
import  axios from 'axios';
import { useHistory } from "react-router-dom";
import {SignUpForm} from "./SignupForm";



export const LogInPage   = () => {

    let history = useHistory();
    const [userDetails, setUserDetails]= useState({name:"", email:'', password:''})
    const [userLoginDetails, setUserLoginDetails]= useState({email:'', password:''})
    const[errorMsg, setErrorMsg] = useState('')
    const[successMsg, setSuccessMsg] = useState('')

    const[loginErrorMsg, setLoginErrorMsg] = useState('')
    const[loginSuccessMsg, setloginSuccessMsg] = useState('')





        e.preventDefault()
        console.log('===>', userDetails)
        axios.post(`${BASE_URL}/auth/signUp`,{
            email: !userDetails.email ? " ": userDetails.email,
            password: userDetails.password,
            name: userDetails.name
        })
            .then(response =>{
                setErrorMsg("")
               userDetails.name=''
                userDetails.password =''
                userDetails.email =''
                setSuccessMsg(response.data.message)
            }).catch(err =>{
            setErrorMsg(err.response.data.message)
        })
    }
    function handleSignIn (e) {

        e.preventDefault()
        axios.post(`${BASE_URL}/auth/login`,{
            email: !userLoginDetails.email ? " ": userLoginDetails.email,
            password: userLoginDetails.password,
        })
            .then(response =>{
                localStorage.setItem('authUser', userLoginDetails.email);
                setLoginErrorMsg("")
                userLoginDetails.password =''
                userLoginDetails.email =''
                setloginSuccessMsg(response.data.message)
                history.push('/')
            }).catch(err =>{
                console.log(err.response.data)
            setLoginErrorMsg(err.response.data.message)
        })
    }
    const handleOnChange=e=>{
        const value = e.target.value;
       setUserDetails({...userDetails, [e.target.name]: value});
    }

    const handleOnLoginChange=e=>{
        const value = e.target.value;
       setUserLoginDetails({...userLoginDetails, [e.target.name]: value});
    }



  return (
    <>
        <div className="container">
            <div className="row  mt-5 mb-5">
                <div className="col-sm-3 offset-sm-3">
                    <form onSubmit={handleSignIn}>
                        <h2 class="text-center mb-5">LOG IN</h2>
                        {loginErrorMsg && loginErrorMsg.length > 0 ? <p style={{color:'red'}}>{loginErrorMsg}</p> : null}
                        {loginSuccessMsg && loginSuccessMsg.length > 0 ? <p style={{color:'green'}}>{loginSuccessMsg}</p> : null}

                        <div className="form-group">
                            <label htmlFor="loginEmail">email</label>
                            <input type="email" className="form-control"
                                   id="loginEmail"
                                   name="email"
                                   value={userLoginDetails.email}
                                   onChange={handleOnLoginChange}
                                   aria-describedby="emailHelp" placeholder="enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">password</label>
                            <input type="password"
                                   className="form-control"
                                   id="loginPassword"
                                   placeholder="password"
                                   name="password"
                                   value={userLoginDetails.password}
                                   onChange={handleOnLoginChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">log in</button>
                    </form>
                </div>

                <div className="col-sm-3 offset-sm-1">


                    <form onSubmit={handleSignUp}>
                        <h2 class="text-center mb-5">SIGN UP</h2>
                        {errorMsg && errorMsg.length > 0 ? <p style={{color:'red'}}>{errorMsg}</p> : null}
                        {successMsg && successMsg.length > 0 ? <p style={{color:'green'}}>{successMsg}</p> : null}
                        <div className="form-group">
                            <label htmlFor="signupEmail">email</label>
                            <input type="email"
                                   className="form-control"
                                   id="signupEmail"
                                   aria-describedby="emailHelp"
                                   name="email"
                                   value={userDetails.email}
                                   onChange={handleOnChange}
                                   placeholder="enter email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="signupUsername">Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="signupUsername"
                                   name="password"
                                   value={userDetails.password}
                                   onChange={handleOnChange}
                                   placeholder="Password"
                            />
                        </div>

                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="profileContent"> Content</label>*/}
                        {/*    <input className="form-control" id="profileContent"*/}
                        {/*           placeholder="Content"/>*/}
                        {/*</div>*/}

                        <div className="form-group">
                            <label htmlFor="signupPassword">Name</label>
                            <input
                                   className="form-control"
                                   id="signupPassword"
                                   name="name"
                                   value={userDetails.name}
                                   onChange={handleOnChange}
                                   placeholder="Full name"/>
                        </div>
                        <button type="submit" className="btn btn-primary">create account</button>
                    </form>


                        <h2 className="text-center mb-5">SIGN UP</h2>

                    <SignUpForm></SignUpForm>

                </div>
            </div>
        </div>
    </>
  )
};
