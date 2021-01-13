import React, { Component } from 'react'

export default class Group extends Component {
    state = {
        id: '',
    }

    render() {
        return (
            <div>
                <div >

                    <h3 >Members</h3>
                    <h3 >Status</h3>
                    <h3 >Date</h3>
                    <h3>Priority</h3>
                    <h3 >Time Est</h3>
                    {/* </Task> */}
                </div>
            </div>
        )
    }
}
