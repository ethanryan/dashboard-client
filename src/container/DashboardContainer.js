import React, {Component} from 'react'

import ShowUsers from '../components/ShowUsers'

import * as api from '../api'

class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      properties: [],
      // properties: {
      //   Trump: [],
      // },
    }
  }

  componentDidMount() {
    api.getUsers()
    .then (allUsers => this.setState({
      users: allUsers
    }) )

    api.getProperties()
    .then (trumpProperies => this.setState({
      properties: trumpProperies, //this needs to add trumpProperies to properties array, not override it....
      // properties: {
      //   Trump: trumpProperies
      // }
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
          properties={this.state.properties}
        />

      </div>
    )
  }

}

export default DashboardContainer
