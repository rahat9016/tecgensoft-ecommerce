"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import Lottie component to disable SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import errorAnimation from "../../public/error.json";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Lottie animation only renders client-side */}
        <Lottie
          className="h-80 w-auto"
          animationData={errorAnimation}
          loop={true}
        />

        <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {error.message || "Something went wrong!"}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={reset}
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            Try Again
          </button>

          {/* Go back home */}
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;