import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormDebugger} from "../shared/components/FormDebugger";
import React from "react";

export const SignInFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group">
                    <label htmlFor="signinEmail">Email Address</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            id="signinEmail"
                            type="email"
                            value={values.signinEmail}
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.signinEmail && touched.signinEmail && (
                            <div className="alert alert-danger">
                                {errors.signinEmail}
                            </div>
                        )

                    }
                </div>
                {/*controlId must match what is defined by the initialValues object*/}
                <div className="form-group">
                    <label htmlFor="signinPassword">Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="key"/>
                            </div>
                        </div>
                        <input
                            id="signinPassword"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            value={values.signinPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.signinPassword && touched.signinPassword && (
                        <div className="alert alert-danger">{errors.signinPassword}</div>
                    )}
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>
                <FormDebugger {...props} />
            </form>
            {status && (<div className={status.type}>{status.message}</div>)}
        </>
    )
};