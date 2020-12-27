export const UserApiUrls = {
    userPost:'/user',
    userGet:'/user',
    getCurrentUser:'/user/me',
    getUserById: (id) => `/user/${id}`,
    putUserById:(id)=>`/user/${id}`,
    getUserByUsername:(username)=>`/user/byUsername/${username}`
}   