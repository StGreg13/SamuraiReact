import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
      <div className={s.item}>
          <div className={s.ava}>
              <img src="https://bit.ly/3SJeKCs" alt="avatar" />
          </div>
          <div className={s.text}>
              {props.message}
              <div>
                  <span>like {props.likesCount}</span>
              </div>
          </div>
      </div>
  )
}

export default Post;