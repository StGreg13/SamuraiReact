let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hi, how are you", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 21},
            ],
            newPostText:'it.kamasutra',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Nikita"},
            ],
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "how it's going"},
                {id: 3, message: "what are you doing"},
                {id: 4, message: "yo"},
            ]
        },
        sidebar:{}
    },

    getState() {
        return this._state;
    },

    _callSubscriber(){
        console.log("state changed")
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer)  {
        console.log("observer", observer)
        this._callSubscriber = observer
    }
}

export default store
window.store = store;
//store - OOP