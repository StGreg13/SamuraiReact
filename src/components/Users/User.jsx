import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.usersList_item}>
            <div className={s.ava}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"/>
                </NavLink>
            </div>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <div>
                {user.followed
                    ? <button className={s.unfollow}
                        disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow</button>
                    : <button className={s.follow}
                        disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow</button>}
            </div>
        </div>)

}
export default User;