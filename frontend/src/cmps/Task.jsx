import React, { Component } from 'react'
import {boardService} from '../services/boardService'
export  class Task extends Component {

    componentDidMount() {
        this.props.loadBoard()
        this.props.loadUsers()
      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
