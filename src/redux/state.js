let state = {
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 21},
        ],
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
export default state