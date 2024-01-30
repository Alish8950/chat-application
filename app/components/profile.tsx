import React from "react";
import Image from "next/image";
import PrimaryAvatar from "./primaryAvatar";

const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <PrimaryAvatar />
        <div className="name text-primary text-lg">Alish Allawadhi</div>
      </div>
    </>
  );
};

export default Profile;
