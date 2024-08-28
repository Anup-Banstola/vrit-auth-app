"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get("auth");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl">Dashboard</h1>
      <p>Welcome to the protected dashboard!</p>
    </div>
  );
}
