import React from "react"
import './style.css'
class ProfileDetails extends React.Component {




    render () {
        return (
            <div className='container'>
                <div className='yours'>
                    <h2>Your Profile </h2>
                   <h5>My  Details</h5>
                </div>
                <div className='box username'>
                      <h3>Username</h3>
                </div>

                <div className='box details' >
                    <div className='email'>
                           <h3>Email: </h3>
                        <p>myemail@gmail.com</p>
                    </div>

                    <div className='box likes'>
                      <h3>Likes</h3>
                        <p>jogging</p>
                        <p>eating</p>
                    </div>
                </div>

                <div className='box aboutMe'>
                    <p>
                        lorem jgfifbfdbklfklgfkl kbfdkfbdklfdblk
                        hdhjfhjfvj uirgiuorgorg fbfjkbfkjbbjjkb jvfjf
                        hdhidvhdfhfvh grugrrugiu bfbjfbjkbkjbjkgfjb vkgk
                        dvjdhjvvhvf fbjfbjfbklklkl.fdhrehfh jfjfbjf
                        efhdfhdvhdv  fjgvjrjgrjg gjgkr.
                    </p>
                </div>
            </div>
        )
    }
}

export default ProfileDetails;
