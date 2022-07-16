import React from "react";

function Header({onDarkModeClick}){

    return (
        <div className={"App "}>
          <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
              Light Mode
            </button>
          </header>
        </div>
      );
}

export default Header