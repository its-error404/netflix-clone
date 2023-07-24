import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import AllMovies from './AllMovies'
import AllSeries from './AllSeries'

const Row = ({ heading, fetchURL, fetchSeriesURL }) => {
    
    const [ Movies, SetMovies ] = useState([])

    useEffect(()=>
    {
        axios.get(fetchURL)
        .then((response)=>
        {
            SetMovies(response.data.results)
        })
    },[fetchURL])

    const [ Series, SetSeries ] = useState([])
    
    useEffect(()=>
    {
        axios.get(fetchSeriesURL)
        .then((response)=>
        {
            SetSeries(response.data.results)
        })
    },[fetchSeriesURL])

  return (
    
    <div>
      <h1 className='p-4 ml-4 font-bold text-white font-Raleway md:text-xl'>{heading}</h1>
      <div className='relative flex items-center'>
        <Slider className='relative w-full h-full overflow-x-scroll whitespace-normal scroll-smooth scrollbar-hide'>
            {
                Movies.map((movie, movie_id) =>
                (
                   <AllMovies key={movie_id} movie={movie} />
                ))
            }
        </Slider>

        <Slider className='relative w-full h-full overflow-x-scroll whitespace-normal scroll-smooth scrollbar-hide'>
                {
                    Series.map((serie, serie_id) =>
                    (
                        <AllSeries key={serie_id} serie={serie}/>
                    ))
                }
        </Slider>
      </div>
    </div>
  )
}

const Slider = styled.div``
export default Row
