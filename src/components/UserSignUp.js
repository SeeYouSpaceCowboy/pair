import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {createUser} from '../actions/index'

class UserSignUp extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {name: this.refs.name.value, email: this.refs.email.value, userPassword: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}

    this.props.createUser(user)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="name" placeholder="Enter Name" />
          <input ref="email" placeholder="Enter Email" />
          <input type="password" ref="userPassword" placeholder="Enter Password" />
          <input type="password" ref="passwordConfirmation" placeholder="Enter Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)