// src/components/ErrorFallback.tsx
import React from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
        <p className="text-gray-700 mb-4">
          We encountered an unexpected error. Please try reloading the page or contact support.
        </p>
        <pre className="text-sm text-gray-500 mb-4 whitespace-pre-wrap">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
