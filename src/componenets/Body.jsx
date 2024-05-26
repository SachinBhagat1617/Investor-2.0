import React from "react";
import Ongoing from "./Ongoing";
import About from "./About";
import TypeformEmbed from "./TypeformEmbed";

const Body = () => {
  return (
    <>
      <div className="relative flex ml-10">
        <img
          src="https://static.wixstatic.com/media/11062b_359f5d962d504a889feb0a6c83274a8b~mv2.jpeg/v1/fill/w_743,h_1175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_359f5d962d504a889feb0a6c83274a8b~mv2.jpeg"
          alt="Error"
          className="relative h-[700px] w-[900px] filter blur-sm"
        />
        <div className="absolute top-[400px] text-white font-bold text-4xl p-4 ml-32">
          JOIN THE SOCIAL MOVEMENT
        </div>
        <div className="absolute right-10 top-[-20px] p-4 w-[500px] overflow-hidden">
          <TypeformEmbed style={{ height: "800px" }} />
        </div>
      </div>
      <div className="mt-8">
        <Ongoing />
      </div>
      <div className="mt-8">
        <About />
      </div>
    </>
  );
};

export default Body;
