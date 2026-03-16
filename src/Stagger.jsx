import gsap from "gsap";

const Stagger = () => {
  const tl1 = gsap.timeline();
  function appear() {
    if (!tl1.isActive()) {
      tl1.clear()
      tl1.to(".box", {
        scale: 3,
        duration: 0.1,
        stagger: {
          grid: [6, 5],
          amount: 2,
          from: "random",
        },
      });
    }
  }
  function fade() {
    if (!tl1.isActive()) {
      tl1.clear()
      tl1.to(".box", {
        scale: 1,
        duration: 0.1,
        stagger: {
          grid: [6, 5],
          amount: 2,
          from: "random",
        },
      });
    }
  }

  return (
    <>
      <div className="justify-center flex">
        <div className="grid grid-cols-5 gap-1 w-55 justify-center">
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          <div className="col-span-5 flex justify-center">
            <button
              onClick={appear}
              className="border border-gray-400 p-1.5 m-2"
            >
              Animate
            </button>
            <button onClick={fade} className="border border-gray-400 p-1.5 m-2">
              Fade
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stagger;
