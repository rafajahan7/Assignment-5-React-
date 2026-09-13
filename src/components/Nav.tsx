
import Logo from "../assets/logo-text.png"
import Ham from "../assets/hamburger.png"

const Nav = () => {
    return (
        <nav className="w-full border-b border-gray-100 ">
            <div className="container mx-auto flex justify-between items-center px-20 py-5">
                 
                <img src={Ham} alt="for mobile" className='md:hidden'></img>

                <img src={Logo} alt="logo"></img>

                <ul className="hidden md:flex items-center gap-6">
                <li>Home</li>
                <li className='hover:text-pink-500'>Technologies</li>
                <li className='hover:text-pink-500'>Projects</li>
                <li className='hover:text-pink-500'>About</li>
                <li className='hover:text-pink-500'>Contact</li>
                </ul>

                <div>
                   <button className="text-gray-500 hover:text-gray-800 md:gap-4 px-5">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-4 py-2 text-white">
            Sign Up
          </button>
                </div>
            </div>
            
        </nav>
    );
};

export default Nav;