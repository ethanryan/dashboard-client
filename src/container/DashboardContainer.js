import React, {Component} from 'react'

import ShowUsers from '../components/ShowUsers'

import * as api from '../api'

class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }
  componentDidMount() {
    api.getUsers()
    .then (allUsers => this.setState({
      users: allUsers
    }) )
  }

  render() {
    console.log('0. state from DashboardContainer: ', this.state)
    return(
      <div key={this.props.id} className='center'>
        <h1>
          DashboardContainer is here!!!
        </h1>

        <ShowUsers />

      </div>
    )
  }

}

export default DashboardContainer
