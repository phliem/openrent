export const Breadcrumb = () => {
  return (
    <nav
      className="flex px-4 py-3 text-gray-700 border border-gray-200 rounded-lg shadow bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white hover:underline"
          >
            <i className="fa-solid fa-house me-1"></i>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <span className="dark:text-white">
              <i className="fa-solid fa-chevron-right me-1"></i>
            </span>
            <a
              href="#"
              className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white hover:underline"
            >
              <i className="fa-solid fa-magnifying-glass me-1"></i>
              Your search
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="dark:text-white">
              <i className="fa-solid fa-chevron-right me-1"></i>
            </span>
            <span className="ms-1 text-md font-medium text-gray-700 md:ms-2 dark:text-white">
              2 bed, Hackey road - period conversion
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
