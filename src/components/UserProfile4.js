import { Img, Text } from "../components";
import React from "react";

export default function UserProfile4({
  userGender = "Male",
  userImage = "images/img_image_9.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-start px-4 py-5 border-black-900 border border-solid bg-white-a700 shadow-xs cursor-pointer rounded-[10px]`}
    >
      <div className="flex flex-1 items-center justify-center gap-3.5 self-center">
        <div className="flex w-[36%] flex-col items-center rounded-[12px] border border-solid border-black-900 bg-black-900 p-1">
          <div className="h-[12px] w-[12px] rounded-md bg-white-a700" />
        </div>
        <Text as="p" className="text-[18px] font-normal text-black-900">
          {userGender}
        </Text>
      </div>
      <Img src={userImage} alt={userGender} className="h-[20px] w-[20px] object-cover" />
    </div>
  );
}