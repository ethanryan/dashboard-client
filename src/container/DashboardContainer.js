import React, {Component} from 'react'

import ShowUsers from '../components/ShowUsers'

import * as api from '../api'

import { Tab } from 'semantic-ui-react'

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
    console.log('-------->>>> 0. state from DashboardContainer: ', this.state)

    const panes = [
      { menuItem: `All Users - ${this.state.users.length}`, render: () =>
      <Tab.Pane>
        <ShowUsers
          users={this.state.users}
          properties={this.state.properties}
        />
      </Tab.Pane>
    },

    { menuItem: `Property Owners - ${this.state.users.filter(user => user.buildings.length > 0).length}`, render: () =>
    <Tab.Pane>
      <ShowUsers
        users={this.state.users.filter(user => user.buildings.length > 0)}
        properties={this.state.properties}
      />
    </Tab.Pane>
  },

  { menuItem: `Advertisers - ${this.state.users.filter(user => user.buildings.length < 1).length}`, render: () =>
  <Tab.Pane>
    <ShowUsers
      users={this.state.users.filter(user => user.buildings.length < 1)}
      properties={this.state.properties}
    />
  </Tab.Pane>
},
]

return(
  <div key={this.props.id} className='center dashboard-tabs'>

    {/* <h1>
      DashboardContainer is here!!!
    </h1> */}

    <Tab panes={panes} />


    {/* <ShowUsers
      users={this.state.users}
      properties={this.state.properties}
    /> */}

  </div>
)
}

}

export default DashboardContainer
