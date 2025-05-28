import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <p className="text-sm text-gray-500 mb-8 text-center max-w-md">
        The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <button onClick={() => navigate('/')} className="text-white bg-red-600 hover:bg-red-700 p-5 rounded-3xl">
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
