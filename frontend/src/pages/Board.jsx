import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Group } from '../cmps/Group';
import {boardService} from '../services/boardService'
import { loadBoards} from '../store/actions/boardActions.js'
import { loadUsers } from '../store/actions/userActions.js'

class _Board extends Component  {

    state = {
        boardId: '',
        txt: '',
        isBoardShown: true,
        
        }

        componentDidMount() {
            this.props.loadBoards()
            this.props.loadUsers()
            console.log(this.props.boards);
          }

            load() {
        const gBoard = boardService.loadBoards
        return gBoard
        }
          _getCurrBoard = () => {
            return this.props.boards.find(board => board._id === this.state.boardId)
        }
        showBoard = () => {
            this.setState({ isBoardShown: false })
        }

    render(){
        const board = this._getCurrBoard();
    return (
        <div>
             <p>Main Board</p>
             {/* </Filter> */}
{/* </Group> */}
{/* {this.props.boards && <ul>
          {this.props.boards.groups.map(group => (
            <li key={group._id}>
              <h3>{group.name}</h3>
            </li>
          ))}
        </ul>} */}
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
  
  export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
  

