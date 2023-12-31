import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Navbar = () => {
  
  const NavItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="#services">Services</Link>
      </li>
      <li>
        <Link href="#testimonials">Testimonials</Link>
      </li>
      <li>
        <Link href="#faq">FAQ</Link>
      </li>
      <li>
        <Link href="#blog">Blog</Link>
      </li>
      <li>
        <Link href="#about">About Us</Link>
      </li>
      <li>
        <Link href="#contact">Contact Us</Link>
      </li>
    </>
  );
  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-20">
      <nav className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            width={55}
            height={40}
            className="-mt-1 inline-block"
            src={logo.src}
            blurDataURL={logo.blurDataURL}
            alt="Aooz Logo"
          />
        </Link>
      </nav>
      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
