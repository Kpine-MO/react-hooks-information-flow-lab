import React from "react";

function Header(props){

  function handleClick(){

    props.onDarkModeClick()
  }

    return (
          <header>
            <h2>Shopster</h2>
            <button onClick={handleClick}>
               {props.isDarkMode ? "Dark" : "Light"} Mode
            </button>
          </header>
      );
}

export default Header