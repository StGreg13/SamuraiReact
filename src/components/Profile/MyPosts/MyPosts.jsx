import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "hi, how are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 21},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
