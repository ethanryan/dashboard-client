import React from 'react'

import { Card, Statistic } from 'semantic-ui-react'

// import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

// import BusinessChart from '../assets/BusinessChart.svg'

ReactChartkick.addAdapter(Chart)


const ShowAds = (props) => {

  // console.log('ShowAds props: ', props)

  return(
    <div>
      {/* {props.userBuildingNames < 1 ? "Monthly Ad Campaign Results" : " "} */}

      {props.properties
        ?
        props.properties.map( (property, index) => {
          let eachAd = property.ads.map(ad => ad.name) //array of ad names...
          if ( props.adCampaign.includes(eachAd) ) {
            return(
              <div key={index} className='each-advertisment'>
                <Card fluid color='purple'>

                  <div>
                    {property.ads ? property.ads.map( (ad, index) => {
                      return (
                        <div key={index} className='each-ad-in-advertisment'>

                          {/* <LineChart data={[[new Date(), 5], [1368174456, 4], ["2017-01-01 00:00:00 UTC", 7]]} /> */}

                          <LineChart data={[
                            [new Date(new Date().setDate(new Date().getDate()-42)), (ad.hourly_impressions / 3)],
                            [new Date(new Date().setDate(new Date().getDate()-35)), (ad.hourly_impressions - 75)],
                            [new Date(new Date().setDate(new Date().getDate()-28)), (ad.hourly_impressions - 150)],
                            [new Date(new Date().setDate(new Date().getDate()-21)), (ad.hourly_impressions / 2)],
                            [new Date(new Date().setDate(new Date().getDate()-14)), (ad.hourly_impressions + 100)],
                            [new Date(new Date().setDate(new Date().getDate()-7)), ad.hourly_impressions - 175],
                            [new Date(), ad.hourly_impressions]
                          ]} />

                          <h4>
                            Ad campaign:
                          </h4>
                          <div className='big-ad-name-text'>
                            {ad.name}
                          </div>
                          <Statistic>
                            <Statistic.Value>{ad.hourly_impressions.toLocaleString()}</Statistic.Value>
                            <Statistic.Label>Ad impressions</Statistic.Label>
                          </Statistic>
                        </div>
                      )
                    })
                    :
                    "property.ads here!!!"}
                  </div>

                  <br></br>

                  {/* <div className="pie-chart-img">
                    <img src={BusinessChart} alt="business chart"/>
                  </div> */}

                  <Card.Header className='show-properties-card-header'>
                    <h2>
                      {property.name}
                    </h2>
                  </Card.Header>
                  <Card.Description>
                    {property.address}
                  </Card.Description>

                  <div>
                    {property.windows ? property.windows.map( (eachWindow, index) => {
                      return (
                        <div key={index} className='each-window'>
                          <h4>
                            Window info:
                          </h4>
                          <div>Hourly foot traffic: {eachWindow.hourly_foot_traffic.toLocaleString()}</div>
                          <div>Hourly mobile devices: {eachWindow.hourly_mobile_devices.toLocaleString()}</div>
                          <div>Hourly vehicle traffic: {eachWindow.hourly_vehicle_traffic.toLocaleString()}</div>
                        </div>
                      )
                    })
                    :
                    "property.windows here!!!"}
                  </div>
                </Card>
              </div>
            )
          }
          return " "
        })
        :
        "No ads!"}

      </div>
    )
  }

  export default ShowAds
