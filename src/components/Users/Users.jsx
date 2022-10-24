import React from 'react';
import s from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sergey_Brin_Ted_2010_%28cropped%29.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sergey_Brin_Ted_2010_%28cropped%29.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sergey_Brin_Ted_2010_%28cropped%29.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 4,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sergey_Brin_Ted_2010_%28cropped%29.jpg',
                    followed: true,
                    fullName: 'Nikita',
                    status: 'I am a boss too',
                    location: {city: 'Tbilisi', country: 'Georgia'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.ava}>
                        <img src={u.photoUrl} alt=""/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;