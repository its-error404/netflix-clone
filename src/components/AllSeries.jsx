import React from "react";

const AllSeries = ({ serie }) => {
  return (
    <div>
      <div className="ml-4 w-[180px] p-4 sm:w-[200px] md:w-[300px] inline-block cursor-pointer relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${serie?.backdrop_path}`}
          alt={serie?.name}
        ></img>
        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/40 hover:opacity-100">
          <p className="flex items-center justify-center h-full p-8 text-xs font-semibold text-center text-white md:text-sm ">
            {serie?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSeries;
