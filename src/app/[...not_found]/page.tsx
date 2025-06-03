import Link from 'next/link';

export default async function NotFoundCatch() {

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          404
        </h1>
        <p className="text-2xl text-gray-300 mb-8">Oops! Page Not Found</p>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          replace
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}