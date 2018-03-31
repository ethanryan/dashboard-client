import React from 'react'

const ShowUsers = (props) => {

  console.log('hello from ShowUsers')
  return(

    <div key={props.id} className='center'>
      ShowUsers will be here!!!
    </div>
  )
}

export default ShowUsers
