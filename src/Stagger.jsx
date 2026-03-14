import React from "react";
import gsap from "gsap";



const Stagger = () => {
function fade() {
    gsap.to(".box",{
        scale:.2,
        duration:.1,
        stagger:{
            grid:[6,5],
            amount:2,
            from:'random',

        }
        
    })
}


  return (
    <>
      <div className="grid grid-cols-5 gap-1 w-90">
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
        <div className="w-15 h-15 bg-green-400 m-3 box"></div>
      </div>
      <button onClick={fade}>click</button>
    </>
  );
};

export default Stagger;
