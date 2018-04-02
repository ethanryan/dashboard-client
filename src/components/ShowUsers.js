import React from 'react'

import ShowProperties from './ShowProperties'

const ShowUsers = (props) => {

  console.log('hello from ShowUsers')
  console.log('props from ShowUsers: ', props)
  console.log('props.users from ShowUsers: ', props.users)
  console.log('props.users.length: ', props.users.length)

  const allUsers = props.users //an array
  const allProperties = props.properties //an array

  console.log('allUsers.length: ', allUsers.length)
  console.log('allProperties: ', allProperties)
  console.log('allProperties[0]: ', allProperties[0])
  // console.log('allUsers[0]: ', allUsers[0])
  // console.log('allUsers[2]: ', allUsers[2])

  return(

    <div key={props.id} className='center show-users'>
      ShowUsers will be here!!!

      <br></br>
      <br></br>

      {allUsers.length > 0 ? allUsers.map( (user) => {
        return (
          <div key={user.id} className='each-user'>
            <h1>
              {`${user.name}`}
            </h1>
            <div>
              {user.name === "Trump" ? "THIS IS TRUMP!!!" : "nope"}
            </div>
            <h2>
              {`user id: ${user.id}`}
              <br></br>
              {`"${user.bio}"`}
            </h2>
            <div>
              {`Buildings: ${user.buildings.length}`}
            </div>

            {user.buildings.length > 0 ?
              //const filteredStories = props.stories.filter(story => story.user.id === props.user.id)

              //const matchingProperty = allProperties.filter(property => property.name === building.name)
              <ShowProperties
                // properties={allProperties.map(property => property.name === user.buildings.filter(building => building.name === property.name) )}
                properties={allProperties}
                userBuildings={user.buildings.map(building => building.name)}
              />
              // user.buildings.map( (building) => {
              //   const matchingProperty = allProperties.filter(property => property.name === building.name)
              //   console.log('matchingProperty is: ', matchingProperty)
              //
              //   return (
              //     <div key={building.id} className='each-building'>
              //       <h3>
              //         {building.name}
              //       </h3>
              //       {building.address}
              //       <br></br>
              //       {allProperties.length > 0 ? allProperties.map( (property) => {
              //
              //         //const filteredStories = props.stories.filter(story => story.user.id === props.user.id)
              //
              //         // const matchingProperty = allProperties.filter(property => property.name === building.name)
              //         // console.log('matchingProperty is: ', matchingProperty)
              //
              //         return (
              //           <div key={property.id} className='each-property'>
              //               {matchingProperty.length > 0 ?
              //               `matching property is: ${matchingProperty[0].name}`
              //               :
              //               "no matching property"}
              //           </div>
              //         )
              //       })
                    :
                    "no properties"}

          </div>
        )
      }
      )
       : "allUsers here"}

    </div>
  )
}

export default ShowUsers
