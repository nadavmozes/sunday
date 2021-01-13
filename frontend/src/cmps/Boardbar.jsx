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

<section className="boardbar">
    <h2>Boards</h2>
    <button>+</button>
</section>

    )
}

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {}


export const Boardbar = connect(mapStateToProps, mapDispatchToProps)(_Boardbar)