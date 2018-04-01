import React, {Component} from 'react'

import ShowUsers from '../components/ShowUsers'

import * as api from '../api'

class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      properties: {
        trump: [],
      },
    }
  }

  componentDidMount() {
    api.getUsers()
    .then (allUsers => this.setState({
      users: allUsers
    }) )

    api.getProperties()
    .then (trumpProperies => this.setState({
      properties: {
        trump: trumpProperies
      }
    }) )
  }

  render() {
    console.log('0. state from DashboardContainer: ', this.state)
    return(
      <div key={this.props.id} className='center'>

        <h1>
          DashboardContainer is here!!!
        </h1>

        <ShowUsers
          users={this.state.users}
        />

      </div>
    )
  }

}

export default DashboardContainer
