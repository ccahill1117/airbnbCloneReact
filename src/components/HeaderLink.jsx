import React from "react";

function HeaderLink({linkText}) {
  var myStyledComponentStyles = {
    padding: '10px',
  }
  return (
    <div style={myStyledComponentStyles}>
      {linkText}
    </div>

  );
}

export default HeaderLink;
