import React from "react"

export const LogInPage   = () => {
  return (
    <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-12">
                    <h2 className="text-center">Login</h2>
                </div>
            </div>
            <div className="row d-flex align-items-center mt-3">
                <div className="col-12 col-sm-4">
                    <label htmlFor="email">Email: </label>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="form-group mb-0">
                        <input type="email" className="form-control" id="email" placeholder="Enter Your email"/>
                    </div>
                </div>
            </div>
            <div className="row d-flex align-items-center mt-3">
                <div className="col-12 col-sm-4">
                    <label htmlFor="password">Password: </label>
                </div>
                <div className="col-12 col-sm-8">
                    <div className="form-group mb-0">
                        <input type="password" className="form-control" id="password" placeholder="Enter Your password"/>
                    </div>
                </div>
            </div>
            <div className="row d-flex align-items-center mt-3 mb-5">
                <div className="col-12 col-sm-4"></div>
                <div className="col-12 col-sm-8">
                    <div className="form-group mb-0">
                        <button type="button" className="btn btn-light border">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};
