import React from 'react'

import { Card } from 'semantic-ui-react'

const ShowProperties = (props) => {

  console.log('ShowProperties props: ', props)
  console.log('props.properties[0] is: ', props.properties[0])
  console.log('props.userBuildingNames[0] is: ', props.userBuildingNames[0])

  return(
    <div>
      {"ShowProperties here!!!"}
      <br></br>
        {props.properties.length > 0
          ?
          props.properties.map( (property) => {
            if ( props.userBuildingNames.includes(property.name) ) {
              console.log('property is: ', property)
              return (
                <div key={property.id} className='each-property'>
                  <h3>
                    {property.name}
                  </h3>
                  {property.address}

                  <div>
                    Windows: {property.windows.length}
                    <div>
                      {property.windows.map( (eachWindow) => {
                        return (
                          <div key={eachWindow.id} className='each-window'>
                            <div>
                            <h4>
                              Window info:
                            </h4>
                            <div>Hourly foot traffic: {eachWindow.hourly_foot_traffic}</div>
                            <div>Hourly mobile devices: {eachWindow.hourly_mobile_devices}</div>
                            <div>Hourly vehicle traffic: {eachWindow.hourly_vehicle_traffic}</div>
                          </div>
                        </div>
                        )
                      })}
                 </div>
                 </div>

                  <div>
                    Ads: {property.ads.length}
                    <div>
                      {property.ads.map( (ad) => {
                        return (
                          <div key={ad.id} className='each-ad'>
                            <h4>
                              Ad campaign: {ad.name}
                            </h4>
                            Ad impressions: {ad.hourly_impressions}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }
            return "*****"
          })
          : "no thanks......"}
    </div>
  )
}

export default ShowProperties
