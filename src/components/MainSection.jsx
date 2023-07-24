import { useEffect, useState } from "react"
import axios from "axios"
import requests from "../requests"

const MainSection = () => {

    const [Movies, setMovies] = useState([])

    useEffect(()=>
    {
      axios.get(requests.Horror).then((response)=>
      {
        setMovies(response.data.results)
      })
    },[])

    console.log(Movies)

  return (
    <div>
      
    </div>
  )
}

export default MainSection
