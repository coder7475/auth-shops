import { Card } from "@/components/ui/card";
import { RegisterForm } from "@/modules/auth/RegisterForm";
import { Separator } from "@radix-ui/react-separator";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="dark:bg-background flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8">
      <div className="pb-12 pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg">
            <Card className="card-gradient p-8">
              <RegisterForm />

              <div className="mt-6">
                <Separator className="my-4" />
                <p className="text-muted-foreground text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary font-medium hover:underline"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
