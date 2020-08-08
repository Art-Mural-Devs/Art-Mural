import React from "react"

export const ContactPage = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col-sm-12">
                <h2 className="text-center">Contact</h2>
            </div>
        </div>
        <div className="row d-flex align-items-center mt-3">
            <div className="col-12 col-sm-4">
              <label for="name">Name: </label>
            </div>
            <div className="col-12 col-sm-8">
              <div className="form-group mb-0">
                <input type="text" className="form-control" id="name" placeholder="Enter Your name" />
              </div>
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
            <label htmlFor="phone">Phone nr.: </label>
          </div>
          <div className="col-12 col-sm-8">
            <div className="form-group mb-0">
              <input type="tel" className="form-control" id="phone" placeholder="Enter Your phone number"/>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center mt-5">
          <div className="col-12 col-sm-4">
            <label htmlFor="message">Message: </label>
          </div>
          <div className="col-12 col-sm-8">
            <div className="form-group mb-0">
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center mt-3 mb-5">
          <div className="col-12 col-sm-4"></div>
          <div className="col-12 col-sm-8">
            <div className="form-group mb-0">
              <buon type="button" className="btn btn-light border">Send</buon>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
