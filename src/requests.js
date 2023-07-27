const key = '0790c0412247a2c96cc97c19630239e1'

const MovieRequests = 
{
    Horror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    NowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
};

const SeriesRequests = 
{
    TopRatedTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US`,
    PopularTV: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US`,
    TrendingTV: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US`,
    
};

const Certs = 
{
    MovieCerts: `https://api.themoviedb.org/3/certification/movie/list`,
    CErticationas: `https://api.themoviedb.org/3/certification/movie/list`
}

const Trailers = 
{
    MovieTrailers: (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
}

export { MovieRequests, SeriesRequests, Certs, Trailers };