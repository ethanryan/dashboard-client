import React from 'react'

import { Card, Statistic } from 'semantic-ui-react'

import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

// import BusinessChart from '../assets/BusinessChart.svg'

ReactChartkick.addAdapter(Chart)


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

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

                          <LineChart data={[
                            [new Date(new Date().setDate(new Date().getDate()-42)), (ad.hourly_impressions + getRandomInt(-ad.hourly_impressions, ad.hourly_impressions))],
                            [new Date(new Date().setDate(new Date().getDate()-35)), (ad.hourly_impressions + getRandomInt(-ad.hourly_impressions, ad.hourly_impressions))],
                            [new Date(new Date().setDate(new Date().getDate()-28)), (ad.hourly_impressions + getRandomInt(-ad.hourly_impressions, ad.hourly_impressions))],
                            [new Date(new Date().setDate(new Date().getDate()-21)), (ad.hourly_impressions + getRandomInt(-ad.hourly_impressions, ad.hourly_impressions))],
                            [new Date(new Date().setDate(new Date().getDate()-14)), (ad.hourly_impressions + getRandomInt(-ad.hourly_impressions, ad.hourly_impressions))],
                            [new Date(new Date().setDate(new Date().getDate()-7)), (ad.hourly_impressions + getRandomInt(-ad.hourly_impressions, ad.hourly_impressions))],
                            [new Date(), ad.hourly_impressions]
                          ]} />

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

                          <PieChart data={{
                            "Hourly foot traffic": eachWindow.hourly_foot_traffic,
                            "Hourly mobile devices": eachWindow.hourly_mobile_devices,
                            "Hourly vehicle traffic": eachWindow.hourly_vehicle_traffic,
                          }} />

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
