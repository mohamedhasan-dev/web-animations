import gsap from "gsap";
import { useEffect, useRef } from "react";

const Anim_btn = (props) => {
  const btnRef = useRef(null);
  const timeline = useRef(null);
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.to(btnRef.current, {
      backgroundImage: `linear-gradient(50deg,${props.to},${props.from})`,
      boxShadow: `0px 0px 13px ${props.to}`,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  function animate() {
    // gsap.killTweensOf(".anim-btn");
    // gsap.to(".anim-btn", {
    //   delay: 0.1,
    //   backgroundImage: `linear-gradient(50deg,${props.to},${props.from})`,
    //   boxShadow: `0px 0px 13px ${props.to}`,
    //   duration: 0.4,
    //   ease: "power2.out",
    // });
    timeline.current.play();
  }
  function reanimate() {
    // gsap.to(".anim-btn", {
    //   backgroundImage: `linear-gradient(50deg, ${props.from}, ${props.to})`,
    //   duration: 0.3,
    //   ease: "power2.out",
    //   boxShadow: `0px 0px 0px transparent`,
    // });
    timeline.current.reverse();
  }

  return (
    <button
      className="rounded-full px-10 py-2 text-white anim-btn cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(50deg, ${props.from}, ${props.to})`
      }}
      onMouseEnter={animate}
      onMouseLeave={reanimate}
      onClick={props.onClick}
      ref={btnRef}
    >
      {props.text}
    </button>
  );
};
export default Anim_btn;
