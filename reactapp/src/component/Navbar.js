import React from 'react';

function Navbar(props) {
  return (
    <div className="narvar">
      <h2>It is {props.name}.</h2>
    </div>
  )
}

export default Navbar;