//import React, {Component} from 'react'
import React from 'react'

import ShowUsers from '../components/ShowUsers'


const DashboardContainer = (props) => {

  console.log('hello from DashboardContainer')
  return(

    <div key={props.id} className='center'>
      <h1>
        DashboardContainer is here!!!
      </h1>

      <ShowUsers />
    </div>
  )
}

export default DashboardContainer
