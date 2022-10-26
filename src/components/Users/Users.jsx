import s from "./users.module.css";
import userPhoto from "../../assets/img/user.png";
import React from "react";

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
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
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