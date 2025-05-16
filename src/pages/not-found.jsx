// Not Found page
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center bg-gray-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg p-8 shadow-md">
        <div className="flex justify-center mb-4">
          <svg
            className="h-8 w-8 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        </div>
        <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
          404
        </div>
        <div className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Page Not Found
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-default hover:bg-default text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};
export default NotFoundPage;
