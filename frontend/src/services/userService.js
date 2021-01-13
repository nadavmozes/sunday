// import httpService from './httpService';
import socketService from './socketService'

export const userService = {
    loadUsers,
    getUserById,
    login,
    signup,
    guestLogin,
    markAsRead,
    updateUser,
    logout,
    getCurrUser
}
async function loadUsers() {
    try {
        const users = await httpService.get('user')
        return users;
    } catch (err) {
        console.log('userService: Coulnd\'t get users');
        throw err;
    }
}
async function markAsRead(loggedUser) {
    loggedUser.notifications.forEach(notification => {
        notification.isRead = true
    })
    updateUser(loggedUser)
    try {
        return loggedUser
    } catch (err) {
        console.log('userService: Something went wrong');
        throw err;
    }
}
async function getUserById(userId) {
    try {
        const user = await httpService.get(`user/${userId}`);
        return user
    } catch (err) {
        console.log('userService: Coulnd\'t get user');
        throw err;
    }
}
async function login(userCred) {
    try {
        const user = await httpService.post('auth/login', userCred);
        return _handleLogin(user)
    } catch (err) {
        console.log('userService: Wrong username or password');
        throw err;
    }
}
async function signup(userCred) {
    const user = {
        isAdmin: false,
        boards: [],
        notifications: [],
        birthDay: '',
        company: 'adidas',
        phoneNumber: '0224132124',
        ...userCred
    }
    try {
        const newUser = await httpService.post('auth/signup', user)
        return _handleLogin(newUser)
    } catch (err) {
        console.log('userService: Couldn\'t sign up', err);
        return Promise.reject(err.response.data);

    }
}
async function guestLogin() {
    try {
        const user = await login({ username: 'guest', password: '12345' });
        user.notifications = [{
            byUser: {
                _id: '4832r4erfef4949fkd39',
                imgUrl: 'img/url',
                fullName: 'Nadav Mozes'
            },
            content: 'Nadav add Inbal',
            createdAt: Date.now() - 1000 * 60 * 2
        },
        {
            byUser: {
                _id: '4832r4erfef4949fkd38',
                imgUrl: 'img/url',
                fullName: 'Yair Mor'
            },
            content: 'Yair add new group...',
            createdAt: Date.now() - 1000 * 60 * 3
        },
        {
            byUser: {
                _id: '4832r4erfef4949fkd37',
                imgUrl: 'img/url',
                fullName: 'Inbal Azmon'
            },
            content: 'Inbal change status of task',
            createdAt: Date.now() - 1000 * 60 * 4
        }
        ]
        return user
    } catch (err) {
        console.log('userService: Couldn\'t login as guest');
        throw err;
    }
}
async function updateUser(user) {
    const updatedUser = await httpService.put(`auth/update/${user._id}`, user)
    return updatedUser
}
async function logout() {
    await httpService.post('auth/logout');
    sessionStorage.clear();
}
function getCurrUser() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user;
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}