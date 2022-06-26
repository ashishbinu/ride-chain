const Header = (props) => {
  return (
    <div className=" w-full max-w-7xl">
      <div
        x-data="{ open: false }"
        className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            href="/"
            className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
          >
            {" "}
            Ride Chain{" "}
          </a>
        </div>
        <nav className="flex-col flex-grow hidden md:flex md:justify-start md:flex-row">
          <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
            <li>
              <a
                href="https://www.wickedtemplates.com/"
                className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"
              >
                {" "}
                <span className="hidden lg:inline">
                  Connected Account : {props.children}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
