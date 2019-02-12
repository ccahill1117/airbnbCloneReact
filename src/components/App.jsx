import React from "react";
import Header from "./Header";
import UpperSection from './UpperSection';
import ExploreAirBnB from './ExploreAirBnB';



function App(props) {
  var myStyledComponentStyles = {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '1fr',
    fontFamily: 'arial',
  }

  return (
    <div style={myStyledComponentStyles}>
      <Header/>
      <UpperSection/>
      <ExploreAirBnB/>
    </div>
  );
}

export default App;
