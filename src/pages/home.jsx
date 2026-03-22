import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Anim_btn from "../components/animated_button";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const navigate = useNavigate();
  useGSAP(() => {
    console.log("GSAP animation setup");
    gsap.from(".para", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);
  // className="mx-10 mt-10"
  return (
    <main>
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
      <div className="flex justify-center">
        <Anim_btn
          text={"Click for more"}
          from={"#ff0000"}
          to={"#ffff00"}
          onClick={() => {
            navigate("/home");
            console.log("Button clicked, navigating to /more");
          }}
        />
      </div>
    </main>
  );
};

export default Home;
