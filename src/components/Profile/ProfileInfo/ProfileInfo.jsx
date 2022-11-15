import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return  <Preloader />
    }

    return (
        <div>
            <div>
                <img
                    alt=""
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                ava + description
            </div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo;