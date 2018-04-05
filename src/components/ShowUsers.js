import React from 'react'

import ShowProperties from './ShowProperties'

import { Card, Icon } from 'semantic-ui-react'

const ShowUsers = (props) => {

  console.log('hello from ShowUsers')
  console.log('props from ShowUsers: ', props)
  // console.log('props.users from ShowUsers: ', props.users)
  // console.log('props.users.length: ', props.users.length)

  const allUsers = props.users //an array
  const allProperties = props.properties //an array

  // console.log('allUsers.length: ', allUsers.length)
  // console.log('allProperties: ', allProperties)
  // console.log('allProperties[0]: ', allProperties[0])

  return(

    <div key={props.id} className='center show-users'>
      <Card fluid>
        {/* ShowUsers will be here!!! */}

        {allUsers.length > 0 ? allUsers.map( (user) => {
          return (
            <div key={user.id} className='each-user'>
              <Card fluid color='blue'>

                <Card.Content className='user-card-header'>

                  <Card.Header>
                    <h1>
                      {user.name}
                    </h1>
                    {/* {`user id: ${user.id}`} */}

                    <div>
                      {user.buildings.length > 0 ? <Icon name='building' /> : <Icon name='photo' />}
                    </div>

                  </Card.Header>


                  <Card.Description>
                    {`"${user.bio}"`}
                  </Card.Description>
                </Card.Content>


                <Card.Content className='user-card-content'>

                  <div>
                    {user.buildings.length > 0 ? `Buildings: ${user.buildings.length}` : 'Ad Campaigns Below'}
                  </div>

                  {user.buildings.length > 0 ?
                    <ShowProperties
                      properties={allProperties}
                      userBuildingNames={user.buildings.map(building => building.name)}
                    />
                    :
                    "no properties"}

                  </Card.Content>
                </Card>
              </div>
            )
          }
        )
        : "allUsers here"}

      </Card>
    </div>
  )
}

export default ShowUsers
