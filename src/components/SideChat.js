import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
const SideChat = () => {
    const peoples = [
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
        {
            name: "Peter Smith",
            time: "12:20",
        },
    ];
    return (
        <div className="font-poppins h-full w-full z-10 absolute bg-[#111] rounded-3xl barLeft">
            <div className="chat ">
                <div className="minHeading pt-5 pb-4 px-2 flex justify-around items-center font-poppins  ">
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
                        className=" w-5/6 mx-4 outline-none border-none text-sm py-3 pl-12 text-white/40 bg-[#000]/40 rounded-[10px]"
                    />
                    <BsSearch className="absolute text-white/40 left-8 top-[12px] text-md" />
                </div>

                <span className="flex text-white/20 gap-2 py-3 mb-2 items-center mx-4">
                    <span>
                        <MdLocationOn className="text-xl" />
                    </span>
                    <span className="text-sm">Pinned</span>
                </span>
                <div className="mx-4 flex flex-col overflow-y-scroll h-64 barLeft">
                    <div className="flex gap-3 items-center p-3 rounded-xl bg-[#1B1B1B] cursor-pointer mr-2">
                        <div className=" rounded-full w-10 h-10">
                            <img
                                src="./me.png"
                                alt="profile"
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center ">
                                <span className="text-white text-base  font-bold">
                                    Peter White
                                </span>
                            </div>
                            <p className="text-purple-400 text-sm">Typing...</p>
                        </div>
                    </div>
                    {peoples.map((people, key) => {
                        return (
                            <div
                                className="flex gap-2 items-center mt-3 rounded-xl cursor-pointer justify-center"
                                key={key}
                            >
                                <div className=" rounded-full w-10 h-10">
                                    <img
                                        src="./other.png"
                                        alt="profile"
                                        className="w-10 h-10 rounded-full object-fit"
                                    />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex justify-between items-center gap-2 ">
                                        <span className="flex-1 text-white text-sm font-medium">
                                            {people.name}
                                        </span>
                                        <span className="text-white/30 text-sm px-1">
                                            {people.time}
                                        </span>
                                    </div>
                                    <div className="whitespace-nowrap text-ellipsis  overflow-hidden">
                                        <p className="text-sm text-white/30 w-44 mr-10 whitespace-nowrap text-ellipsis inline-block overflow-hidden">
                                            Lorem ipsum dolor dfsdsdss sd
                                            sdeeeeee sd
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex text-white/30 gap-2 items-center mx-4    my-4">
                    <span>
                        <FaTelegramPlane className="text-xl" />
                    </span>
                    <span className="text-sm font-medium">All Chats</span>
                </div>
                <div className="mx-4 flex flex-col overflow-y-scroll h-60 flex-1 allChat barLeft">
                    {peoples.map((people, key) => {
                        return (
                            <div
                                className="flex gap-2 items-center p-2 rounded-xl cursor-pointer"
                                key={key}
                            >
                                <div className=" rounded-full">
                                    <img
                                        src="./other.png"
                                        alt="profile"
                                        className="w-10 h-10 rounded-full object-fit"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center gap-2">
                                        <span className=" text-white text-sm font-medium flex-1">
                                            {people.name}
                                        </span>
                                        <span className="text-white/30 text-sm">
                                            {people.time}
                                        </span>
                                    </div>
                                    <span className="text-sm text-white/30">
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
