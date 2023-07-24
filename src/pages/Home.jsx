import MainSection from "../components/MainSection"
import Row from "../components/Row"
import { MovieRequests, SeriesRequests } from "../requests"

const Home = () => {
  return (
    <div>

      <MainSection/>
      <Row heading= "Coming Soon" fetchURL={MovieRequests.Upcoming}/>
      <Row heading= "Top Rated Movies" fetchURL={MovieRequests.TopRated}/>
      <Row heading= "Now Playing" fetchURL={MovieRequests.NowPlaying}/>
      <Row heading= "Trending Movies right now" fetchURL={MovieRequests.Trending}/>
      <Row heading= "Horror Movies" fetchURL={MovieRequests.Horror}/>
      <Row heading= "Top Rated TV Series" fetchSeriesURL={SeriesRequests.TopRatedTV}/>
      <Row heading= "Trending TV Series" fetchSeriesURL={SeriesRequests.PopularTV}/>

    </div>
  )
}

export default Home