"use client";

import { Printer } from "lucide-react";

type PrintProjectsButtonProps = {
  className?: string;
  compact?: boolean;
};

export function PrintProjectsButton({
  className = "",
  compact = false,
}: PrintProjectsButtonProps) {
  function openPrintReport() {
    const reportUrl = "/projects-report";
    const popup = window.open(reportUrl, "_blank");

    if (popup) {
      popup.opener = null;
      popup.focus();
    } else {
      window.location.href = reportUrl;
    }
  }

  return (
    <button
      type="button"
      onClick={openPrintReport}
      className={className}
      aria-label="Print projects report"
    >
      <Printer className="h-4 w-4" />
      {compact ? "Print" : "Print Projects"}
    </button>
  );
}
