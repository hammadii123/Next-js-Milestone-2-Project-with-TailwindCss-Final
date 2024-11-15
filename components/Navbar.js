import Link from 'next/link';

const Navbar = () => (
  // <nav className="bg-gray-800 p-4 text-white flex justify-between">
  //   <div className="text-xl font-semibold">My Portfolio</div>
  //   <div className="space-x-4 ">
  //     <Link href="/">Home</Link>
  //     <Link href={"/about"}>About</Link>
  //     <Link href="/projects">Projects</Link>
  //     <Link href="/contact">Contact</Link>
  //   </div>
  // </nav>
  <div className="navbar fixed bg-base-100 z-50 flex bg-opacity-95">
  <div className="navbar-start w-[100%] ">

    {/* childdiv */}
    <div className="flex justify-between w-[100%]">
    
   
    <Link href="/" className="btn btn-ghost text-xl">My Portfolio</Link>

    <div className="dropdown w-100 flex justify-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow ">
       <li><Link href="/">Home</Link></li>
       <li><Link href={"/about"}>About</Link></li>
       <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/contact">Contact</Link></li>
       
      </ul>
    </div>

    </div>






  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
       <li><Link href={"/about"}>About</Link></li>
       <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/contact">Contact</Link></li>
     
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
);

export default Navbar;
