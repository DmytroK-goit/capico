
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("PASSWORD RESET EMAIL:", email.trim());
    setSuccess(true);
  };

  return (
    <main className="relative isolate flex h-[100%] items-center justify-center overflow-hidden bg-black px-4 py-12 text-white">
     
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[650px] w-[550px] rounded-full bg-[#6323c5]/20 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-60 left-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-[#4c168e]/20 blur-[150px]" />

      <div className="relative z-10 flex w-full items-center justify-center">
        <div className="w-full max-w-[520px]">
         

          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#0c0b11]/90 p-7 shadow-[0_20px_100px_rgba(70,25,130,0.18)] backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/15 blur-[90px]" />

            <div className="relative">
              
              <div className="mb-9">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#a879e9]">
                  Account recovery
                </p>

                <h2 className="text-[36px] font-light tracking-[-1.5px]">
                  Forgot{" "}
                  <span className="bg-gradient-to-r from-white to-[#a879e9] bg-clip-text text-transparent">
                    password?
                  </span>
                </h2>

                <p className="mt-3 max-w-[370px] text-sm leading-6 text-white/40">
                  No worries! Enter the email address associated with your
                  account and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
              
                <div>
                  <label className="mb-2 block text-[13px] text-white/65">
                    Email address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="h-[54px] w-full rounded-[13px] border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-white/20 focus:border-[#8b4ce0] focus:bg-white/[0.055] focus:shadow-[0_0_20px_rgba(117,53,199,0.12)]"
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-red-500/20 bg-red-500/[0.08] p-3 text-xs text-red-400">
                    {error}
                  </p>
                )}

                {success && (
                  <p className="rounded-xl border border-green-500/20 bg-green-500/[0.08] p-3 text-xs leading-5 text-green-400">
                    If an account exists with this email, you&apos;ll receive
                    password reset instructions shortly.
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex h-[55px] w-full items-center justify-between rounded-full bg-gradient-to-r from-[#5923ad] to-[#7838c9] px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(112,48,200,0.35)] active:translate-y-0"
                >
                  <span className="mx-auto">Send reset link</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>

              <div className="mt-8 border-t border-white/[0.08] pt-7 text-center">
                <Link
                  href="/signin"
                  className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-[#a879e9]"
                >
                  <span>←</span>
                  Back to sign in
                </Link>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </main>
  );
}