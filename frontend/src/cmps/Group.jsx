import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
// import { Task } from '../cmps/Task';
import { boardService } from '../services/boardService'
import { loadBoards } from '../store/actions/boardActions.js'
import { loadUsers } from '../store/actions/userActions.js'
export class _Group extends Component {
    state = {
        id: '',
    }
    getBoard = () => {
        const gBoard = boardService.query()
        return gBoard
      }
    render() {
        const board = this.getBoard();
        return (
            <div>
          <table>
          <tr><th>{board.groups[0].name}</th><th>Members</th><th>Status</th><th>Date</th></tr>
          <tr>
            <td>{board.groups[0].tasks[0].name}</td>
            <td>{board.groups[0].tasks[0].members[0].fullname}</td>
            
          </tr>
        </table>
            </div>
        )
    }
}


const mapDispatchToProps = {
    loadBoards,
    loadUsers,
  }
  
  const mapStateToProps = state => {
    return {
      boards: state.boardReducer.boards,
      users: state.userReducer.users,
      loggedUser: state.userReducer.loggedUser,
      // filterBy: state.boardReducer.filterBy
    }
  }
  
  export const Group = connect(mapStateToProps, mapDispatchToProps)(_Group)
  
  