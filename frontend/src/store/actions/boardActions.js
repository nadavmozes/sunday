import { boardService } from '../../services/boardService'
//------------------BOARD CRUD-----------------
export function loadBoards() {
    return async dispatch => {
        try {
            const boards = await boardService.loadBoards();
            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log('boardActions: Couldn\'t load boards');
            throw err;
        }
    }
}
export function updateBoard(boardToSave, desc, loggedUser) {
    return async dispatch => {
        try {
            const board = boardService.handleBoardChanges(desc, loggedUser, boardToSave);
            dispatch({ type: 'SET_BOARD', board })
        } catch (err) {
            console.log('boardActions: Couldn\'t update board');
            throw err;
        }
    }
}
export function recieveUpdate(boardToSave) {
    return dispatch => {
        try {
            dispatch({ type: 'SET_BOARD', board: boardToSave })
        } catch (err) {
            console.log('boardActions: Couldn\'t update board');
            throw err;
        }
    }
}
export function removeBoard(boardId) {
    return async dispatch => {
        try {
            await boardService.removeBoard(boardId);
            dispatch({ type: 'REMOVE_BOARD', boardId })
        } catch (err) {
            console.log('boardActions: Couldn\'t remove board');
            throw err;
        }
    }
}
export function addBoard(loggedUser) {
    return async dispatch => {
        try {
            const board = await boardService.addBoard(loggedUser);
            dispatch({ type: 'ADD_BOARD', board })
        } catch (err) {
            console.log('boardActions: Couldn\'t add board');
            throw err;
        }
    }
}
//------------------GROUP CRUD-----------------
export function removeGroup(groupId, board, loggedUser) {
    return dispatch => {
        try {
            const updatedBoard = boardService.removeGroup(groupId, board, loggedUser)
            dispatch({ type: 'SET_BOARD', board: updatedBoard });
        } catch (err) {
            console.log('boardActions: Couldn\'t remove group');
            throw err;
        }
    }
}
export function addGroup(board, loggedUser) {
    return dispatch => {
        try {
            const updatedBoard = boardService.addGroup(board, loggedUser);
            dispatch({ type: 'SET_BOARD', board: updatedBoard })
        } catch (err) {
            console.log('boardActions: Couldn\'t add group');
            throw err;
        }
    }
}
export function editGroup(group, board, desc, loggedUser) {
    return dispatch => {
        try {
            const updatedBoard = boardService.updateGroup(group, board, desc, loggedUser)
            dispatch({ type: 'SET_BOARD', board: updatedBoard })
        } catch (err) {
            console.log('boardActions: Coulnd\'t edit group');
            throw err;
        }
    }
}
//-----------------TASKS CRUD------------------------
export function addTask(groupId, taskName, board, loggedUser) {
    return dispatch => {
        try {
            const updatedBoard = boardService.addTask(groupId, taskName, board, loggedUser);
            dispatch({ type: 'SET_BOARD', board: updatedBoard })
        } catch (err) {
            console.log('boardActions: Coulnd\'t add task');
            throw err;
        }
    }
}
export function removeTask(taskId, board, group, loggedUser) {
    return dispatch => {
        try {
            const updatedBoard = boardService.removeTask(taskId, board, group, loggedUser);
            dispatch({ type: 'SET_BOARD', board: updatedBoard })
        } catch (err) {
            console.log('boardActions: Coulnd\'t add task');
            throw err;
        }
    }
}
export function editTask(task, board, desc, loggedUser) {
    return dispatch => {
        try {
            const updatedBoard = boardService.updateTask(task, board, desc, loggedUser);
            dispatch({ type: 'SET_BOARD', board: updatedBoard })
        } catch (err) {
            console.log('boardActions: Coulnd\'t edit task');
            throw err;
        }
    }
}

//---------------------BOARD BAR--------------------
export function toggleBoardbar() {
    return dispatch => {
        dispatch({ type: 'TOGGLE_BOARDBAR' })
    }
}