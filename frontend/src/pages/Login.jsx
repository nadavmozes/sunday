import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

// Inside imports
import { login, guestLogin, signup } from '../store/actions/userActions.js'
import { loadBoards } from '../store/actions/boardActions'

class _Login extends Component {
    state = {
        isLoading: false,
        isErrLogin: false,
        errMsg: ''
    }
    onLogin = async (values, { resetForm }) => {
        try {
            resetForm();
            await this.props.login(values);
            this.setState({ isLoading: true })
            await this.props.loadBoards()
            this.setState({ isLoading: false })
            if (this.props.loggedUser) this.props.history.push(`/board/${this.props.boards[0]._id}`)
        }
        catch (err) {
            this.setState({ isErrLogin: true, errMsg: 'Wrong username or password' })
            setTimeout(() => {
                this.setState({ isErrLogin: false })
            }, 2000);
        }

    }
    onGuestLogin = async () => {
        await this.props.guestLogin();
        this.setState({ isLoading: true })
        await this.props.loadBoards()
        this.setState({ isLoading: false })
        this.props.history.push(`/board/${this.props.boards[0]._id}`)
    }
    responseFacebook = async (response) => {
        const user = {
            username: response.name,
            email: response.email,
            imgUrl: response.picture.data.url,
            facebookId: response.userID
        }
        await this.props.login(user)
        this.setState({ isLoading: true })
        await this.props.loadBoards()
        this.setState({ isLoading: false })
        if (this.props.loggedUser) this.props.history.push(`/board/${this.props.boards[0]._id}`)
    }

    render() {
      
        const { isErrLogin, errMsg } = this.state;
        if (this.state.isLoading) return (
            <div className="loader-container flex justify-center align-center">
                <img src="loading.gif" alt="" />
            </div>
        )
        return <div className="sign-login">
           
            <div data-title="Back to home" className="go-back">
               
            </div>
            <div className={`sign-login-err-modal flex justify-center align-center ${isErrLogin && "animate-sign-login-err-modal"}`}>
                <h2>{errMsg}</h2>
            </div>
        </div>

    }
}
const mapStateToProps = state => {
    return {
        loggedUser: state.userReducer.loggedUser,
        boards: state.boardReducer.boards
    }
}
const mapDispatchToProps = {
    login,
    guestLogin,
    loadBoards,
    signup
}
export const Login = connect(mapStateToProps, mapDispatchToProps)(withRouter(_Login));