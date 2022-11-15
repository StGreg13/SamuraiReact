import React from 'react';
import s from "./Paginator.module.css";

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

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
                                onPageChanged(p)
                            }}
                            className={(currentPage === p) ? s.selectedPage : ""}>
                        {p}
                    </span>
                    )
                })
                }
            </div>
        </div>
    )
}
export default Paginator;