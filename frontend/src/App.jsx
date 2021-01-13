import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Chat } from './pages/Chat'
import { UserDetails } from './pages/UserDetails'

import { Navbar } from './cmps/Navbar'
import { Boardbar } from './cmps/Boardbar'


export function App() {
  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
        <Boardbar></Boardbar>
        <main>
          <Switch>
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/chat" component={Chat} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
   </div>
  )
}

