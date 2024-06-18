export const Landlord = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
      <div className="flex flex-col">
        <h4 className="mb-4 md:text-2xl font-bold text-gray-900 dark:text-white">
          Meet the owner
        </h4>
        <div className="flex space-x-2">
          <div className="w-16 h-16 mb-3 rounded-full shadow-lg bg-gray-300 flex justify-center items-center">
            <i className="fa-solid fa-user fa-2xl"></i>
          </div>
          <div>
            <h5 className=" text-lg font-medium text-gray-900 dark:text-white">
              Emily Clyde
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Member for 2 years
            </p>
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500  hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};
