import { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer";
import Table from "./Table";


export default function SushiPage( {api}) {

    const [ sushi, setSushi ] = useState([])
    const [ isSushiGone, setIsSushiGone ] = useState(false)

    useEffect(() => {
        fetch(api)
        .then(response=>response.json())
        .then(sushiArr => setSushi(sushiArr))

    }, [])



  return (
   <>
      <SushiContainer sushi={sushi} />
      <Table />
   
   </>
  )
}
