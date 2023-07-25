import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react';

const AllMovies = ({ movie }) => {

    const [Like, SetLike] = useState(false)
    
  return (
    <div className='inline-flex w-full h-full'>
      <div className="ml-7 w-[180px] p-4 sm:w-[200px] md:w-[300px] inline-block cursor-pointer relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        ></img>
        <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/40 hover:opacity-100">
          <p className="flex items-center justify-center h-full p-8 text-xs font-semibold text-center md:text-sm">
            {movie?.title}
          </p>
          <p>
            {Like ? (
              <FaHeart className="right-0 mr-10 text-white top-6" />
            ) : (
              <FaRegHeart className="absolute right-0 mr-10 text-white top-6" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
