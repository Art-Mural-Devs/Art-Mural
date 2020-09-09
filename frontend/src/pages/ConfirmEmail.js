import React from "react";

class ConfirmEmail extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            user:"John Doe"
        }
    }

    render() {
        return(
            <div>
                <h3>Hello {this.state.user} , Your Email has been activated </h3>
            </div>
        )
    }

}
export default ConfirmEmail;