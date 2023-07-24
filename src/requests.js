const key = '0790c0412247a2c96cc97c19630239e1'

const requests = 
{
    Horror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    NowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    TrendingTV: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}&language=en-US`,
    VideosofMovies: `https://api.themoviedb.org/3/movie/297762/videos?api_key=${key}&language=en-US`
}

export default requests