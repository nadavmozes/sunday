import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// Inside imports
import { loadBoards } from '../store/actions/boardActions'
import { guestLogin } from '../store/actions/userActions'

class _Home extends Component {
    state = {
        isLoading: false
    }
    componentDidMount() {
        this.video = React.createRef();
    }

    guestLogin = async () => {
        this.setState({ isLoading: true })

        await this.props.guestLogin()
        await this.props.loadBoards()

        this.setState({ isLoading: false })

        this.props.history.push(`/board/${this.props.boards[0]._id}`)
    }

    render() {
        if (this.state.isLoading) return (
            <div className="loader-container flex justify-center align-center">
                <p>working check</p>
            </div>
        )
        return (
            <section className="">
                <main className="">
                    <div className="">
                        <NavLink to="/login">
                            <button>Login</button>
                        </NavLink>
                        <NavLink to="/signup">
                            <button>Sign-up</button>
                        </NavLink>
                    </div>
                    <div className="col-left flex align-center justify-center padding-x-30  column">
                        <h1>Join the future.</h1>
                        <div className="inner-wrapper">
    
                            <button onClick={this.guestLogin} className="guest-button ">Try As a Guest!</button>
                        </div>

                    </div>
                  
                </main>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        boards: state.boardReducer.boards,
        loggedUser: state.userReducer.loggedUser
    }
}
const mapDispatchToProps = {
    loadBoards,
    guestLogin
}
export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);