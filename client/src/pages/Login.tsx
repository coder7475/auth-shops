import { Card } from "@/components/ui/card";
import { LoginForm } from "@/modules/auth/LoginForm";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="dark:bg-background min-h-screen bg-gray-50 px-4 py-20">
      <div className="flex w-full items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="card-gradient dark:bg-accent flex flex-col items-center px-8">
            {/* Header */}
            <div className="flex w-full flex-col items-center rounded-lg text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                <ShoppingBagIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="mb-2 text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to your AuthShops account
              </p>
            </div>

            {/* Form */}
            <div className="flex w-full flex-col items-center">
              <LoginForm className="w-full" />
              <div className="mt-6 w-full">
                <Separator className="my-4" />
                <p className="text-muted-foreground text-center text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-primary font-medium hover:underline"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
