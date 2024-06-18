export const Let = () => {
  const handleViewMore = () => {
    const element = document.getElementById("similar-properties");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
      <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
        £2600 per month
      </h5>
      <p className="mt-1 font-normal text-gray-700 dark:text-gray-400">
        £600 per week
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <i className="fa-solid fa-handshake-slash me-1"></i>
        No admin fees
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <i className="fa-solid fa-store-slash me-1"></i>
        No hidden charges
      </p>
      <button
        type="button"
        className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600"
        onClick={handleViewMore}
      >
        View Similar Listing
      </button>
      <button
        disabled
        className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 disabled:cursor-not-allowed"
      >
        <i className="fa-solid fa-xmark me-1"></i>
        Let Agreed
      </button>
      <div
        className="p-4 mt-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <i className="fa-solid fa-circle-info me-1"></i>
        This property has now been taken off the market (as of Saturday, 1 June
        2024).
      </div>
    </div>
  );
};
