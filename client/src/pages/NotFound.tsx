import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <section className="px-4 text-center">
        <h1 className="mb-2 text-6xl font-extrabold text-gray-800">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mb-6 text-gray-500">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/" aria-label="Go back to home page">
            Return to Home
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default NotFound;
