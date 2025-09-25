import "server-only";

import { auth } from "./auth";
import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { GlobalRole } from "@/types/auth";

// Custom errors

export const getSession = cache(async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
});

export const requireAuth = async () => {
  const session = await getSession();
  if (!session) {
    redirect("/sign-in");
  }
  return session;
};

export const requireAdmin = async () => {
  const session = await requireAuth();
  if (session.user.role !== GlobalRole.ADMIN) {
    return {
      error: "Unauthorized",
      success: false,
      statusCode: 401,
    };
  }
  return {
    success: true,
    data: session,
    statusCode: 200,
  };
};
