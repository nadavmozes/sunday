import React, { Component } from 'react'
import {boardService} from '../services/boardService'
import { loadBoards} from '../store/actions/boardActions.js'
import { loadUsers } from '../store/actions/userActions.js'
export  class Task extends Component {

    componentDidMount() {
        this.props.loadBoards()
        this.props.loadUsers()
      }

    render() {
        return (
            <div>
                {this.props.boards && <ul>
          {this.props.boards.groups.tasks.map(task => (
            <li key={task._id}>
              <h3>{task.name}</h3>
            </li>
          ))}
        </ul>}
            </div>
        )
    }
}
