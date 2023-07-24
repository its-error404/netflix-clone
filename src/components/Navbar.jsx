const Navbar = () => {
  return (
    <div className="absolute flex items-center justify-between w-full z-[100] p-4">
        <h1 className="text-4xl text-red-500 cursor-pointer font-BebasNeue">NETFLIX</h1>
        <div>
            <button className="px-4 py-2 text-white rounded-sm font-Poppins">Sign In</button>
            <button className="px-4 py-2 text-white bg-red-500 rounded-sm cursor-pointer font-Poppins">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar