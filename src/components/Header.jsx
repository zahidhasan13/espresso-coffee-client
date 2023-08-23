import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Espresso Coffee</span>
            </Link>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "block py-2 text-white" : "block py-2 pl-3 text-gray-400"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addCoffee" className={({isActive}) => isActive ? "block py-2 pl-3 text-white" : "block py-2 text-gray-400"}>Add Coffee</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
};

export default Header;
