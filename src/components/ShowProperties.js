import React from 'react'

import { Card, Statistic } from 'semantic-ui-react'

const ShowProperties = (props) => {

  console.log('ShowProperties props: ', props)
  console.log('props.properties[0] is: ', props.properties[0])
  console.log('props.userBuildingNames[0] is: ', props.userBuildingNames[0])

  return(
    <div>
      {/* {"ShowProperties here!!!"} */}
      {/* <br></br> */}

      {props.properties.length > 0
        ?
        props.properties.map( (property, index) => {
          if ( props.userBuildingNames.includes(property.name) ) {
            console.log('property is: ', property)
            // console.log('index is: ', index)
            return (
              // <div key={property.id} className='each-property'>
              <div key={index} className='each-property'>
                <Card fluid color='orange'>
                  <Card.Header>
                    <h3>
                      {property.name}
                    </h3>
                  </Card.Header>
                  <Card.Description>
                    {property.address}
                  </Card.Description>

                  {/* <br></br> */}

                  <div>
                    {/* Windows: {property.windows ? property.windows.length : "property.windows.length here"} */}
                    {property.windows ? property.windows.map( (eachWindow) => {
                      return (
                        <div key={eachWindow.id} className='each-window'>
                          <Card fluid color='green'>
                            <h4>
                              Window info:
                            </h4>
                            <div>Hourly foot traffic: {eachWindow.hourly_foot_traffic}</div>
                            <div>Hourly mobile devices: {eachWindow.hourly_mobile_devices}</div>
                            <div>Hourly vehicle traffic: {eachWindow.hourly_vehicle_traffic}</div>
                          </Card>
                        </div>
                      )
                    })
                    :
                    "property.windows here!!!"}
                  </div>

                  <div>
                    {/* Ads: {property.ads ? property.ads.length : "property.ads.length here"} */}
                    {property.ads ? property.ads.map( (ad) => {
                      return (
                        <div key={ad.id} className='each-ad'>
                          <Card fluid color='purple'>
                            <h4 className='no-padding'>
                              Ad campaign: {ad.name}
                            </h4>
                            {/* Ad impressions: {ad.hourly_impressions} */}
                            <Statistic>
                              <Statistic.Value>{ad.hourly_impressions.toLocaleString()}</Statistic.Value>
                              <Statistic.Label>Ad impressions</Statistic.Label>
                            </Statistic>

                          </Card>
                        </div>
                      )
                    })
                    :
                    "property.ads here!!!"}
                  </div>
                </Card>
              </div>
            )
          }
          // return "No property data."
          // return " *** "
          return " "
        })
        : "No properties!"}
      </div>
    )
  }

  export default ShowProperties
