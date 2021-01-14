import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class _Boardbar extends Component {

state = {

}

componentDidMount() {
    console.log('Working!')
}

componentWillUnmount() {
}

render() {
    return (
<React.Fragment>
<section>
    <div className="boardbar">
    <h2>Boards</h2>
    <button>+</button>
    </div>
    <input onChange={this.handleSearchChange} type="text" placeholder="Search a Board" />
</section>

 </React.Fragment>
    )
}

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userReducer.loggedInUser
    }
}
const mapDispatchToProps = {}


export const Boardbar = connect(mapStateToProps, mapDispatchToProps)(_Boardbar)