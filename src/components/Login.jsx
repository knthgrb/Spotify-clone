import React from "react";

const Login = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%)",
        }}
        className="bg-black md:h-screen flex items-center justify-center"
      >
        <div className="bg-black relative w-full h-screen md:h-[35rem] md:w-[40rem] rounded-xl flex flex-col items-center">
          <img
            className="h-14 absolute top-5 left-5"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          />
          <h1 className="text-white font-Helvetica md:mt-48 mt-80 font-bold text-5xl text-center">
            Log in to Spotify
          </h1>
          <a className="text-black font-Helvetica md:mt-20 mt-24 px-32 py-3 font-bold rounded-3xl bg-[#1DB954]">
            Log In
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
