import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
