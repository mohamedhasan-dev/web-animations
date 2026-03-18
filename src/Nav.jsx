import { useGSAP } from "@gsap/react";
import logo from "./assets/logo.svg";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Nav = () => {
  const heroTitle = useRef(null);

  useGSAP(() => {
    let titleSplit = new SplitText(heroTitle.current, { type: "chars" });
    gsap.from(titleSplit.chars, {
      y: 10,
      opacity: 0,
      stagger: {
        amount: 0.5,
        grid: "auto",
      },
      ease: "expo.out",
    });
    gsap.from("#nav-links a", {
      y: 10,
      opacity: 0,
      stagger: {
        amount: 0.1,
        grid: "auto",
      },
      ease: "expo.out",
    });
    gsap.from("#logo", {
      rotate: 35,
    });
  }, []);
  function logoHoverEffect() {
    gsap.to("#logo", {
      rotate: 35,
      ease: "elastic.out(1,0.5)",
    });
  }
  function logoResetEffect() {
    gsap.to("#logo", {
      rotate: 0,
    });
  }
  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        <div className="text-4xl font-semibold">
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              width={70}
              className="mr-5"
              id="logo"
              onMouseEnter={logoHoverEffect}
              onMouseLeave={logoResetEffect}
            />
            <p ref={heroTitle}>Animated website</p>
          </a>
        </div>
        <div className="flex space-x-6" id="nav-links">
          <a href="#" className="hover:text-blue-500 text-xl">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 text-xl">
            About
          </a>
          <a href="#" className="hover:text-blue-500 text-xl">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
