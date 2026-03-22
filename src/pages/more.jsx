import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const More = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-2 overflow-hidden p-5">
      <Card
        title="stagger animation"
        bgImage="bg-[url(./assets/bg-img.png)]"
        navigate={() => navigate("/stagger")}
      />
    </div>
  );
};

export const Card = (props) => {
  const cardRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(cardRef.current, {
      boxShadow: "0px 0px 12px 2px #1598C1",
      duration: 0.3,
    });
  }, []);

  const enter = () => tl.current.play();
  const leave = () => tl.current.reverse();

  return (
    <>
      <section
        className="w-60 h-65 p-2 border-gray-400 border flex flex-col justify-center items-center cursor-pointer rounded-lg overflow-hidden"
        onClick={props.navigate}
        ref={cardRef}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <div className={`w-50 h-55 ${props.bgImage} bg-cover bg-center`}></div>
        {props.title}
      </section>
    </>
  );
};

export default More;
