import logo from "./assets/logo.svg";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        <div className="text-4xl font-semibold">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Logo" width={70} className="mr-5"/>Animated website
          </a>
        </div>
        <div className="flex space-x-6">
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
