import { useEffect, useState } from "react"
import axios from "axios"
import { MovieRequests, SeriesRequests  } from "../requests"
import styled from "styled-components"

const MainSection = () => {
    
    //Random Movies
    
    const [Movies, setMovies] = useState([])   
    const Movie = Movies[Math.floor(Math.random() * Movies.length)]
   
    useEffect(()=>
    {
      axios.get(MovieRequests.Trending)
      .then((response)=>
      {
        setMovies(response.data.results)
      })
    },[])
    
    console.log(Movies)
    //Random Series

    const [Series, SetSeries] = useState([])
    const TVSerie = Series[Math.floor(Math.random() * Series.length)]

    useEffect(()=>
    {
      axios.get(SeriesRequests.LatestTV)
      .then((response)=>
      {
        SetSeries(response.data.results)
      })
    },[])
   
    const cutOverview = (str, num) =>
    {
      if (str?.length > num)
      {
        return str.slice(0,num) + '......Read More'
      }
      else
      {
        return str
      }
    }

  return (
    <MovieDivision className="w-full text-white h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"> </div>
          <img className="object-top w-full h-full" src={`https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}`} alt={Movie?.title}></img>
          <div className="w-full top-[20%] p-4 md:p-8 absolute">
            <h1 className="pb-4 text-3xl font-bold md:text-5xl font-Raleway">{Movie?.title}</h1>
            <div>
                <button className="px-5 py-2 font-bold text-white bg-black border rounded-md">Play Now</button>
                <button className="px-5 py-2 ml-6 font-bold text-white bg-red-500 border rounded-md">Add to Watch List</button>
            </div>
            <p className="pt-4 text-base text-gray-300"><span className="pr-2 font-bold">Date of Release:</span>{Movie?.release_date} </p>
            <p className="pt-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{cutOverview(Movie?.overview, 160 )}</p>
          </div>
      </div>
    </MovieDivision>

    //Video Section

    // <VideoDivision className="w-full text-white h-[550px]">
    //   <div className="relative w-full h-full">
    //     <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
    //     <video className="object-top w-full h-full">
    //       <source src={`https://api.themoviedb.org/3/movie/${movie_id}/videos`}>
          
    //       </source>
    //     </video>
    //   </div>
    // </VideoDivision>

    // <SeriesDivision className="w-full text-white h-[550px]">
    //   <div className="w-full h-full">
    //     <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"> </div>
    //       <img className="object-top w-full h-full" src={`https://image.tmdb.org/t/p/original/${TVSerie?.backdrop_path}`} alt={TVSerie?.name}></img>
    //       {/* <video width="1920" height="1080">
    //         <source src={`https://api.themoviedb.org/3/movie/${MovieVideo?.id}/videos`} type="video/mp4"></source>
    //       </video> */}
    //       <div className="w-full top-[20%] p-4 md:p-8 absolute">
    //         <h1 className="pb-4 text-3xl font-bold md:text-5xl font-Raleway">{TVSerie?.name}</h1>
    //         <div>
    //             <button className="px-5 py-2 font-bold text-white bg-black border rounded-md">Play Now</button>
    //             <button className="px-5 py-2 ml-6 font-bold text-white bg-red-500 border rounded-md">Add to Watch List</button>
    //         </div>
    //         <p className="pt-4 text-base text-gray-300"><span className="pr-2 font-bold">First Air Date:</span>{TVSerie?.first_air_date} </p>
    //         <p className="pt-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]"><span className="font-bold"> Overview: </span>{cutOverview(TVSerie?.overview)}</p>
    //         {/* <p className="pt-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{TVSerie?.overview}</p> */}
    //         {/* <p>{Movie?.}</p> */}
    //       </div>
    //   </div>
    // </SeriesDivision>

    
  )
}

const MovieDivision = styled.div``
const SeriesDivision = styled.div``
const VideoDivision = styled.div``

export default MainSection
