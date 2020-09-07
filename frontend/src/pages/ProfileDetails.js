import React, {useEffect}  from "react"
import './style.css'
import {useSelector, useDispatch} from "react-redux";
import {fetchProfileByProfileId} from "../store/profile";
export const ProfileDetails = ()=> {

    const dispatch = useDispatch();

    console.log(dispatch)
    const profileId = '21b0e95f-ec89-11ea-a566-0242ac160002'
    const effects = () => {
       dispatch(fetchProfileByProfileId(profileId))
    };

    const inputs = [];

    useEffect(effects, inputs);

    const profile = useSelector(state => {

    return state.profile ? state.profile : []
    });



        return (
            <>
                {profile[0] ?
                    <div className='container'>
                        <div className='yours'>
                            <h2>Your Profile</h2>

                        </div>
                        <div className='box username'>
                            <h3>Username</h3>
                            <p>{profile[0].profileName}</p>
                        </div>

                        <div className='box details'>
                            <div className='email'>
                                <h3>Email: </h3>
                                <p>{profile[0].profileEmail}</p>
                            </div>

                            {/*<div className='box likes'>*/}
                            {/*    <h3>Likes</h3>*/}
                            {/*    <p>jogging</p>*/}
                            {/*    <p>eating</p>*/}
                            {/*</div>*/}
                        </div>

                        <div className='box aboutMe'>
                            <p>{profile[0].profileContent}</p>
                        </div>
                    </div>
                : ""}
                </>
        )

}


