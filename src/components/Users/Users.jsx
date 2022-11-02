import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div className={s.pagination}>
                {pages.map(p => {
                    return (
                        <span onClick={() => {
                                props.onPageChanged(p)
                            }}
                            className={(props.currentPage === p) ? s.selectedPage : ""}>
                        {p}
                    </span>
                    )
                })
                }
            </div>
            <div className={s.usersList}>
                {
                    props.users.map(u => <div key={u.id} className={s.usersList_item}>
                    <span>
                        <div className={s.ava}>
                           <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                           </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>
                                    Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>
                                    Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Users;