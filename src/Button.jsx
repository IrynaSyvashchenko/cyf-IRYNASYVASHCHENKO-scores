import React from "react";


const Button = ({sort, setSort}) => {
    console.log("Button 1")
    function changeSort() {
        setSort((sort) => !sort);
      }
    
    return (
        <button className="button" onClick={changeSort}>Sort</button>
    )
}

export default Button;