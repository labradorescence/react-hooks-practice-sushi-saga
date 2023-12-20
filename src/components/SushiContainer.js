import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi}) {

  const [ sushiIndex, setSushiIndex ] = useState(0)

  const fourSushi = sushi.slice(sushiIndex, sushiIndex+4)
  const sushiPlate = fourSushi.map(oneSushi=> {
    return <Sushi oneSushi={oneSushi} key={oneSushi.id}/>
  })

  const onShowMoreSushi = () => {
        setSushiIndex((sushiIndex) => (sushiIndex+4) % sushi.length )
        console.log(sushiIndex, sushiIndex+4, sushi.length, (sushiIndex+4) % sushi.length )
        //modulo calculator
        //https://www.calculatorsoup.com/calculators/math/modulo-calculator.php

        // is a way to wrap back around to the beginning of the array once we get to the end
        // using the remainder (%) operator
  }

  return (
    <div className="belt">
      {sushiPlate}
      <MoreButton onShowMoreSushi={onShowMoreSushi} />
    </div>
  );
}

export default SushiContainer;
