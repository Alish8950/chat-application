import React from "react";
import SecondaryAvatar from "./secondaryAvatar";

const OppositeProfile = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <SecondaryAvatar/>
        <div>
        <div className="text-primary text-lg">Rishabh Dora</div>
        <div className="status text-primary text-xs">online</div>

        </div>
      </div>
    </>
  );
};

export default OppositeProfile;
