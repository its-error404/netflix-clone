import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react';

const AllSeries = ({ serie }) => {

  const [Like, SetLike] = useState(false)
  return (
    <div className="inline-flex w-full h-full">
      <div className="w-[180px] p-4 sm:w-[200px] md:w-[300px] cursor-pointer relative ml-7">
        <img
          src={`https://image.tmdb.org/t/p/w500/${serie?.backdrop_path}`}
          alt={serie?.name}
        ></img>
        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/40 hover:opacity-100">
          <p className="flex items-center justify-center h-full p-8 text-xs font-semibold text-center text-white md:text-sm ">
            {serie?.name}
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

export default AllSeries;
