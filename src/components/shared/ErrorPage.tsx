import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vw] bg-gray-100 text-center px-6 py-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Something went wrong. The page you're looking for doesn't exist or an error occurred.
      </p>
      <button
        onClick={handleGoBack}
        className="px-6 py-2 bg-primary text-white rounded-full "
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;
