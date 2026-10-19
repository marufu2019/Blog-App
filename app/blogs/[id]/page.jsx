"use client";
import Footer from "@/Components/Footer";
import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
// import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ThemeToggle from "@/Components/ThemeToggle";
// import Header from "@/Components/Header";
import { useTheme } from "@/Components/ThemeProvider";

const Page = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, [params.id]);

  if (!data) return <div>Loading...</div>;

  return data ? (
    <>
      {/* <Header /> */}
      <div
        className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28 bg-white dark:bg-zinc-900 border-black dark:border-white
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
        {/* <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={assets.logo} alt="" className="w-[130px] sm:w-auto" />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started <Image src={assets.arrow} alt="" />
          </button>
        </div> */}

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img}
            alt=""
            width={60}
            height={60}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          alt=""
          width={1280}
          height={720}
        />
        <h1 className="my-8 text-[26px] font-semibold dark:text-white">
          Introduction:
        </h1>
        <p className="dark:text-white">{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold dark:text-white">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3 dark:text-white">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long term goals.
        </p>
        <p className="my-3 dark:text-white">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long term goals.
        </p>{" "}
        <h3 className="my-5 text-[18px] font-semibold dark:text-white">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3 dark:text-white">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long term goals.
        </p>
        <p className="my-3 dark:text-white">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long term goals.
        </p>{" "}
        <h3 className="my-5 text-[18px] font-semibold dark:text-white">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3 dark:text-white">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long term goals.
        </p>
        <p className="my-3 dark:text-white">
          Before you can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold dark:text-white">
          Conclusion:
        </h3>
        <p className="my-3 dark:text-white">
          Managing your lifestyle is a journey that requires commitment and
          self-awareness. By following this step-by-step guide, you can take
          control of your life and make meaningful changes that lead to a more
          balanced and fulfilling lifestyle. Remember that it's okay to seek
          support and guidance from professionals or mentors along the way. Your
          well-being and happiness are worth the effort.
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4 dark:text-white">
            Share this article on social media
          </p>
          <div className="flex cursor-pointer">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
