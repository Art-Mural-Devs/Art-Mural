import React,{useState} from "react"
import  axios from 'axios';


let BASE_URL = "http://localhost:4200/apis"
export const LogInPage   = () => {
    const [userDetails, setUserDetails]= useState(null)
    const[errorMsg, setErrorMsg] = useState('')

    function handleSignUp (e) {

        e.preventDefault()
        console.log('===>', userDetails)
        axios.post(`${BASE_URL}/auth/signUp`,{
            email: !userDetails.email ? " ": userDetails.email,
            password: userDetails.password,
            name: userDetails.name
        })
            .then(response =>{

            }).catch(err =>{
            setErrorMsg(err.response.data.message)
                console.log("ERR+ ", err.response.data.message)
        })
    }
    const handleOnChange=e=>{
        const value = e.target.value;
       setUserDetails({...userDetails, [e.target.name]: value});

       console.log('Checks ', userDetails)
    }
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

                    <form onSubmit={handleSignUp}>
                        <h2 class="text-center mb-5">SIGN UP</h2>
                        {errorMsg && errorMsg.length > 0 ? <p style={{color:'red'}}>{errorMsg}</p> : null}
                        <div className="form-group">
                            <label htmlFor="signupEmail">email</label>
                            <input type="email"
                                   className="form-control"
                                   id="signupEmail"
                                   aria-describedby="emailHelp"
                                   name="email"
                                   onChange={handleOnChange}
                                   placeholder="enter email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="signupUsername">Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="signupUsername"
                                   name="password"
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
                                   onChange={handleOnChange}
                                   placeholder="Full name"/>
                        </div>
                        <button type="submit" className="btn btn-primary">create account</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
};
