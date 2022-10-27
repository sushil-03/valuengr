import React, { useState, useRef } from "react";
import { IoPersonAdd, IoCallSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
const Chat = () => {
    const [myMessage, setMyMessage] = useState("");
    const [message, setMessage] = useState([
        {
            author: "frnd",
            message:
                "Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam. ",
        },
        {
            author: "me",
            message:
                "Lorem ipsum dolor sit amet, conse ctet adipiscing elit ut aliquam. ",
        },

        {
            author: "me",
            message: "Ok Work done",
        },
        {
            author: "frnd",
            message:
                "Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam. ",
        },
    ]);
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();
    const sendMessage = (e) => {
        e.preventDefault();
        if (myMessage === "") return;
        executeScroll();
        setMessage([
            ...message,
            {
                author: "me",
                message: myMessage,
            },
        ]);
        setMyMessage("");
    };

    return (
        <div className="font-poppins h-full relative  flex flex-col   ">
            <div className="minHeading  flex items-center font-poppins  relative ">
                <div className="flex gap-3 items-center">
                    <p>
                        <img
                            src="./logo.png"
                            alt=""
                            className="w-8 h-8 select-none"
                        />
                    </p>
                    <span className="text-white  font-bold text-base cursor-pointer ">
                        Valuengr
                    </span>
                </div>
                <div className="flex gap-5 items-center absolute right-2">
                    <span className="text-gray-500 cursor-pointer">
                        <IoPersonAdd fill="white" />
                    </span>
                    <span className="text-gray-500 cursor-pointer">
                        <HiDotsVertical size={"1.3rem"} />
                    </span>
                </div>
            </div>
            <div className="flex gap-4 items-center px-2 rounded-xl flex-initial mt-4">
                <div className=" rounded-full">
                    <img
                        src="./me.png"
                        alt="profile"
                        className="w-10 h-10 rounded-full object-fit"
                    />
                </div>
                <div className="flex justify-between items-center flex-1">
                    <div className="flex flex-col ">
                        <span className="text-white text-base font-medium">
                            Peter White
                        </span>
                        <span className="text-gray-500 text-[12px]">
                            last seen recently
                        </span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className=" text-gray-500">
                            <IoCallSharp fill="white" size={"1.2rem"} />
                        </span>
                        <span className="text-gray-500">
                            <MdVideoCall fill="white" size={"1.4rem"} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="  flex-1 justify-end mt-4 overflow-y-scroll">
                <div className="  h-full flex  flex-col  gap-3 justify-end flex-1 overflow-y-scroll	barLeft  text-white text-sm   leading-4 min-h-0 flex-grow">
                    <div className="overflow-y-scroll relative barLeft">
                        {/* Music UI */}
                        <div className="max-w-[14rem] bg-[#b881e1] mt-2 p-2 rounded-tl-xl rounded-tr-xl  rounded-br-xl  mb-1 min-h-0">
                            <div className="flex gap-1 items-center p-2 ">
                                <div className="w-[2px] h-3 bg-white ">
                                    {""}
                                </div>
                                <div className="w-[2px] h-5 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-5 bg-white"></div>
                                <div className="w-[2px] h-1 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px]  h-5 bg-white"></div>
                                <div className="w-[2px]  h-5 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-5 bg-white"></div>
                                <div className="w-[2px] h-1 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-5 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white "></div>
                                <div className="w-[2px] h-5 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-5 bg-white"></div>
                                <div className="w-[2px] h-1 bg-white"></div>
                                <div className="w-[2px] h-2 bg-white"></div>
                                <div className="w-[2px] h-5 bg-white"></div>
                                <div className="w-[2px] h-3 bg-white"></div>
                            </div>
                        </div>
                        {message.map((mess, key) => {
                            if (mess.author === "me") {
                                return (
                                    <div
                                        className="w-[14rem] max-w-fit mt-2  mr-2 bg-[#191919] p-3 text-right rounded-tl-xl rounded-tr-xl  rounded-bl-xl   ml-auto   "
                                        key={key}
                                    >
                                        <span className="">{mess.message}</span>
                                    </div>
                                );
                            }
                            return (
                                <div
                                    className=" w-[14rem] max-w-fit mt-2 bg-[#b881e1] p-3 rounded-tl-xl rounded-tr-xl  rounded-br-xl  mb-1"
                                    key={key}
                                >
                                    <span>{mess.message}</span>
                                </div>
                            );
                        })}
                        <div
                            ref={myRef}
                            className=" absolute bottom-0  border-white/5"
                        >
                            {" "}
                        </div>
                    </div>
                </div>
            </div>

            <div className="align-bottom  relative">
                <div className="searchbar  relative  text-gray-500">
                    <form action="" onSubmit={(e) => sendMessage(e)}>
                        <input
                            value={myMessage}
                            onChange={(e) => setMyMessage(e.target.value)}
                            type="text"
                            placeholder="Type something..."
                            className="w-full pl-8  outline-none mt-1 py-2 pr-14 text-gray-500 bg-transparent  text-sm"
                            onSubmit={() => sendMessage()}
                        />
                    </form>
                    <AiOutlinePaperClip className="absolute text-white/40 left-2 top-3 text-xl" />
                </div>
                <div className="p-2  bg-[#252525] absolute  right-3 top-[5px] rounded-full">
                    <BsLightningChargeFill
                        fill={"yellow"}
                        className=" text-xl  "
                    />
                </div>
            </div>
        </div>
    );
};

export default Chat;
