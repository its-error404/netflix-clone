import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import { AuthContextProvider } from "./firebase/Auth"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Account from "./pages/Account"

const App = () => {
  return (
    <div>
        {/* <AuthContextProvider /> */}
        <Navbar/>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/Signup" element={<SignUp/>}/>
            <Route path="/Account" element={<Account/>}/>
            
        </Routes>
    </div>
    
 
  )
}

export default App