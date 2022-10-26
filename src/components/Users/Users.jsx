import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

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
                        <span
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                            className={(props.currentPage === p) ? s.selectedPage : ""}>
                        {p}
                    </span>
                    )
                })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div className={s.ava}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "72a783af-c59e-4d48-a2b6-97d1f9069270"
                                                }
                                            }
                                        )
                                            .then(res => {
                                                if (res.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "72a783af-c59e-4d48-a2b6-97d1f9069270"
                                                }}
                                        )
                                            .then(res => {
                                                if (res.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                    }}>Follow</button>}
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
    )
}
export default Users