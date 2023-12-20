import React, {useState} from "react";

function Sushi({ oneSushi }) {



  // console.log(oneSushi)
  const { img_url, name, price } = oneSushi

  const handleClick=() => {

  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {false ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
