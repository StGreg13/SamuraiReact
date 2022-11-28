import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return  <Preloader />
    }

    const onMainPhotosSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files(0))
        }
    }

    return (
        <div>
            <div>
                <img
                    alt=""
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt=""
                className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotosSelected}/>}
            </div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo;