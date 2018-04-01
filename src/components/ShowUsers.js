import React from 'react'

const ShowUsers = (props) => {

  console.log('hello from ShowUsers')
  console.log('props from ShowUsers: ', props)
  console.log('props.users from ShowUsers: ', props.users)
  console.log('props.users.length: ', props.users.length)

  const allUsers = props.users //an array
  console.log('allUsers.length: ', allUsers.length)
  console.log('allUsers[0]: ', allUsers[0])

  return(

    <div key={props.id} className='center'>
      ShowUsers will be here!!!

      <br></br>
      <br></br>

      {allUsers.length > 0 ? allUsers[0].name : "allUsers here"}
      {allUsers.length > 0 ? allUsers.map(user => `user.name is: ${user.name}----`) : "allUsers here"}

    </div>
  )
}

export default ShowUsers
