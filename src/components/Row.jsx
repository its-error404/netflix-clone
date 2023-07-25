import { useEffect, useState } from "react";
import axios from "axios";
import AllMovies from "./AllMovies";
import AllSeries from "./AllSeries";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ heading, fetchURL, fetchSeriesURL }) => 
{
  const [Movies, SetMovies] = useState([]);
  const [Series, SetSeries] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      SetMovies(response.data.results);
    });
  }, [fetchURL]);

  useEffect(() => {
    axios.get(fetchSeriesURL).then((response) => {
      SetSeries(response.data.results);
    });
  }, [fetchSeriesURL]);

    const SlideLeft = ()=>
    {
        var MovieSlider = document.getElementById('MovieSlider')
        var SeriesSlider= document.getElementById('SeriesSlider')
        MovieSlider.scrollLeft = MovieSlider.scrollLeft - 500;
        SeriesSlider.scrollLeft = SeriesSlider.scrollLeft + 500;
    }

    const SlideRight = ()=>
    {
        var MovieSlider = document.getElementById('MovieSlider')
        var SeriesSlider= document.getElementById('SeriesSlider')
        MovieSlider.scrollRight = MovieSlider.scrollLeft - 500;
        SeriesSlider.scrollRight = SeriesSlider.scrollLeft + 500;
    }

  return (
    <div className="pt-5">
      <h1 className="ml-8 font-bold text-white font-Raleway md:text-xl">{heading}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          className="absolute hidden bg-white rounded-full opacity-0 cursor-pointer left-2 hover:opacity-100 group-hover:block"
          size={20}
        />
        <div className="flex w-full overflow-x-scroll scrollbar-hide" id={'MovieSlider'}>
          {Movies.map((movie, movie_id) => (
            <AllMovies key={movie_id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          className="absolute right-0 hidden m-3 bg-white rounded-full opacity-0 cursor-pointer hover:opacity-100 group-hover:block"
          size={20}
        />
      </div>

      <div className="relative flex items-center overflow-x-hidden group">
        <MdChevronLeft
          className="absolute left-0 hidden bg-white rounded-full opacity-0 cursor-pointer group-hover:block hover:opacity-100"
          size={20}
        />
        <div className="flex w-full overflow-x-scroll scrollbar-hide" id={'SeriesSlider'}>
          {Series.map((serie, serie_id) => (
            <AllSeries key={serie_id} serie={serie} />
          ))}
        </div>
        <MdChevronRight
          className="absolute right-0 hidden bg-white rounded-full opacity-0 cursor-pointer group-hover:block hover:opacity-100"
          size={20}
        />
      </div>
    </div>
  );
};

export default Row;
