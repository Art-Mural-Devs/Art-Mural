import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import './updateForm.css'
export const UpdateProfileContent = (props) => {
    const {
        values,
        errors,
        touched,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
        status,

    } = props;
    console.log(values)
    return (
        <>
            <h2 className="text-center mb-5 mt-5">UPDATE PROFILE</h2>
            <form className='form' onSubmit={handleSubmit}> 
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group update">
                    <label htmlFor="profileName">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="profileName"
                            type="text"
                            value={values.profileName}
                            placeholder="Enter username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.profileName && touched.profileName && (
                            <div className="alert alert-danger">
                                {errors.profileName}
                            </div>
                        )
                    }
                </div>
                <div className="form-group update">
                    <label htmlFor="profileEmail">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="profileEmail"
                            type="text"
                            value={values.profileEmail}
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileEmail && touched.profileEmail && (
                            <div className="alert alert-danger">
                                {errors.profileEmail}
                            </div>
                        )
                    }
                </div>
                {/*controlId must match what is defined by the initialValues object*/}
                <div className="form-group update">
                    <label htmlFor="profileEmail">About Me</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                        </div>
                        <textarea
                            col={"50"}
                            className="form-control"
                            name="profileContent"
                            value={values.profileContent}
                            placeholder="Enter about me"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileContent && touched.profileContent && (
                            <div className="alert alert-danger">
                                {errors.profileContent}
                            </div>
                        )
                    }
                </div>



                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">Update Profile</button>
                </div>

            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
};