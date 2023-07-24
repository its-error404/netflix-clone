import { useEffect, useState } from "react"
import axios from "axios"
import requests from "../requests"

const MainSection = () => {

    const [Movies, setMovies] = useState([])
    // const [MovieVideos, setMovieVideos] = useState([])
    // const [MovieIndex, setMovieIndex] = useState(0)

    const Movie = Movies[Math.floor(Math.random() * Movies.length)]
    // const MovieVideo = MovieVideos[Math.floor(Math.random() * MovieVideos.length)]

    useEffect(()=>
    {
      axios.get(requests.Trending)
      .then((response)=>
      {
        setMovies(response.data.results)
      })
    },[])

    // useEffect(()=>
    // {
    //   axios.get(requests.VideosofMovies)
    //   .then((response)=>
    //   {
    //     setMovieVideos(response.data.results)    
    //   })
    // },[])

    //Random Movie from Array
    
    // useEffect(()=>
    // {
    //   const Index = Math.floor(Math.random() * Movies.length)
    //   setMovieIndex(Index)
    // },[Movies])

    // const Movie = Movies[MovieIndex]
    // const MovieVideo = MovieVideos.find((video) => video.id === Movie?.id)

    // console.log(Movie)
    // console.log(MovieVideo)

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
    <div className="w-full text-white h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"> </div>
          <img className="object-top w-full h-full" src={`https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}`} alt={Movie?.title}></img>
          {/* <video width="1920" height="1080">
            <source src={`https://api.themoviedb.org/3/movie/${MovieVideo?.id}/videos`} type="video/mp4"></source>
          </video> */}
          <div className="w-full top-[20%] p-4 md:p-8 absolute">
            <h1 className="pb-4 text-3xl md:text-5xl font-Raleway">{Movie?.title}</h1>
            <div>
                <button className="px-5 py-2 font-bold text-white bg-black border rounded-md">Play Now</button>
                <button className="px-5 py-2 ml-6 font-bold text-white bg-red-500 border rounded-md">Add to Watch List</button>
            </div>
            <p className="pt-4 text-base text-gray-300"><span className="pr-2 font-bold">Date of Release:</span>{Movie?.release_date} </p>
            <p className="pt-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{cutOverview(Movie?.overview, 160 )}</p>
            {/* <p>{Movie?.}</p> */}
          </div>
      </div>
    </div>
  )
}

export default MainSection
