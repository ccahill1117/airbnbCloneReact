import React from "react";

function ExploreComponent({componentName, thumbURL}) {
  var myStyledComponentStyles = {
    borderRadius: '10px',
    color: '#484848',
    display: 'flex',
    margin: '20px',
    flexDirection: 'row',

  }
  var thumbStyle = {
    width: '80px',
    marginRight: '10px',
  }
  var insetBoxShadow = {
    borderRadius: '10px',
    padding: '10px 25px 1px 25px',
    boxShadow: 'inset 10px 10px 30px -15px #000000'
  }
  var outsetBoxShadow = {
    borderRadius: 'inherit',
    height: '100%',
    width: '100%',
    boxShadow: '10px 10px 20px -10px #000000'
  }

  return (
    <div style={myStyledComponentStyles}>
      <div style={outsetBoxShadow}>
        <div style={insetBoxShadow}>
          <div>
            <img src={thumbURL} style={thumbStyle}></img>
          </div>
          <div>
            <h4>{componentName}</h4>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ExploreComponent;
