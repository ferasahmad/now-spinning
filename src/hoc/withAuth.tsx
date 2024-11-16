"use client";

import LoadingPage from "@/components/LoadingPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface WithAuthProps {
  children: ReactNode;
}

export default function WithAuth({ children }: WithAuthProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <LoadingPage />;
  }

  return <>{session ? children : null}</>;
}
