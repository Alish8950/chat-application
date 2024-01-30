import ChatComponent from "@/app/components/chatComponent";
import MessageArea from "@/app/components/messageArea";
import OppositeProfile from "@/app/components/oppositeProfile";
import Profile from "@/app/components/profile";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="main flex">
        <div className="left w-fit px-5 py-3 bg-primary h-screen">
          <div className="profile mb-5">
            <Profile />
          </div>
          <div className="chat-component flex flex-col gap-3">
            <ChatComponent active={true} />
            <ChatComponent active={false} />
            <ChatComponent active={false} />
          </div>
        </div>
        <div className="right bg-primary w-full px-5 py-3 border-s border-white">
          <div className="opposite-profile">
            <OppositeProfile />
          </div>
            <MessageArea />
        </div>
      </div>
    </>
  );
};

export default Home;
