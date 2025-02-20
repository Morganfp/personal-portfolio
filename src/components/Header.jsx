import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav className="flex justify-between mx-6 mt-8 md:mx-26 md:mt-12">
        {/* Logo */}
        <div className="text-2xl font-semibold">MP</div>
        {/* Nav */}
        <div className="flex flex-col items-end ">
          {/* Hambuger */}
          {/* Hide the hamburger on medium and larger screens */}
          <button onClick={toggleMenu} className="md:hidden mb-2">
            <GiHamburgerMenu size={24} />
          </button>

          {/* Menu */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:block transition-all ease-in-out duration-300`}
          >
            <ul className="flex flex-col gap-2 text-base md:flex-row md:gap-6 md:text-base">
              <li className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#00FFBB]">
                <a href="#projects" className="cursor-pointer">
                  Projects
                </a>
              </li>
              <li className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#00FFBB]">
                <a href="#contact" className="cursor-pointer">
                  Contact
                </a>
              </li>
              <li
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1lT9rZMNvvCK7y-XnCbdg8Bnc0qQOrrwf/view'
                  )
                }
                className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#00FFBB] cursor-pointer"
              >
                Resume
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
