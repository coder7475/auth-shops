import { useEffect } from "react";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Link, useNavigate } from "react-router";
import { ModeToggle } from "@/components/mode-toggler";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { data } = useUserInfoQuery(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data?.email) {
      navigate("/dashboard");
    }
  }, [data?.data?.email, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-card">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome to <span className="font-extrabold">Auth Shops</span>
        </h1>
        <div className="space-y-4">
          <Button variant="default" className="w-full text-lg" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="secondary" className="w-full text-lg" asChild>
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
