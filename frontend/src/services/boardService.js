

import { httpService } from './httpService'


export const boardService = {
    loadBoards,
    removeBoard,
    addBoard,
    addGroup,
    query
}

let gBoard = {
    "_id": 12124,
    "boardCreator": {
        "_id": 123123,
        "fullName": "fullname",
        "imgUrl": "www.imgur.com/sasf"
    },
    "name": "board1",
    "createdAt": 24124135124,
    "description": "Enter description here",
    "members": [
        {
            "_id": "u101",
            "fullname": "sunday",
            "imgUrl": "imgure/sfasfa"
        }
    ],
    "groups": [
        {
            "_id": 124,
            "name": "week1",
            "createdAt": "date",
            "color": "blue",
            "lastUpdated": 198465168486,



            "tasks": [
                {
                    "id": 21412,
                    "name": "sneeze",

                    "createdAt": 1123124124241,
                    "members": [
                        {
                            "_id": 1634,
                            "fullname": "inbal azmon",
                            "imgUrl": "www/imgurl"
                        }
                    ],

                    "note": "do this until tomorrow",
                    "lastUpdated": "yesterday",
                    "isSelected": false,
                    "posts": [],
                    "tags": [
                        "ui",
                        "ux"
                    ],
                    "attachedImgs": []
                }
            ]
        },
        {
            "_id": 134,
            "name": "week2",
            "createdAt": "date",
            "color": "red",
            "lastUpdated": 1984561668486,



            "tasks": [
                {
                    "id": 21546,
                    "name": "popo",

                    "createdAt": 1123124124241,
                    "members": [
                        {
                            "_id": 1234,
                            "fullname": "yair mor",
                            "imgUrl": "www/imgurl"
                        }
                    ],

                    "note": "do this now",
                    "lastUpdated": "the day before tommorow",
                    "isSelected": false,
                    "posts": [],
                    "tags": [
                        "ui",
                        "ux"
                    ],
                    "attachedImgs": []
                }
            ]
        }
    ],
    "activityLog": [
        {
            "createdAt": 124124125124,
            "byUser": {
                "_id": 123,
                "imgUrl": "www.imgur",
                "fullName": "sunday"
            },
            "description": "removed task \"do the dishes\"",
            "task": {
                "id": 123,
                "name": "do the dishes"
            }
        },
        {
            "createdAt": 12412541251,
            "byUser": {
                "_id": 123,
                "imgUrl": "www.imgur",
                "fullName": "sunday"
            },
            "description": "changed group name from project2 to project3",
            "group": {
                "id": 142,
                "name": "project3"
            }
        },
        {
            "createdAt": 4514512352135,
            "byUser": {
                "_id": 123,
                "imgUrl": "www.imgur",
                "fullName": "sunday"
            },
            "description": "added group project2",
            "group": {
                "id": 142,
                "name": "project2"
            }
        }
    ]
}

function query() {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(gBoard)
        }, 3000);
    })
}
async function loadBoards() {
    const boards = await httpService.get('board')
    return boards
}

function removeBoard(boardId) {
    return httpService.delete(`board/${boardId}`)
}

async function addBoard() {
    const board = {
        "board": {
            "_id": 12124,
            "boardCreator": {
                "_id": 123123,
                "fullName": "fullname",
                "imgUrl": "www.imgur.com/sasf"
            },
            "name": "board1",
            "createdAt": 24124135124,
            "description": "Enter description here",
            "members": [
                {
                    "_id": "u101",
                    "fullname": "sunday",
                    "imgUrl": "imgure/sfasfa"
                }
            ],
            "groups": [
                {
                    "_id": 124,
                    "name": "week1",
                    "createdAt": "date",
                    "color": "blue",
                    "lastUpdated": 198465168486,



                    "tasks": [
                        {
                            "id": 21412,
                            "name": "sneeze",

                            "createdAt": 1123124124241,
                            "members": [
                                {
                                    "_id": 1234,
                                    "fullname": "inbal azmon",
                                    "imgUrl": "www/imgurl"
                                }
                            ],

                            "note": "do this until tomorrow",
                            "lastUpdated": "yesterday",
                            "isSelected": false,
                            "posts": [],
                            "tags": [
                                "ui",
                                "ux"
                            ],
                            "attachedImgs": []
                        }
                    ]
                }
            ],
            "activityLog": [
                {
                    "createdAt": 124124125124,
                    "byUser": {
                        "_id": 123,
                        "imgUrl": "www.imgur",
                        "fullName": "sunday"
                    },
                    "description": "removed task \"do the dishes\"",
                    "task": {
                        "id": 123,
                        "name": "do the dishes"
                    }
                },
                {
                    "createdAt": 12412541251,
                    "byUser": {
                        "_id": 123,
                        "imgUrl": "www.imgur",
                        "fullName": "sunday"
                    },
                    "description": "changed group name from project2 to project3",
                    "group": {
                        "id": 142,
                        "name": "project3"
                    }
                },
                {
                    "createdAt": 4514512352135,
                    "byUser": {
                        "_id": 123,
                        "imgUrl": "www.imgur",
                        "fullName": "sunday"
                    },
                    "description": "added group project2",
                    "group": {
                        "id": 142,
                        "name": "project2"
                    }
                }
            ]
        },
        "user": [
            {
                "id": 123,
                "username": "sunday",
                "fullName": "the sunday",
                "password": "abcde",
                "email": "myEmail@gmail.com",
                "imgUrl": "www.abc.com/",
                "isAdmin": true,
                "notifications": [],
                "birthDay": "14nd November 1991",
                "company": "none",
                "phoneNumber": "012345"
            }
        ]
    }
    const newBoard = await httpService.post(`board`, board)
    return newBoard
}

function addGroup(board, loggedUser) {
    const group = {
        "id": _makeid(),
        "name": 'week',
        "createdAt": 'date',
        "color": '#70ADB5',
        "lastUpdated": Date.now(),
        "isTagsShown": false,
        "tags": [],
        "tasks": [{
            "id": _makeid(),
            "name": 'Click me!',
            "createdAt": Date.now(),
            "members": [],
            "status": '',
            "priority": '',
            "dueDate": Date.now(),
            "updates": [],
            "lastUpdated": 'two days ago',
            "isSelected": false,
            "posts": [],
            "tags": []
        }]
    }
    // try {
    //     board.groups.push(group)
    //     const desc = `${loggedUser.fullName} Added a new group.`
    //     return handleBoardChanges(desc, loggedUser, board)
    // } catch (err) {
    //     console.log('boardService: Couldn\'t add group');
    //     throw err;
    // }
}


function _makeid(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}