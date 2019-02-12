import React from "react";
import HeaderLink from "./HeaderLink";

function Header() {
  var myStyledComponentStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    color: 'white'
  }
  var imgStyle = {
    width: '80px',

    border: '1px red solid'
  }
  var headerLinkStyle = {
    display: 'inline-block',
  }
  var linkGroup = {

  }
  return (
    <div style={myStyledComponentStyles}>
      <div>
        <img style={imgStyle} src="http://pluspng.com/img-png/airbnb-logo-png--880.png"></img>
      </div>
      <div style={linkGroup}>
        <div style={headerLinkStyle}>
          <HeaderLink linkText="Host a Home" />
        </div>
        <div style={headerLinkStyle}>
          <HeaderLink linkText="Host an Experience" />
        </div>
        <div style={headerLinkStyle}>
          <HeaderLink linkText="Help" />
        </div>
        <div style={headerLinkStyle}>
          <HeaderLink linkText="Sign up" />
        </div>
        <div style={headerLinkStyle}>
          <HeaderLink linkText="Log in" />
        </div>
      </div>
    </div>

  );
}
//https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg
export default Header;
