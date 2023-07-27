import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="absolute flex items-center justify-between w-full z-[100] p-4">
      <Link to='/'>
        <h1 className="text-4xl text-red-500 cursor-pointer font-BebasNeue">CineHub</h1>
        
        </Link>
        <div>
          <Link to='/Login'>
            <button className="px-4 py-2 text-white rounded-sm font-Poppins">Sign In</button>
            </Link>
            <Link to='/SignUp'>
            <button className="px-4 py-2 text-white bg-red-500 rounded-sm cursor-pointer font-Poppins">Sign Up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar