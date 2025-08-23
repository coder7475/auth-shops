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
import Password from "@/components/ui/password";
import { cn } from "@/lib/utils";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Lock, ShoppingBasket, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

// Zod schema for signup form
const registerSchema = z
  .object({
    user_name: z
      .string()
      .min(2, { message: "Username must be at least 2 characters" })
      .max(50, { message: "Username must be at most 50 characters" }),
    shopNames: z.string().refine(
      (val) => {
        // Split, trim, filter empty, deduplicate, count
        const arr = val
          .split(",")
          .map((s) => s.trim())
          .filter((s, i, a) => s && a.indexOf(s) === i);

        return arr.length >= 3;
      },
      {
        message:
          "Please enter at least 3 unique shop names, separated by commas.",
      }
    ),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password is too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function RegisterForm({
  className,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      user_name: "",
      shopNames: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    // Prepare shopNames as array of unique, trimmed names
    const shopNamesArr = data.shopNames
      .split(",")
      .map((s) => s.trim())
      .filter((s, i, a) => s && a.indexOf(s) === i);

    const userInfo = {
      user_name: data.user_name,
      password: data.password,
      shopNames: shopNamesArr,
    };

    try {
      const result = await register(userInfo).unwrap();

      if (result.success) {
        toast.success("Signed Up!");

        navigate("/login");
      } else if (result.error?.shopNames) {
        toast.warning(result.error.shopNames);
      }
    } catch (error: unknown) {
      // Handle backend errors for username and shop name uniqueness
      const apiError = error as {
        data?: { message?: string; statusCode?: number };
      };
      if (
        apiError?.data?.message === "Username Unavailable!" &&
        apiError?.data?.statusCode === 400
      ) {
        toast.warning("Username Unavailable!");
      } else {
        toast.warning("User creation failed or user already exists");
      }
    }
  };

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
          <ShoppingBasket className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Join AuthShops</h1>
        <p className="text-muted-foreground text-sm">
          Create your account to get started
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Username"
                        className="pl-10"
                        autoComplete="username"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Shop Names Field */}
            <FormField
              control={form.control}
              name="shopNames"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shop Names</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        type="text"
                        placeholder="Enter shop names separated by commas"
                        value={field.value}
                        onChange={field.onChange}
                        autoComplete="off"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Please enter at least <b>3 unique shop names</b>,
                        separated by commas.
                      </p>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Password
                        className="pl-10"
                        autoComplete="new-password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Password
                        className="pl-10"
                        autoComplete="new-password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-primary group w-full cursor-pointer transition-colors duration-200 hover:bg-blue-500 hover:text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
