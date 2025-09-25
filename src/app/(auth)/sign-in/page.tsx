import { SignInForm } from "@/components/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { getSession } from "@/lib/auth-middleware";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await getSession();

  if (session) {
    redirect("/orgs");
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Login to your account
        </CardTitle>
        <CardDescription>
          Welcome back! Please enter the details below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-primary underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
