"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Duitku's server-to-server callback can land a few seconds after the
// customer is redirected back here, so keep re-fetching the order status
// from the server until it flips to PAID/FAILED.
export function PendingPoller() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => router.refresh(), 3000);
    return () => clearInterval(interval);
  }, [router]);

  return null;
}
