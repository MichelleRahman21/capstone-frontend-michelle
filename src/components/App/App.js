import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import InstaPosts from '../InstaPosts/InstaPosts'
import InstaPost from '../InstaPosts/InstaPost'
import CreateInstaPost from '../InstaPosts/CreateInstaPost'
import EditInstaPost from '../InstaPosts/EditInstaPost'

class App extends Component {
  state = {
    user: null,
    alerts: []
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute
            user={user}
            exact
            path='/instaposts'
            render={() => (
              <InstaPosts
                user={user}
                alert={this.alert}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact path='/instaposts/:id'
            render={() => (
              <InstaPost
                user={user}
                alert={this.alert}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path='/create-instaposts'
            render={() => (
              <CreateInstaPost
                user={user}
                alert={this.alert}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact path='/instaposts/:id/edit'
            render={() => (
              <EditInstaPost
                user={user}
                alert={this.alert}
              />
            )}
          />
        </main>
      </Fragment>
    )
  }
}

export default App
