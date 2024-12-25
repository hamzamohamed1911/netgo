"use client";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-xl font-medium mb-6">
          Something went wrong. We couldn’t process your request.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default Error;
