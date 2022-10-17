const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
    _callSubscriber(){
        console.log("state changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer)  {
        console.log("observer", observer)
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }

                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)

                break;
            case UPDATE_NEW_POST_TEXT :
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)

                break
        }

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
})

export default store
window.store = store;
//store - OOP