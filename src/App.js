import { useState } from "react";
import Chat from "./components/Chat";
import SideChat from "./components/SideChat";

function App() {
    return (
        <div className="App bg-black w-screen h-screen p-5 flex overflow-hidden">
            <div className="w-1/5 h-full relative">
                <div className="absolute w-3/4 h-full right-0 top-0 bg-white/5 z-0"></div>
                <SideChat />
            </div>
            <div className="w-1/4 p-4 bg-white/5 z-10 h-full rounded-r-3xl ">
                <Chat />
            </div>
        </div>
    );
}

export default App;
