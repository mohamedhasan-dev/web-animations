import { useGSAP } from "@gsap/react";
import logo from "./assets/logo.svg";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { SplitText } from "gsap/all";
import { Link } from "react-router-dom";
gsap.registerPlugin(SplitText);

const Nav = () => {
  const heroTitle = useRef(null);
  const titletimeline = useRef(null);
  const isLinkCliked = useRef(false);

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

  useEffect(() => {
    titletimeline.current = gsap.timeline({ paused: true });
    titletimeline.current.to(heroTitle.current, {
      backgroundImage:
        "linear-gradient( 90deg, #34b2cb, #3bbbbf 40%, #56bdaa 100%)",
      //backgroundClip: "text",
      //textFillColor: "transparent",
      duration: 0.3,
      ease: "sine.inOut",
    });
  }, []);

  //title hover effect
  function titleHoverEffect() {
    titletimeline.current.play();
  }
  function titleResetEffect() {
    titletimeline.current.reverse();
  }

  //logo hover effect
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

  //Link hover effect
  function LinkHover(e) {
    gsap.to(e.currentTarget, {
      backgroundImage:
        "linear-gradient( 90deg, #34b2cb, #3bbbbf 40%, #56bdaa 100%)",
      // borderBottomColor: "#56bdaa",
      ease: "sine.inOut",
      duration: 0.2,
    });
    gsap.to(e.currentTarget.querySelector(".underline"), {
      scaleX: 1,
      ease: "sine.inOut",
      duration: 0.15,
    });
  }
  function LinkReset(e) {
    if (!isLinkCliked.current) {
      gsap.to(e.currentTarget, {
        backgroundImage: "linear-gradient( white,white)",
        // borderBottomColor: "transparent",
        ease: "sine.inOut",
        duration: 0.2,
      });
      gsap.to(e.currentTarget.querySelector(".underline"), {
        scaleX: 0,
        ease: "sine.inOut",
        duration: 0.3,
      });
    }
  }
  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        <div className="text-4xl font-semibold">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              width={70}
              className="mr-5"
              id="logo"
              onMouseEnter={logoHoverEffect}
              onMouseLeave={logoResetEffect}
            />
            <p
              ref={heroTitle}
              onMouseEnter={titleHoverEffect}
              onMouseLeave={titleResetEffect}
              className="bg-clip-text text-transparent bg-white"
            >
              Animated website
            </p>
          </Link>
        </div>
        <div className="flex space-x-6" id="nav-links">
          <Link
            to="/home"
            className="relative text-xl link bg-clip-text text-transparent bg-white"
            onMouseEnter={LinkHover}
            onMouseLeave={LinkReset}
            //onClick={()=>isLinkCliked.current = true}
          >
            Home
            <span className="underline absolute -bottom-1 left-0 w-full h-0.5 bg-[#56bdaa] origin-center scale-x-0"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-xl link bg-clip-text text-transparent bg-white"
            onMouseEnter={LinkHover}
            onMouseLeave={LinkReset}
            //onClick={()=>isLinkCliked.current = true}
          >
            About
            <span className="underline absolute -bottom-1 left-0 w-full h-0.5 bg-[#56bdaa] origin-center scale-x-0"></span>
          </Link>
          <Link
            to="/contacts"
            className="relative text-xl link bg-clip-text text-transparent bg-white"
            onMouseEnter={LinkHover}
            onMouseLeave={LinkReset}
            //onClick={()=>isLinkCliked.current = true}
          >
            Contact
            <span className="underline absolute -bottom-1 left-0 w-full h-0.5 bg-[#56bdaa] origin-center scale-x-0"></span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
