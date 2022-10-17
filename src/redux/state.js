let rerenderEntireTree = () => {
    console.log("state changed")
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    console.log("observer", observer)
    rerenderEntireTree = observer
}

export default state