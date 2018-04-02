import React from 'react'

const ShowProperties = (props) => {

  console.log('ShowProperties props: ', props)
  console.log('props.properties[0] is: ', props.properties[0])
  console.log('props.userBuildings[0] is: ', props.userBuildings[0])

  return(
    <div>
      {"ShowProperties here!!!"}
      <br></br>
        {props.properties.length > 0
          ?
          props.properties.map( (property) => {
            if ( props.userBuildings.includes(property.name) ) {
              return (`${property.name}`)
            }
            return "*****"
          })
          : "no thanks......"}
    </div>
  )
}

export default ShowProperties
