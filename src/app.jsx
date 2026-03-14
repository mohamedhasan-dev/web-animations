import gsap from "gsap";
import Stagger from "./Stagger";


const App = () => {
  const timeLine1 = gsap.timeline();
  const timeLine2 = gsap.timeline();
  function play() {
    timeLine1
      .to("#green-box", { x: 200, duration: 1, ease: "elastic.inOut" })
      .to("#blue-box", { x: 200, duration: 2 });
  }
  function play2() {
    timeLine2
      .to("#red-box", { x: 200, duration: 1, ease: "elastic.inOut" })
      .to("#yello-box", { x: 200, duration: 2 }, "+=1");
  }

  return (
    <>
      <div className="m-2 p-2 border-2 border-white">
        <div
          id="green-box"
          className="w-20 h-20 bg-green-600 m-5 rounded-lg"
        ></div>
        <div
          id="blue-box"
          className="w-20 h-20 bg-sky-400 m-5 rounded-sm"
        ></div>
        <button className="p-1 bg-cyan-500 rounded-sm m-5" onClick={play}>
          play
        </button>
      </div>
      <div className="m-2 p-2 border-2 border-white">
        <div id="red-box" className="w-20 h-20 bg-red-600 m-5 rounded-lg"></div>
        <div
          id="yello-box"
          className="w-20 h-20 bg-amber-300 m-5 rounded-sm"
        ></div>
        <button className="p-1 bg-cyan-500 rounded-sm m-5" onClick={play2}>
          play
        </button>
      </div>
      <Stagger />
    </>
  );
};

export default App;
