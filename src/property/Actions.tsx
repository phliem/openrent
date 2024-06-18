import { useState } from "react";

export const Action = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="flex gap-4">
      <div className="px-4 py-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 flex-1">
        <p className="dark:text-white text-md font-bold">Reference: 1738432</p>
      </div>
      <button
        type="button"
        className="px-4 py-3 rounded-lg shadow bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
        onClick={handleSave}
      >
        <span className="dark:text-white">
          {isSaved ? (
            <i className="fa-solid fa-bookmark"></i>
          ) : (
            <i className="fa-regular fa-bookmark"></i>
          )}
        </span>
      </button>
    </div>
  );
};
