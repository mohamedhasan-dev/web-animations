import gsap from "gsap";
import Stagger from "./Stagger";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
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
    gsap.from(".para", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".para",
        start: "top 80%",
        markers: true,
      },
    });
  }, []);
  return (
    <>
      <Stagger />
      <div
        id="green-box"
        className="w-20 h-20 bg-linear-120 from-green-600 to-green-300 m-5 rounded-lg"
      ></div>
      <div id="blue-box" className="w-20 h-20 bg-linear-120 from-sky-600 to-sky-300 m-5 rounded-sm"></div>{" "}
      <div className="flex justify-center">
        <div
          id="yello-box"
          className="w-20 h-20 bg-linear-120 from-amber-500 to-amber-200 m-5 rounded-sm justify-center"
        ></div>
        <div id="red-box" className="w-20 h-20 bg-linear-240 from-red-600 to-red-300 m-5 rounded-lg"></div>
      </div>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        repellat in eaque perspiciatis numquam, quaerat architecto. Voluptatem
        harum, accusamus rem accusantium enim consectetur, magni voluptatum
        expedita fugit facilis nobis perferendis.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
        quibusdam omnis dolor expedita nemo quo, repudiandae laudantium debitis
        saepe eaque facilis quos deserunt exercitationem distinctio sed ipsa
        error quis reprehenderit!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        inventore dicta, iure odio molestias omnis quo atque aut, aliquid soluta
        itaque maiores velit consequuntur. Pariatur, expedita rem praesentium ad
        recusandae sapiente dolorem aliquam iste fuga?
        <br />
        <br />
        Voluptates delectus ratione, tempore atque, animi culpa ullam tenetur
        nemo recusandae vero illum molestias dicta quod exercitationem suscipit
        numquam ipsum minima in soluta doloremque labore inventore. Facilis,
        totam alias, expedita, quidem veniam esse laborum
        <br />
        <br />
        veritatis nobis est quod ab? Id atque explicabo blanditiis at dolores
        voluptate quasi perferendis, excepturi corporis labore ut iusto impedit
        velit sint necessitatibus assumenda delectus numquam, provident, ex
        tempore repellat dignissimos.
        <br />
      </p>

      <button className="rounded-lg bg-linear-120 from-red-500 to-amber-500 ml-100 px-10 py-2">Hello</button>
    </>
  );
};

export default App;
