import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Car, Lock, Mail, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, {
        message: "First name must be at least 2 characters",
      })
      .max(50),
    lastName: z
      .string()
      .min(2, {
        message: "Last name must be at least 2 characters",
      })
      .max(50),
    email: z.string().email(),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .max(15, { message: "Phone number is too long" }),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password is too short" }),
    userType: z.enum(["rider", "driver"]).refine((val) => !!val, {
      message: "Please select whether you want to be a rider or driver",
    }),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "rider",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const {
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      userType: data.userType,
      password: data.password,
    };

    try {
      const result = await register(userInfo).unwrap();

      if (result.success) {
        toast.success("User created successfully");
        navigate("/verify", { state: data.email });
      }
    } catch (error) {
      console.error(error);
      toast.warning("User Creation failed or user already exits");
      navigate("/login");
    }
  };

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
          <Car className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Join RideBook</h1>
        <p className="text-muted-foreground text-sm">
          Create your account to get started
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          placeholder="First name"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="john.doe@company.com"
                        type="email"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Enter your phone number"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* User Type Select */}
            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I want to</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rider">
                        <div className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          Be a Rider - Book rides
                        </div>
                      </SelectItem>
                      <SelectItem value="driver">
                        <div className="flex items-center">
                          <Car className="mr-2 h-4 w-4" />
                          Be a Driver - Earn money driving
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Fields */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Password className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Password className="pl-10" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Terms and Conditions Checkbox */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-start space-x-2">
                    <FormControl>
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={errors.terms ? "border-red-500" : ""}
                      />
                    </FormControl>
                    <div className="grid gap-1.5 leading-none">
                      <FormLabel
                        htmlFor="terms"
                        className="cursor-pointer text-sm leading-relaxed"
                      >
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="text-sky-400 underline underline-offset-4 hover:font-medium"
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="text-sky-400 underline underline-offset-4 hover:font-medium"
                        >
                          Privacy Policy
                        </Link>
                      </FormLabel>
                    </div>
                  </div>
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
