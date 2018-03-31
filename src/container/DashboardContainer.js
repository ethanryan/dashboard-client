import React, {Component} from 'react'

const DashboardContainer = (props) => {

  console.log('hello from DashboardContainer')
  return(

    <div key={props.id} className='center'>
      DashboardContainer will do here!!!
    </div>
  )
}

export default DashboardContainer
