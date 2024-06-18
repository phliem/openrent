import { useState } from "react";

const getDefaultColor = () => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  } else {
    return "light";
  }
};

const Header = () => {
  console.debug("getDefaultColor()", getDefaultColor());
  const [theme, setTheme] = useState(getDefaultColor());

  const handleSwitchTheme = () => {
    const themeToggle = document.getElementById("theme-toggle");

    if (theme === "light") {
      themeToggle?.classList.add("dark");
      setTheme("dark");
    } else {
      themeToggle?.classList.remove("dark");
      setTheme("light");
    }
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="container mx-auto py-4 flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center space-x-3">
          <img
            src={
              theme === "light"
                ? "/openrent-logo-blue.png"
                : "/openrent-logo-white.png"
            }
            className="h-8"
            alt="Openrent logo"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex items-center font-medium rounded-lg space-x-4">
            <li>
              <button
                id="theme-toggle"
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                onClick={handleSwitchTheme}
              >
                <i
                  className={`fa-solid ${
                    theme === "dark" ? "fa-sun" : "fa-moon"
                  }`}
                ></i>
              </button>
            </li>
            <li>
              <a
                href="#"
                className=" text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Add Listing
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Header };
