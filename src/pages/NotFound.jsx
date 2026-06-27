import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-24 px-4">
      <h1 className="text-5xl font-black text-slate-900 mb-2">404</h1>
      <p className="text-gray-500 mb-6 font-medium">The page you are looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm">
        Go Back Home
      </Link>
    </div>
  );
}