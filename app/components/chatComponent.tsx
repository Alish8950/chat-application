import React from "react";
import SecondaryAvatar from "./secondaryAvatar";

interface ChildComponentProps {
    active: boolean;
  }

const ChatComponent: React.FC<ChildComponentProps> = ({active}) => {
  return (
    <>
      <div className={`flex items-center gap-3 w-fit rounded-lg py-3 px-5 ${active ? 'bg-accent' : 'bg-secondary'}`}>
        <SecondaryAvatar/>
        <div className="latest-mesage-wrapper">
          <div className="flex justify-between items-center">
            <div className="name text-sm text-primary">Rishabh Dora</div>
            <div className="time text-xs text-primary">12:00</div>
          </div>
          <div className="latest-mesage text-xs w-[190px] truncate text-primary">Hello bro Hello bro Hello bro Hello</div>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
