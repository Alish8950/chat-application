import Image from "next/image";
import React from "react";
import DummyProfile from "../assets/images/dummyProfile.jpeg"

const PrimaryAvatar = () => {
  return (
    <>
      <div className="primary-avatar w-12 h-12 rounded-full overflow-hidden">
        <Image src={DummyProfile} alt="Alish" />
      </div>
    </>
  );
};

export default PrimaryAvatar;
