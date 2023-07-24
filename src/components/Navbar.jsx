const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        <h1 className="text-4xl text-red-500 cursor-pointer font-BebasNeue">NETFLIX</h1>
        <div>
            <button className="px-4 py-2 text-white rounded-sm">Sign In</button>
            <button className="px-4 py-2 text-white bg-red-500 rounded-sm cursor-pointer">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar