import React, {useEffect}  from "react"
import '../shared/components/account/style.css'
import {useSelector, useDispatch} from "react-redux";
import {fetchProfileByProfileId} from "../store/profile";
import {UpdateProfileForm} from "../shared/components/account/UpdateProfileForm";
export const ProfileDetails = ()=> {

  const dispatch = useDispatch();

    const effects = () => {

       dispatch(fetchProfileByProfileId ( ))
    };

  const inputs = [];

  useEffect(effects, inputs);

  const profile = useSelector(state => {

    return state.profile ? state.profile : null
    });

        return (
            <>
                {profile ?
                    <div className='box container'>
                        <div className='yours'>
                            <h2>Your Profile</h2>

                        </div>
                        <div className='box username'>
                            <h3>Username</h3>
                            <p>{profile.profileName}</p>
                        </div>

                        <div className='box details'>
                            <div className='email'>
                                <h3>Email: </h3>
                                <p>{profile.profileEmail}</p>
                            </div>
                        </div>

                        <div className='box aboutMe'>
                            <p>{profile.profileContent}</p>
                        </div>

                    <div className="row">
                        {profile && <UpdateProfileForm key={profile.profileId} profile = {profile}/>}
                    </div>
                    </div>
                : <h3>Please Log In </h3>}
                </>
        )


}
