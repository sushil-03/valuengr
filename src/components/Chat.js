import React from "react";
import { IoPersonAdd, IoCallSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";

const Chat = () => {
    return (
        <div className="font-poppins h-[95%] relative px-2 flex flex-col mt-1  ">
            <div className="minHeading pt-5 pb-3 px-2 flex items-center font-poppins tracking-tighter  relative ">
                <div className="flex gap-2 items-center">
                    <p>
                        <img
                            src="./logo.png"
                            alt=""
                            className="w-8 h-8 select-none"
                        />
                    </p>
                    <span className="text-white  font-bold text-lg cursor-pointer ">
                        Valuenger
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
            <div className="flex gap-2 items-center px-2 rounded-xl flex-initial ">
                <div className=" rounded-full">
                    <img
                        src="./me.jpg"
                        alt="profile"
                        className="w-12 h-12 rounded-full object-fit"
                    />
                </div>
                <div className="flex justify-between items-center flex-1">
                    <div className="flex flex-col ">
                        <span className="text-white text-[16px] font-semibold">
                            Sushil Rawat
                        </span>
                        <span className="text-gray-500 text-[12px]">
                            last seen recently
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className=" text-gray-500">
                            <IoCallSharp fill="white" size={"1.4rem"} />
                        </span>
                        <span className="text-gray-500">
                            <MdVideoCall fill="white" size={"1.4rem"} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="screen text-white text-sm  tracking-tighter leading-4 h-[75%] flex  flex-col align-bottom flex-1 p-2 grow overflow-y-scroll mt-2 gap-3 absolute bottom-10 w-full">
                <div className="bg-[#191919] p-3 rounded-tl-xl rounded-tr-xl  rounded-bl-xl my-1 mr-3 ml-auto text-right">
                    <span>Lorem ipsum dolor sit,</span>
                </div>
                <div className="max-w-[16rem] bg-[#b881e1] p-3 rounded-tl-xl rounded-tr-xl  rounded-br-xl ml-2">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur asiing elit.
                        Eos, atque!
                    </span>
                </div>
                <div className="max-w-[16rem] bg-[#191919] p-3 rounded-tl-xl rounded-tr-xl  rounded-bl-xlmy-1 mr-3 ml-auto ">
                    <span>
                        Lorem ipsum dolor sit, amet consr elit. Eos, atque!
                    </span>
                </div>
                <div className="max-w-[16rem] bg-[#b881e1] p-3 rounded-tl-xl rounded-tr-xl  rounded-br-xl ml-2">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adip elit. Eos,
                        atque!
                    </span>
                </div>
                <div className="max-w-[16rem] bg-[#191919] p-3 rounded-tl-xl rounded-tr-xl  rounded-bl-xlmy-1 mr-3 ml-auto ">
                    <span>
                        Lorem ipsum dolor sdt, amet consr elit. Eos, atque!
                    </span>
                </div>
                <div className="max-w-[16rem] bg-[#191919] p-3 rounded-tl-xl rounded-tr-xl  rounded-bl-xlmy-1 mr-3 ml-auto ">
                    <span>
                        Lorem ipsum dolor sdt, amet consr elit. Eos, atque!
                    </span>
                </div>{" "}
                <div className="max-w-[16rem] bg-[#191919] p-3 rounded-tl-xl rounded-tr-xl  rounded-bl-xlmy-1 mr-3 ml-auto ">
                    <span>
                        Lorem ipsum dolor sdt, amet consr elit. Eos, atque!
                    </span>
                </div>{" "}
                <div className="max-w-[16rem] bg-[#b881e1] p-3 rounded-tl-xl rounded-tr-xl  rounded-br-xl ml-2">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adip elit. Eos,
                        atque!
                    </span>
                </div>
                <div className="max-w-[16rem] bg-[#191919] p-3 rounded-tl-xl rounded-tr-xl  rounded-bl-xlmy-1 mr-3 ml-auto ">
                    <span>
                        Lorem ipsum dolor sdt, amet consr elit. Eos, atque!
                    </span>
                </div>{" "}
                <div className="max-w-[16rem] bg-[#b881e1] p-3 rounded-tl-xl rounded-tr-xl  rounded-br-xl ml-2">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adip elit. Eos,
                        atque!
                    </span>
                </div>
            </div>

            <div className="align-bottom  absolute -bottom-4  ">
                <div className="searchbar  relative  text-gray-500">
                    <input
                        type="text"
                        placeholder="Type something..."
                        className="w-[300px]  outline-none mt-1 py-2 pl-12 pr-4 text-gray-500 bg-transparent  text-sm"
                    />
                    <AiOutlinePaperClip className="absolute text-gray-500 left-4 top-[12px] text-xl" />
                </div>
                <div className="p-2  bg-[#252525] absolute  -right-14 top-[5px] rounded-full">
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
