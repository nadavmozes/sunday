
import {httpService} from './httpService'
export const boardService = {
loadBoards,
removeBoard,
addBoard,
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




function _makeid(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}