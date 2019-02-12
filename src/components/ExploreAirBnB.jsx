import React from "react";
import ExploreComponent from './ExploreComponent';

function ExploreAirBnB() {
  var myStyledComponentStyles = {
    color: '#484848',
    marginRight: '70px',
    marginLeft: '70px',
    borderStyle: 'solid'
  }
  var exploreComponentArray = {
      display: 'flex',
      flexDirection: 'row',

    }
  return (
    <div style={myStyledComponentStyles}>
      <h3>Explore AirBnB</h3>
      <div style={exploreComponentArray}>
        <ExploreComponent componentName="Homes" thumbURL="https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg"/>
        <ExploreComponent componentName="Experiences" thumbURL="https://a0.muscache.com/4ea/air/v2/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg"/>
        <ExploreComponent componentName="Restaurants" thumbURL="https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg"/>
      </div>
    </div>

  );
}

export default ExploreAirBnB;
