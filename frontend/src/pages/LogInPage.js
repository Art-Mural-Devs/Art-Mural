import React from "react"

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
                    <form>
                        <h2 class="text-center mb-5">SIGN UP</h2>
                        <div className="form-group">
                            <label htmlFor="signupEmail">email</label>
                            <input type="email" className="form-control" id="signupEmail"
                                   aria-describedby="emailHelp" placeholder="enter email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="signupUsername">username</label>
                            <input type="password" className="form-control" id="signupUsername"
                                   placeholder="username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="signupPassword">password</label>
                            <input type="password" className="form-control" id="signupPassword"
                                   placeholder="password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">create account</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
};
