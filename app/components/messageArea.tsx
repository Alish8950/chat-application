"use client";
import React, { useState, useEffect } from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SecondaryAvatar from "./secondaryAvatar";
import * as io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const MessageArea = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [rishabh, setRishabh] = useState("7206417339")

  const joinRoom = () => {
    if(rishabh !== "") {
      socket.emit("join_room", rishabh);
    }
  }

  
  // const handleSendMessage = () => {
  //   socket.emit("message", message);
  //   setMessage("");
  // };

  const handleSendMessage = () => {
    socket.emit("send_message", {message, rishabh});
    setMessage("");
  };
  useEffect(() => {
    socket.on("receive_message", (newMessage: string) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, [socket]);
  return (
    <>
      <div className="bg-neutral rounded-2xl mt-8 h-[calc(100%-84px)] flex flex-col justify-end">
        <div className="own-message flex items-center text-primary gap-3 px-4">
          <SecondaryAvatar />
          <div className="text-lg">Hey Alish</div>
        </div>
        {messages.map((msg, index) => (
          <div key={index} className="own-message flex items-center justify-end text-primary gap-3 px-4">
            <div className="text-lg">
              {msg}
            </div>
            <SecondaryAvatar />
          </div>
        ))}
        <div className="text-area-wrapper p-4 flex items-center gap-4">
          <div className="bg-white w-full rounded p-2 flex items-center justify-between">
            <input
              className="input-field w-full outline-none"
              placeholder="start typing..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="sharing-media flex items-center gap-2">
              <CameraAltOutlinedIcon className="text-xl text-accent" />
              <PictureAsPdfOutlinedIcon className="text-xl text-accent" />
              <AudiotrackOutlinedIcon className="text-xl text-accent" />
            </div>
          </div>
          <div className="send-button">
            <SendOutlinedIcon
              onClick={handleSendMessage}
              className="text-xl text-black cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageArea;
