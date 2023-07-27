import MainSection from "../components/MainSection"
import { MovieRequests, SeriesRequests } from "../requests"
import MovieRow from "../components/MovieRow"
import SeriesRow from "../components/SeriesRow"

const Home = () => {
  return (
    <div>

      <MainSection/>

      <MovieRow  rowID='1' heading= "Coming Soon" fetchURL={MovieRequests.Upcoming}/>
      <MovieRow  rowID='2' heading= "Top Rated Movies" fetchURL={MovieRequests.TopRated}/>
      <MovieRow  rowID='3' heading= "Now Playing" fetchURL={MovieRequests.NowPlaying}/>
      <MovieRow  rowID='4' heading= "Trending Movies right now" fetchURL={MovieRequests.Trending}/>
      <MovieRow  rowID='5' heading= "Horror Movies" fetchURL={MovieRequests.Horror}/>
      
      <SeriesRow SrowID='6' heading = "Popular TV Series" fetchSeriesURL={SeriesRequests.PopularTV}/>
      <SeriesRow SrowID='7' heading = "Top Rated TV Series" fetchSeriesURL={SeriesRequests.TopRatedTV}/>
      {/* <SeriesRow heading = "Airing Today" fetchSeriesURL={SeriesRequests.TrendingTV}/> */}
      
    </div>
  )
}

export default Home