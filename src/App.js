import { useState } from "react";
import Chat from "./components/Chat";
import SideChat from "./components/SideChat";

function App() {
    return (
        <div className="App bg-[#0F0F0F] w-screen h-screen relative flex">
            <div className="w-[280px] bg-[#141414] z-50 h-[95%] max-w-[98%]  absolute top-5 left-10  rounded-[20px]">
                <SideChat />
            </div>
            <div className="w-[380px] bg-[#0D0D0D] z-10 h-[95%]  max-w-[98%] absolute top-5 left-[310px] rounded-tr-[20px] rounded-br-[20px]  ">
                <Chat />
            </div>
        </div>
    );
}

export default App;
