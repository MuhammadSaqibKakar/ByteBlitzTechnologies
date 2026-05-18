"use client";

import { Printer } from "lucide-react";
import { useEffect } from "react";

export function ProjectReportAutoPrint() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.print();
    }, 700);

    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}

export function ProjectReportPrintButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      <Printer className="h-4 w-4" />
      Print Now
    </button>
  );
}
