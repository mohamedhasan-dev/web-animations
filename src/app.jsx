import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "./nav";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useGSAP(() => {
    gsap.from(".para", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".para",
        start: "top 80%",
      },
    });
  }, []);
  return (
    <main className="mx-10 mt-10">
      <Nav />
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

      <button className="rounded-lg bg-linear-120 from-red-500 to-amber-500 ml-100 px-10 py-2">
        Hello
      </button>
    </main>
  );
};

export default App;
