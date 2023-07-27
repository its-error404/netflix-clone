import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eab1b22-c5ea-48b0-8ef4-862b3fa6df2c/4af43238-4df9-4946-9920-a4bd55f2e50b/IN-en-20230724-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
        className="absolute hidden object-cover w-full h-full sm:block bg-gradient-to-r from-black"
      />

      <div className="absolute flex items-center justify-center w-full h-full bg-black/60">
        <PageText className="text-center text-white mb-52">
          <h1 className="text-5xl font-bold text-white sm:text-2xl lg:text-5xl sm:text-center">Unlimited movies, TV Shows and more</h1>
          <p className="pt-5 text-center lg:text-3xl sm:text-2xl sm:text-center">Watch anywhere. Cancel anytime.</p>
          <p className="pt-12 lg:text-2xl sm:text-xl sm:text-center">Ready to watch? Create your account and get your membership now.</p>
        </PageText>
      </div>
      <div className="z-50 w-full px-4 mt-[300px]">
            <div className="max-w-[400px] h-[145px] mx-auto text-white bg-black/75 ">
                {/* <div className="max-w-[320px] mx-auto py-20"></div> */}
                <form className="items-center mt-10 border-[1.5px] border-gray-600">
                    <input type="email" placeholder="Email Address" autoComplete="email" className="px-6 py-5 text-2xl text-white bg-transparent placeholder:gray-500 placeholder:opacity-50"></input>
                    <input type="password" placeholder="Password" autoComplete="current-password" className="px-6 py-5 text-2xl text-white bg-transparent placeholder:gray-500 placeholder:opacity-50"></input>
            {/* <input type="password" placeholder="Password"></input> */}
                </form>
                
        </div>
        <div className="flex items-center justify-center">
                {/* <button className="text-white">Remember Me</button> */}
                <p className="pt-4 text-xl text-gray-400 mr-[100px]"><input type="checkbox"></input><span className="pl-2">Remember Me</span></p>
                <p className="pt-4 text-xl text-gray-400">Need Help ?</p>
                {/* <p className="pt-4 text-xl text-white jus mt-7">Already Subscribed to Netflix ? Click here to Login !</p> */}
                {/* <p>Need Help ?</p> */}
        </div>
        <span>
            <p className="pt-3 text-xl text-center text-gray-400">Already Subscribed to <span className="text-red-500">Netflix</span> ? Click here to <Link to='/Login' className="text-red-500">Login !</Link></p>
        </span>
        <div className="flex justify-center">
                    <button className="items-center p-3 mt-4 ml-4 mr-4 text-xl font-bold text-white bg-red-500 rounded-lg hover:bg-gray-800 hover:bg-gradient-to-b from-black ">Get Started</button>
                </div>
        </div>
        </div>
  );
};

const PageText = styled.div``;
export default SignUp;
