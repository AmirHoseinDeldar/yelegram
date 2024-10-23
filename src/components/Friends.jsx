import React from "react";
import friend1 from "/friends/friend-1.jpg";
import friend2 from "/friends/friend-2.jpg";
import friend3 from "/friends/friend-3.jpg";
import friend4 from "/friends/friend-4.jpg";
import friend5 from "/friends/friend-5.jpg";

const friendList = [
  { img: friend1, name: "ali" },
  { img: friend2, name: "maryam" },
  { img: friend3, name: "sasan" },
  { img: friend4, name: "sara" },
  { img: friend5, name: "mina" },
];
const Friends = () => {
  return (
    <div className="sticky hidden xl:flex items-start justify-end flex-1">
      <div className="sticky top-10 flex flex-col w-full gap-5 rounded-3xl border bg-white p-5 text-center md:w-5/6 dark:bg-black">
        <h3 className="text-4xl font-semibold">دوست ها</h3>
        <ul className="w-full flex flex-col gap-5">
          {friendList.map((friend, index) => (
            <li
              key={index}
              className="flex cursor-pointer flex-wrap items-start justify-between gap-2 rounded-3xl bg-gray-100 p-3 transition-all duration-300 hover:bg-gray-200 dark:bg-black dark:text-white"
            >
              <button className="rounded-3xl bg-blue-500 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-400">
                پیام
              </button>
              <div className="flex items-center gap-5">
                <span className=" font-semibold dark:text-gray-200">{friend.name}</span>
                <img
                  src={friend.img}
                  alt=""
                  className="w-14 rounded-full md:w-16"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
