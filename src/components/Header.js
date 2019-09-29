//Functional components
//if your app wont use state or app, make use of a functional component
//To render an element in another element you used it as a self closing tag then import it.

import React from "react";
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
export default Header;
