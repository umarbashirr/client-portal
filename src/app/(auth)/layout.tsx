import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background w-full px-4">
      {children}
    </main>
  );
};

export default AuthLayout;
