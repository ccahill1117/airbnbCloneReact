import React from "react";


function BookingForm(props) {
  var myStyledComponentStyles = {
    position: 'absolute',
    display: 'block',
    zIndex: '1',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    width: '475px'
  }
  var buttonStyle = {
    color: 'white',
    backgroundColor : 'red',
    borderRadius: '5px'
  }

  return (
    <div style={myStyledComponentStyles}>
      <div>
        <h1>Book unique homes and experiences.</h1>
        <button style={buttonStyle}>Search</button>
      </div>
    </div>
  );
}

export default BookingForm;
