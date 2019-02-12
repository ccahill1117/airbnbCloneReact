import React from "react";
import HeaderLink from "./HeaderLink";
import Header from './Header';
import BookingForm from './BookingForm';

function UpperSection(props) {
  var myStyledComponentStyles = {
    position: 'absolute !important',
    width: '100% !important',
    height: '100% !important',
    overflow: 'hidden !important',
    background: '#D8D8D8 !important',
    zIndex: '-2 !important'
  }

  var imgStyle = {
    height: 'auto !important',
    width: 'auto !important',
    minHeight: '100% !important',
    minWidth: '100% !important',
    position: 'absolute !important',
    left: '50% !important',
    top: '50% !important'
  }
  var imgContainer = {
    zIndex: '-1 !important',
    height: '100% !important',
    width: '100% !important',
    position: 'absolute !important'
  }
  var bookingForm = {
    position: 'absolute',
    top: '120px',
    left: '120px',
    display: 'block'
  }
  return (
    <div style={myStyledComponentStyles}>
      <div style={imgContainer}>
        <img style={imgStyle} src="https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg"></img>
      </div>
      <div style={bookingForm}>
        <BookingForm/>
      </div>
    </div>
  );
}

export default UpperSection;

    // backgroundImage: "url(https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg)"
