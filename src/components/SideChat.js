import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
const SideChat = () => {
    const peoples = [
        {
            name: "Sushil Rawat",
            time: "12:20",
        },
        {
            name: "Sushil Rawat",
            time: "12:20",
        },
        {
            name: "Sushil Rawat",
            time: "12:20",
        },
        {
            name: "Sushil Rawat",
            time: "12:20",
        },
    ];
    return (
        <div className="font-poppins  ">
            <div className="chat ">
                <div className="minHeading pt-5 pb-4 px-2 flex justify-around items-center font-poppins tracking-tighter ">
                    <span className="text-white  font-bold text-xl cursor-pointer ">
                        Chats
                    </span>
                    <div className="flex gap-3 items-center">
                        <span className="bg-[#B882E1] text-white rounded-md px-3  py-2	cursor-pointer font-bold text-sm">
                            Personal
                        </span>
                        <span className="text-gray-500 text-sm cursor-pointer">
                            Work
                        </span>
                    </div>
                </div>
                <div className="searchbar  mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search User"
                        className=" w-5/6 mx-4 outline-none border-none text-sm py-3 pl-12 text-gray-500 bg-[#0F0F0F] rounded-[10px]"
                    />
                    <BsSearch className="absolute text-gray-500 left-8 top-[12px] text-md" />
                </div>

                <span className="flex text-gray-500 gap-2 mt-4 mb-2 items-center mx-4">
                    <span>
                        <MdLocationOn className="text-xl" />
                    </span>
                    <span className="text-sm">Pinned</span>
                </span>
                <div className="mx-4 flex flex-col overflow-y-scroll h-64 tracking-tighter">
                    <div className="flex gap-2 items-center p-3 rounded-xl bg-[#1B1B1B] cursor-pointer">
                        <div className=" rounded-full">
                            <img
                                src="./me.jpg"
                                alt="profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center  gap-16">
                                <span className="text-white text-[16px]">
                                    Sushil Rawat
                                </span>
                                <span className="text-gray-500 text-[12px]">
                                    21:10
                                </span>
                            </div>
                            <p className="text-purple-400 text-sm">Typing...</p>
                        </div>
                    </div>
                    {peoples.map((people, key) => {
                        return (
                            <div
                                className="flex gap-2 items-center p-2 rounded-xl cursor-pointer"
                                key={key}
                            >
                                <div className=" rounded-full">
                                    <img
                                        src="./me.jpg"
                                        alt="profile"
                                        className="w-10 h-10 rounded-full object-fit"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center gap-16">
                                        <span className="text-white text-[16px]">
                                            {people.name}
                                        </span>
                                        <span className="text-gray-500 text-[12px]">
                                            {people.time}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-500 text-ellipsis ">
                                        Lorem ipsum dolor dfsdf ...
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <span className="flex text-gray-500 gap-2 mt-4 mb-2 items-center mx-4 ">
                    <span>
                        <FaTelegramPlane className="text-xl" />
                    </span>
                    <span className="text-sm">All Chats</span>
                </span>
                <div className="mx-4 flex flex-col overflow-y-scroll h-64 tracking-tighter flex-1">
                    {peoples.map((people, key) => {
                        return (
                            <div
                                className="flex gap-2 items-center p-2 rounded-xl cursor-pointer"
                                key={key}
                            >
                                <div className=" rounded-full">
                                    <img
                                        src="./me.jpg"
                                        alt="profile"
                                        className="w-10 h-10 rounded-full object-fit"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center gap-16">
                                        <span className="text-white text-[16px]">
                                            {people.name}
                                        </span>
                                        <span className="text-gray-500 text-[12px]">
                                            {people.time}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        Lorem ipsum dolor sit .
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SideChat;
