import axios from "axios";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styled from "styled-components";
import AllSeries from "./AllSeries";

const SeriesRow = ({heading, fetchSeriesURL, SrowID}) => {

    const [Series, SetSeries] = useState([])

    useEffect(() =>
    {
        axios.get(fetchSeriesURL)
        .then((response)=>
        {
            SetSeries(response.data.results)
            
        });
    },[fetchSeriesURL])

    const SlideLeft = () =>
    {
        var slider = document.getElementById('SeriesSlider' + SrowID) 
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const SlideRight = () =>
    {
        var slider = document.getElementById('SeriesSlider' + SrowID) 
        slider.scrollLeft = slider.scrollLeft + 500;
    }
 
  return (
    <SeriesSection>
      
      <h1 className="p-5 font-bold text-white font-Raleway md:text-xl">{heading}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          className="absolute left-0 z-10 hidden bg-white rounded-full cursor-pointer opacity-30 hover:opacity-100 group-hover:block "
          size={40}
        />
        <div 
        className="flex w-full h-full overflow-x-scroll scrollbar-hide scroll-smooth" 
        id={'SeriesSlider' + SrowID}>
          {Series.map((serie, serie_id) => (
            <AllSeries key={serie_id} serie={serie} />
          ))}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          className="absolute right-0 z-10 hidden bg-white rounded-full opacity-0 cursor-pointer hover:opacity-100 group-hover:block" 
          id={"SeriesSlider" + SrowID}
          size={40}
        />
      </div>
    </SeriesSection>
  )
}

const SeriesSection = styled.div``
export default SeriesRow
