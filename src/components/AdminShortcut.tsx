"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AdminPanel = dynamic(
  () => import("@/components/AdminPanel").then((mod) => mod.AdminPanel),
  { loading: () => null, ssr: false },
);

export function AdminShortcut() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "x") {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return open ? <AdminPanel onClose={() => setOpen(false)} /> : null;
}
