import gsap from "gsap";
import Anim_button from "../components/animated_button";
import { MorphSVGPlugin, DrawSVGPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

const SVG_anim = () => {
  //Variables and Refs
  const morphTl = useRef(null);
  const drawTl = useRef(null);

  useEffect(() => {
    MorphSVGPlugin.convertToPath("#Circle, #Triangle");

    morphTl.current = gsap.timeline({ paused: true });

    morphTl.current.to("#Triangle", {
      duration: 0.5,
      morphSVG: {
        shape: "#Circle",
        shapeIndex: 6,
      },
      ease: "power1.inOut",
    });
    drawTl.current = gsap.timeline({ paused: true });
    drawTl.current.from("#Stroke", {
      drawSVG: "0%",
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  //functions

  function draw() {
    drawTl.current.restart();
  }

  return (
    <>
      <div>
        <svg
          onMouseEnter={() => morphTl.current.play()}
          onMouseLeave={() => morphTl.current.reverse()}
          width="144"
          height="124"
          viewBox="0 0 144 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="144" height="124" fill="" />
          <g id="Frame 2" clip-path="url(#clip0_0_1)">
            <circle
              id="Circle"
              cx="72"
              cy="73"
              r="49"
              fill="currentColor"
              className="opacity-0"
            />
            <path
              id="Triangle"
              d="M72 0L134.354 109.5H9.64617L72 0Z"
              fill="currentColor"
              className="text-amber-500"
            />
          </g>
        </svg>
      </div>
      <div>
        <h1 className="text-xl font-bold">SVG Morphing</h1>
      </div>
      <div>
        <svg
          width="550"
          height="542"
          viewBox="0 0 550 542"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="550" height="542" />
          <path
            id="Stroke"
            d="M80.2792 15C80.2792 15 201.008 53.2312 242.279 103C310.279 185 189.279 258 272.279 316C355.279 374 361.531 145.15 451.279 164C564.752 187.833 508.549 447.733 402 402C183 308 224.882 467 86 467C-75 467 231.989 169.686 317 189C379.502 203.2 219.279 358 219.279 358"
            stroke="#D15F5F"
            stroke-width="10"
            stroke-linecap="round"
          />
        </svg>

        <h1 className="text-xl font-bold">SVG drawing animation</h1>
        <Anim_button
          onClick={draw}
          text="Play Animation"
          from="blue"
          to="teal"
        />
      </div>
    </>
  );
};

export default SVG_anim;
