import React from 'react';
import s from './users.module.css';
import axios from "axios";
import userPhoto from "../../assets/img/user.png"

class Users extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }
        return <div>
            <div className={s.pagination}>
                {pages.map(p => {
                    return (
                    <span
                        onClick={() => {this.onPageChanged(p)}}
                        className={this.props.currentPage === p && s.selectedPage}>
                        {p}
                    </span>
                    )
                })

                }
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.ava}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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

    }
}

export default Users;