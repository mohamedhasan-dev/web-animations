import gsap from "gsap";

const Stagger = () => {
  const tl1 = gsap.timeline();
  function appear() {
    if (!tl1.isActive()) {
      tl1.clear();
      tl1.to(".box", {
        scale: 3,
        stagger: {
          grid: [17, 15],
          amount: 1,
          from: "center",
        },
      });
    }
  }
  function fade() {
    if (!tl1.isActive()) {
      tl1.clear();
      tl1.to(".box", {
        scale: 1,
        stagger: {
          grid: [17, 15],
          amount: 1,
          from: "center",
        },
      });
    }
  }
  const amnt = Array.from({ length: 255 });
  return (
    <>
      <div className="justify-center flex">
        <div className="grid grid-cols-15 gap-1 w-3xl justify-center">
          {amnt.map(() => (
            <div className="w-3 h-3 bg-green-400 m-3 box"></div>
          ))}
          <div className="col-span-15 flex justify-center">
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
