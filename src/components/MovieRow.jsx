import { useEffect, useState } from "react";
import axios from "axios";
import AllMovies from "./AllMovies";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styled from "styled-components";

const MovieRow = ({ heading, fetchURL, rowID }) => 
{
  const [Movies, SetMovies] = useState([]);
 
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      SetMovies(response.data.results);
    });
  }, [fetchURL]);
  
  const SlideLeft = () =>
  {
    var slider = document.getElementById('MovieSlider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const SlideRight = () =>
  {
    var slider = document.getElementById('MovieSlider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
      <MoviesSection className=''>
        
      <h1 className="p-5 font-bold text-white font-Raleway md:text-xl">{heading}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          className="absolute left-0 z-10 hidden bg-white rounded-full cursor-pointer opacity-30 hover:opacity-100 group-hover:block "
          size={40}
        />
        <div className="flex w-full h-full overflow-x-scroll scrollbar-hide scroll-smooth" id={'MovieSlider' + rowID}>
          {Movies.map((movie, movie_id) => (
            <AllMovies key={movie_id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          className="absolute right-0 z-10 hidden bg-white rounded-full opacity-0 cursor-pointer hover:opacity-100 group-hover:block" id={"MovieSlider" + rowID}
          size={40}
        />
      </div>

      </MoviesSection>
  );
};

const MoviesSection = styled.div``
export default MovieRow;
