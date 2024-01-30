import Image from "next/image";
import React from "react";
import DummyProfile from "../assets/images/dummyProfile.jpeg"

const SecondaryAvatar = () => {
  return (
    <>
      <div className="secondary-avatar w-10 h-10 rounded overflow-hidden">
        <Image src={DummyProfile} alt="Alish" />
      </div>
    </>
  );
};

export default SecondaryAvatar;
