import { Link, useRouteError } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

export default function ErrorPage() {
  usePageTitle("Error");

  const err = useRouteError() as any;

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
      <div className="max-w-md">
        <img
          src="/error-404.png"
          alt="Page not found"
          className="h-40 sm:h-48 md:h-56 mx-auto mb-5 object-contain"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Oops, Page Not Found
        </h1>

        <p className="text-sm sm:text-base opacity-70 mb-6 leading-relaxed">
          The page you are looking for is not available or might have been
          moved.
        </p>

        <Link
          to="/"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-full sm:w-auto px-8 py-3 text-sm sm:text-base font-medium hover:opacity-90 transition"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
