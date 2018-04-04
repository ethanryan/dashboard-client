import React, {Component} from 'react'

import ShowUsers from '../components/ShowUsers'

import * as api from '../api'

class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      properties: [],
    }
  }

  componentDidMount() {
    api.getUsers()
    .then (allUsers => this.setState({
      users: allUsers
    }) )
    
    api.getPropertiesTrump()
    .then (trumpProperties => this.setState({
      properties: [...this.state.properties, ...trumpProperties], //using spread operator to add trumpProperies to properties array, not override it....
    }) )

    api.getPropertiesJayZ()
    .then (jayzProperties => this.setState({
      properties: [...this.state.properties, ...jayzProperties],
    }) )
  }

  render() {
    console.log('0. state from DashboardContainer: ', this.state)
    return(
      <div key={this.props.id} className='center'>

        {/* <h1>
          DashboardContainer is here!!!
        </h1> */}

        <ShowUsers
          users={this.state.users}
          properties={this.state.properties}
        />

      </div>
    )
  }

}

export default DashboardContainer
