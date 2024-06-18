export const Feature = () => {
  return (
    <ul className="flex flex-wrap mt-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Overview
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-4 py-3 text-white bg-blue-500 rounded-t-lg"
          aria-current="page"
        >
          Description
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Features
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Map
        </a>
      </li>
    </ul>
  );
};
