import React from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SecondaryAvatar from "./secondaryAvatar";

const MessageArea = () => {
  return (
    <>
      <div className="bg-neutral rounded-2xl mt-8 h-[calc(100%-84px)] flex flex-col justify-end">
        <div className="own-message flex items-center text-primary gap-3 px-4">
            <SecondaryAvatar/>
            <div className="text-lg">Hey Alish</div>
        </div>
        <div className="own-message flex items-center justify-end text-primary gap-3 px-4">
            <div className="text-lg">Hey Rishabh</div>
            <SecondaryAvatar/>
        </div>
        <div className="text-area-wrapper p-4 flex items-center gap-4">
          <div className="bg-white w-full rounded p-2 flex items-center justify-between">
            <input
              className="input-field w-full outline-none"
              placeholder="start typing..."
            />
            <div className="sharing-media flex items-center gap-2">
              <CameraAltOutlinedIcon className="text-xl text-accent" />
              <PictureAsPdfOutlinedIcon className="text-xl text-accent" />
              <AudiotrackOutlinedIcon className="text-xl text-accent" />
            </div>
          </div>
          <div className="send-button">
            <SendOutlinedIcon className="text-xl text-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageArea;
