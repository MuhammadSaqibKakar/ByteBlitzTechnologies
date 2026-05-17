"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Database,
  Loader2,
  LockKeyhole,
  LogOut,
  RefreshCw,
  ShieldCheck,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
};

type Attempt = {
  id: string;
  success: boolean;
  reason: string | null;
  createdAt: string;
};

type Summary = {
  database: string;
  leadCount: number;
  recentLeads: Lead[];
  recentAttempts: Attempt[];
};

export function AdminShortcut() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "x") {
        event.preventDefault();
        setOpen(true);
        setMessage("");
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      void loadSummary(false);
    }
  }, [open]);

  async function loadSummary(showLoading = true) {
    if (showLoading) setLoading(true);

    try {
      const response = await fetch("/api/admin/summary", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok && data.ok) {
        setSummary(data);
        setMessage("");
      } else if (response.status !== 401) {
        setMessage(data.message || "Admin panel is not ready yet.");
      }
    } catch {
      setMessage("Could not reach the admin API.");
    } finally {
      if (showLoading) setLoading(false);
    }
  }

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!code.trim() || loading) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ code }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setMessage(data.message || "Admin login failed.");
        return;
      }

      setCode("");
      await loadSummary(false);
    } catch {
      setMessage("Could not reach the admin API.");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    }).catch(() => null);
    setSummary(null);
    setCode("");
    setLoading(false);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071B3A]/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#071B3A]/10 bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071B3A] text-white">
                  <LockKeyhole className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-black text-[#071B3A]">
                    ByteBlitz Admin
                  </h2>
                  <p className="text-xs font-bold text-[#071B3A]/55">
                    Hidden access: Ctrl + Shift + X
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-[#071B3A]/10 text-[#071B3A]"
                aria-label="Close admin panel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 sm:p-7">
              {summary ? (
                <div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-[#F5F7FB] p-4">
                      <Database className="h-5 w-5 text-[#007BFF]" />
                      <p className="mt-3 text-2xl font-black text-[#071B3A]">
                        {summary.database}
                      </p>
                      <p className="text-sm font-bold text-[#071B3A]/55">
                        Database
                      </p>
                    </div>
                    <div className="rounded-lg bg-[#F5F7FB] p-4">
                      <ShieldCheck className="h-5 w-5 text-[#00AEEF]" />
                      <p className="mt-3 text-2xl font-black text-[#071B3A]">
                        {summary.leadCount}
                      </p>
                      <p className="text-sm font-bold text-[#071B3A]/55">
                        Saved requests
                      </p>
                    </div>
                    <div className="flex gap-3 rounded-lg bg-[#F5F7FB] p-4">
                      <button
                        type="button"
                        onClick={() => loadSummary()}
                        className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-full bg-[#007BFF] px-4 py-3 text-sm font-black text-white"
                      >
                        <RefreshCw className="h-4 w-4" />
                        Refresh
                      </button>
                      <button
                        type="button"
                        onClick={logout}
                        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#071B3A]"
                        aria-label="Logout"
                      >
                        <LogOut className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-base font-black text-[#071B3A]">
                      Recent requests
                    </h3>
                    <div className="mt-3 grid gap-3">
                      {summary.recentLeads.length ? (
                        summary.recentLeads.map((lead) => (
                          <div
                            key={lead.id}
                            className="rounded-lg border border-[#071B3A]/10 p-4"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className="font-black text-[#071B3A]">
                                {lead.name}
                              </p>
                              <span className="rounded-full bg-[#FF6A00]/10 px-3 py-1 text-xs font-black text-[#FF6A00]">
                                {lead.service}
                              </span>
                            </div>
                            <p className="mt-2 text-sm font-bold text-[#071B3A]/70">
                              {lead.phone}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[#071B3A]/65">
                              {lead.message}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="rounded-lg bg-[#F5F7FB] p-4 text-sm font-bold text-[#071B3A]/65">
                          No saved requests yet.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={login}>
                  <label className="grid gap-2 text-sm font-bold text-[#071B3A]">
                    Admin code
                    <input
                      value={code}
                      onChange={(event) => setCode(event.target.value)}
                      type="password"
                      autoFocus
                      className="focus-ring rounded-lg border border-[#071B3A]/15 bg-[#F5F7FB] px-4 py-3 text-[#071B3A]"
                      placeholder="Enter admin code"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={loading || !code.trim()}
                    className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-5 py-3 text-sm font-black text-white transition hover:bg-[#e95f00] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Open Admin
                  </button>
                </form>
              )}

              {message ? (
                <p className="mt-5 rounded-lg bg-[#FF6A00]/10 p-4 text-sm font-bold text-[#071B3A]">
                  {message}
                </p>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
