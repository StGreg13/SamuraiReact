import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
        <div>
            <img alt='' src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
        </div>
        <div>ava + description</div>
      <MyPosts
          posts={props.profilePage.posts}
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
