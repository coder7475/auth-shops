import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type LoginFormFields = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export function LoginForm({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const navigate = useNavigate();
  const form = useForm<LoginFormFields>({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });
  const [login] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    try {
      // Pass rememberMe to backend or as option for session duration
      const payload = {
        username: data.username,
        password: data.password,
        rememberMe: data.rememberMe,
      };
      const res = await login(payload).unwrap();

      if (res.success) {
        toast.success("Login Successfully!");
        // Redirect to dashboard after successful login
        navigate("/dashboard");
      }
    } catch (err: any) {
      // Show proper error messages
      if (typeof err === "object" && err !== null && "status" in err) {
        const status = (err as { status?: number }).status;
        if (status === 400) {
          // Incorrect password
          form.setError("password", { message: "Incorrect password" });
        } else if (status === 404) {
          // User not found
          form.setError("username", { message: "User not found" });
        } else {
          toast.error("Login failed. Please try again.");
        }
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                rules={{
                  required: "Username is required",
                }}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter your username"
                          className={cn(
                            "pl-10",
                            fieldState.error ? "border-destructive" : ""
                          )}
                          {...field}
                          value={field.value || ""}
                          autoComplete="username"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                rules={{
                  required: "Password is required",
                }}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className={cn(
                            "pl-10 pr-10",
                            fieldState.error ? "border-destructive" : ""
                          )}
                          {...field}
                          value={field.value || ""}
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                          tabIndex={-1}
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <EyeOff className="text-muted-foreground h-4 w-4" />
                          ) : (
                            <Eye className="text-muted-foreground h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <input
                        id="rememberMe"
                        type="checkbox"
                        className="accent-primary h-4 w-4"
                        checked={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="rememberMe"
                      className="mb-0 cursor-pointer text-sm font-normal"
                    >
                      Remember Me
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              className="group w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
              <span className="ml-2">
                <svg
                  className="inline h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
