"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import substruck from "../../img/numbers/Subtract.png";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const credentials = {
      email: email.trim(),
      password,
      remember,
    };

    console.log("LOGIN CREDENTIALS:", credentials);

    setSuccess(true);
  };

  return (
    <main className="relative isolate flex h-[100%] items-center justify-center overflow-hidden bg-black px-4 py-12 text-white">
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[650px] w-[550px] rounded-full bg-[#6323c5]/20 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-60 left-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-[#4c168e]/20 blur-[150px]" />

      <div className="relative z-10 flex w-full items-center justify-center">
        <div className="w-full max-w-[650px] justify-center">
          <Link href="/" className="mb-10 block text-center text-[34px] font-medium tracking-[-2px] lg:hidden">
            capi<span className="text-[#9557ec]">co.</span>
          </Link>

          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#0c0b11]/90 p-7 shadow-[0_20px_100px_rgba(70,25,130,0.18)] backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/15 blur-[90px]" />

            <div className="relative">
              <div className="mb-9">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#a879e9]">Account access</p>

                <h2 className="text-[36px] font-light tracking-[-1.5px]">
                  Sign <span className="bg-gradient-to-r from-white to-[#a879e9] bg-clip-text text-transparent">in</span>
                </h2>

                <p className="mt-2 text-sm text-white/40">Welcome back! Enter your details to continue.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="mb-2 block text-[13px] text-white/65">Email address</label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-[54px] w-full rounded-[13px] border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-white/20 focus:border-[#8b4ce0] focus:bg-white/[0.055] focus:shadow-[0_0_20px_rgba(117,53,199,0.12)]"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-[13px] text-white/65">Password</label>

                    <Link href="/forgotPassword" className="text-xs text-[#a879e9] transition hover:text-white">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="h-[54px] w-full rounded-[13px] border border-white/10 bg-white/[0.035] px-4 pr-16 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-white/20 focus:border-[#8b4ce0] focus:bg-white/[0.055] focus:shadow-[0_0_20px_rgba(117,53,199,0.12)]"
                    />

                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/40 transition hover:text-[#b68af5]">
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex cursor-pointer items-center gap-2.5 text-xs text-white/50">
                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 accent-[#873fd5]" />
                    Remember me
                  </label>
                </div>

                {error && <p className="rounded-xl border border-red-500/20 bg-red-500/[0.08] p-3 text-xs text-red-400">{error}</p>}

                {success && <p className="rounded-xl border border-green-500/20 bg-green-500/[0.08] p-3 text-xs text-green-400">Mock login successful!</p>}

                <button
                  type="submit"
                  className="group flex h-[55px] w-full items-center justify-between rounded-full bg-gradient-to-r from-[#5923ad] to-[#7838c9] px-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(112,48,200,0.35)] active:translate-y-0"
                >
                  <span className="mx-auto">Continue to Capico</span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>

              <div className="mt-8 border-t border-white/[0.08] pt-7 text-center">
                <p className="text-sm text-white/40">
                  Do not have an account?{" "}
                  <Link href="/signup" className="font-medium text-[#a879e9] transition hover:text-white">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
