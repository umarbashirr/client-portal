"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { signIn, signUp } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useTransition } from "react";

export const SignUpFormSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(1, { error: "Name should be at least 1 character" }),
  email: z.email({ error: "Invalid email address" }),
  password: z.string({ error: "Password is required" }).min(8, {
    error: "Password must be at least 8 characters",
  }),
});

type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;

export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignUpFormSchemaType) => {
    await signUp.email({
      name: values.name,
      email: values.email,
      password: values.password,
      callbackURL: "/orgs",
      fetchOptions: {
        onSuccess: () => {
          toast.success("Account created successfully");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    });
  };

  const handleGoogleSignUp = async (provider: "google" | "github") => {
    startTransition(async () => {
      await signIn.social({
        provider,
        callbackURL: "/orgs",
        fetchOptions: {
          onRequest: () => {
            toast.loading("Redirecting to Google...");
          },
          onSuccess: () => {
            toast.success("Redirecting to Google...");
          },
          onError: () => {
            toast.error("Failed to redirect to Google");
          },
        },
      });
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          onClick={() => handleGoogleSignUp("google")}
          disabled={isPending}
        >
          <Image src="/google.svg" alt="Google" width={20} height={20} />
          Continue with Google
        </Button>
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          onClick={() => handleGoogleSignUp("github")}
          disabled={isPending}
        >
          <Image src="/github.svg" alt="GitHub" width={20} height={20} />
          Continue with GitHub
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Separator className="flex-1" />
        <span className="text-sm text-muted-foreground">Or</span>
        <Separator className="flex-1" />
      </div>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={form.formState.isSubmitting || isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    disabled={form.formState.isSubmitting || isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    disabled={form.formState.isSubmitting || isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={form.formState.isSubmitting || isPending}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            )}
            {form.formState.isSubmitting ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
