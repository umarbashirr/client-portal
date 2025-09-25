import { SignUpForm } from "@/components/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSession } from "@/lib/auth-middleware";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = async () => {
  const session = await getSession();

  if (session) {
    redirect("/orgs");
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Create an account</CardTitle>
        <CardDescription>
          Welcome to Client Portal Hub. Please enter the details below to create
          an account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-primary underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
