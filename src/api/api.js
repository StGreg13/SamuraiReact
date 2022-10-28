import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "72a783af-c59e-4d48-a2b6-97d1f9069270"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return (
            instance.get(`/users?page=${currentPage}&count=${pageSize}`)
                .then(res => {
                    return res.data
                })
        )
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`/profile/${userId}`);

    },

}
export const authAPI = {
    me () {
        return instance.get(`/auth/me`)
    }
}

