"use client";
import React, { use } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div
      className="py-5 px-5 md:px-12 lg:px-28 bg-white dark:bg-zinc-900 border-black dark:border-white
     shadow-[-7px_7px_0px_#000] dark:shadow-[-7px_7px_0px_#fff] text-black dark:text-white"
    >
      <div className="flex justify-between item-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className={`w-[180px] h-auto sm:w-auto object-contain ${
            theme === "dark" ? "bg-white px-3 p-1.5 rounded-md" : ""
          }`}
        />
        <div className="flex items-center gap-9">
          <ThemeToggle />
          <button
            onClick={() => router.push("/auth")}
            className="group flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] 
          bg-white text-black cursor-pointer hover:bg-black hover:text-white hover:shadow-[-7px_7px_0px_gray]
           active:shadow-[-2px_2px_0px_#000] active:translate-x-[-2px] active:translate-y-[-2px] transition-all duration-200 
           dark:shadow-[-7px_7px_0px_#fff]"
          >
            Get started <Image src={assets.arrow} alt="" />{" "}
          </button>
        </div>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem natus
          cumque repellat ut ea? Fuga, quam? Atque sapiente tempora laudantium?
          Magni nulla possimus a nemo! Laudantium asperiores neque eligendi
          facilis.
        </p>
        <form
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none "
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4  sm:px-8 active:bg-gray-600 active:text-white dark:hover:bg-white hover:text-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
