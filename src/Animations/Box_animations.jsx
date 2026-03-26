import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const Box_animationns = () => {
  useGSAP(() => {
    gsap.to("#green-box", {
      x: 1000,
      rotate: 720,
      borderRadius: "100%",
      scrollTrigger: {
        trigger: "#green-box",
        start: "bottom 70%",
        end: "+=1000",
        scrub: 2,
      },
    });
    gsap.to("#blue-box", {
      x: 1000,
      rotate: 720,
      borderRadius: "100%",
      scrollTrigger: {
        trigger: "#green-box",
        start: "+=200 70%",
        end: "+=1000",
        scrub: 2,
      },
    });
    gsap.from("#red-box", {
      y: 1000,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#red-box",
        start: "-=1000 center",
      },
    });
    gsap.from("#yello-box", {
      y: 1000,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#yello-box",
        start: "-=1000 center",
      },
    });
    gsap.to("#red-box", {
      x: 400,
      borderRadius: "100%",
      rotate: 360,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#red-box",
        start: "-=780 bottom",
        end: "top center",
        scrub: 2,
      },
      ease: "power1.Out",
    });
    gsap.to("#yello-box", {
      x: -400,
      borderRadius: "100%",
      rotate: -360,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#yello-box",
        start: "-=780 bottom",
        end: "top center",
        scrub: 2,
      },
      ease: "power1.out",
    });
  },[]);

  return (
    <div>
      <div className="h-65 flex justify-center items-center">
        <p className="text-white text-3xl">Scroll Down⏬</p>
      </div>
      <div
        id="green-box"
        className="w-20 h-20 bg-linear-120 from-green-600 to-green-300 m-5 rounded-lg"
      ></div>
      <div
        id="blue-box"
        className="w-20 h-20 bg-linear-120 from-sky-600 to-sky-300 m-5 rounded-sm"
      ></div>
      <div className="flex justify-center">
        <div
          id="yello-box"
          className="w-20 h-20 bg-linear-120 from-amber-500 to-amber-200 m-5 rounded-sm justify-center"
        ></div>
        <div
          id="red-box"
          className="w-20 h-20 bg-linear-240 from-red-600 to-red-300 m-5 rounded-lg"
        ></div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Box_animationns;
