"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center
       bg-white px-4 bg-white dark:bg-zinc-900 border-black dark:border-white shadow-[-7px_7px_0px_#000]
        dark:shadow-[-7px_7px_0px_#fff] text-black dark:text-white"
      >
        <div className="w-full max-w-[400px] bg-white border border-black shadow-[-7px_7px_0px_#000] p-7">
          <div className="flex justify-between items-center mb-7">
            <h2
              className="text-[22px] font-bold flex items-center justify-center
            bg-white dark:text-black"
            >
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <Link
              href="/"
              className="text-xl font-bold cursor-pointer dark:bg-black p-2"
            >
              x
            </Link>
          </div>

          <form
            className="flex flex-col gap-3.5
           bg-white border-black shadow-[-7px_7px_0px_#000] 
            dark:shadow-[-7px_7px_0px_#fff] text-black p-6 border"
          >
            {isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="border border-black px-4 py-3 outline-none text-sm"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="border border-black px-4 py-3 outline-none text-sm"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-black px-4 py-3 outline-none text-sm"
              required
            />
            <button
              type="submit"
              className="mt-3 w-full bg-black text-white py-3 text-sm font-medium
               border border-black hover:bg-white hover:text-black transition-all duration-200"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p
            className="text-center text-[-13px] mt-6
          bg-white dark:text-black p-2"
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            {""}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold underline cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthPage;
