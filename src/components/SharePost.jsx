import React from "react";
import pp from "/pp.jpg";

const SharePost = () => {
  return (
    <div className="top-0 sticky flex w-full flex-col gap-5 rounded-bl-3xl rounded-br-3xl bg-white/60 backdrop-blur-md p-5 border-b border-r border-l dark:bg-black dark:text-white">
      <div className="flex gap-5">
        <img
          src={pp}
          alt=""
          className="w-20 cursor-pointer rounded-full border-2 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
        />
        <textarea
          placeholder="هرچی در دلت بریز بیرون!"
          className="shadow-md outline-none resize-none rounded-2xl border p-3 w-full ring-transparent transition-all duration-200 hover:bg-gray-50 focus:-translate-y-1 focus:bg-gray-100 focus:shadow-xl focus:ring-2 focus:ring-blue-500 dark:bg-black"
        ></textarea>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center justify-start gap-3">
          <div className="flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-200 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            کاربر
          </div>
          <div className="flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-200 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            مکان
          </div>
          <div className="flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-200 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            وضعیت
          </div>
        </div>
        <button className="rounded-3xl bg-blue-500 px-5 py-2 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-400">
          اشتراک
        </button>
      </div>
    </div>
  );
};

export default SharePost;
