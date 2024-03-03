import myLogo from '../../assets/mylogo.png';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';

function Header() {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const path = location.pathname.split('/');
    setActivePage(path[1]);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  return (
    <nav>
      {/*desktop view */}
      <div className="hidden md:flex w-full h-14 bg-ghost-white  md:gap-6 lg:gap-12 justify-center items-center">
        {/* logo */}
        <span className=" absolute left-2 h-14 w-14 mx-2 ">
          <img
            src={myLogo}
            alt="Jagadish Shrestha"
            className="w-full h-full object-cover"
          />
        </span>

        <Link to="/">
          <span
            className={`${activePage === '' ? 'text-red-munsell' : ''} hover:text-red-munsell transition duration-300`}
          >
            Home
          </span>
        </Link>
        <Link to="/about">
          <span
            className={`${activePage === 'about' ? 'text-red-munsell' : ''} hover:text-red-munsell transition duration-300`}
          >
            About
          </span>
        </Link>
        <Link to="/service">
          <span
            className={`${activePage === 'service' ? 'text-red-munsell' : ''} hover:text-red-munsell transition duration-300`}
          >
            Service
          </span>
        </Link>
        <Link to="/portfolio">
          <span
            className={`${activePage === 'portfolio' ? 'text-red-munsell' : ''} hover:text-red-munsell transition duration-300`}
          >
            Portfolio
          </span>
        </Link>
        <Link to="/resume">
          <span
            className={`${activePage === 'resume' ? 'text-red-munsell' : ''} hover:text-red-munsell transition duration-300`}
          >
            Resume
          </span>
        </Link>
        <Link to="/blog">
          <span
            className={`${activePage === 'blog' ? 'text-red-munsell' : ''} hover:text-red-munsell transition duration-300`}
          >
            Blog
          </span>
        </Link>
        <Link to="/contact">
          <span
            className={`${activePage === 'contact' ? 'text-red-munsell' : ''} hover:text-red-munsell transition duration-300`}
          >
            Contact
          </span>
        </Link>
      </div>

      {/* mobile view */}
      <div className="md:hidden w-full  bg-ghost-white ">
        <div className="flex justify-center items-center h-12">
          <span className="absolute left-2 h-14 w-14 bg  mx-2 ">
            <img
              src={myLogo}
              alt="Jagadish Shrestha"
              className="w-full h-full object-cover"
            />
          </span>
          <span className="text-red-munsell font-extrabold text-md mx-6">
            Jagadish Shrestha
          </span>
          <span className="absolute right-3 ">
            <Hamburger
              color="#3c404d"
              toggled={isMenuOpen}
              size={20}
              direction="right"
              onToggle={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          </span>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex w-full  flex-col items-center absolute top-12 bg-ghost-white">
            <Link to="/">
              <span
                className={`${activePage === '' ? 'text-red-munsell' : ''}`}
              >
                Home
              </span>
            </Link>

            <Link to="/about">
              <span
                className={`${activePage === 'about' ? 'text-red-munsell' : ''}`}
              >
                About
              </span>
            </Link>
            <Link to="/service">
              <span
                className={`${activePage === 'service' ? 'text-red-munsell' : ''} `}
              >
                Service
              </span>
            </Link>
            <Link to="/portfolio">
              <span
                className={`${activePage === 'portfolio' ? 'text-red-munsell' : ''} `}
              >
                Portfolio
              </span>
            </Link>
            <Link to="/resume">
              <span
                className={`${activePage === 'resume' ? 'text-red-munsell' : ''} `}
              >
                Resume
              </span>
            </Link>
            <Link to="/blog">
              <span
                className={`${activePage === 'blog' ? 'text-red-munsell' : ''} `}
              >
                Blog
              </span>
            </Link>
            <Link to="/contact">
              <span
                className={`${activePage === 'contact' ? 'text-red-munsell' : ''} `}
              >
                Contact
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
