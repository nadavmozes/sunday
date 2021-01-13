import React from 'react'
import { Component } from 'react'
//import { connect } from 'react';
import { Group } from '../cmps/Group';
import {boardService} from '../services/boardService'

class _Board extends Component  {

    state = {
        boardId: '',
        txt: '',
        }


    render(){
    return (
        <div>
             <p>Main Board</p>
             {/* </Filter> */}
{/* </Group> */}
        </div>
    )
}
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}
//connect(mapStateToProps, mapDispatchToProps)
export const Board = (_Board)
