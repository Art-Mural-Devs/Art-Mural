import React from "react"

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]:value
    });
  }

  handleSend = () => {
    console.log('test', this.state);
  }

  render () {
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
                <label htmlFor="name">Name: </label>
              </div>
              <div className="col-12 col-sm-8">
                <div className="form-group mb-0">
                  <input onChange={this.handleChange} type="text" className="form-control" name="name" id="name" placeholder="Enter Your name"/>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center mt-3">
              <div className="col-12 col-sm-4">
                <label htmlFor="email">Email: </label>
              </div>
              <div className="col-12 col-sm-8">
                <div className="form-group mb-0">
                  <input type="email" className="form-control" onChange={this.handleChange} name="email" id="email" placeholder="Enter Your email"/>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center mt-5">
              <div className="col-12 col-sm-4">
                <label htmlFor="message">Message: </label>
              </div>
              <div className="col-12 col-sm-8">
                <div className="form-group mb-0">
                  <textarea onChange={this.handleChange} name="message" className="form-control" id="message" rows="3"></textarea>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center mt-3 mb-5">
              <div className="col-12 col-sm-4"></div>
              <div className="col-12 col-sm-8">
                <div className="form-group mb-0">
                  <button type="button" className="btn btn-light border" onClick={this.handleSend}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </>
    )
  }
}

export default ContactPage;
