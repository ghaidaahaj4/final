import { Heading, Button, Img } from "../components";
import React from "react";

export default function UserProfileRow({
  hobbiesText = (
    <>
      Hobbies & <br />
      Interests
    </>
  ),
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex flex-1 gap-[25px]">
        <Button size="5xl" className="w-[66px] rounded-[32px] px-2 shadow-lg">
          <Img src="images/img_group_163.svg" />
        </Button>
        <Heading size="text3xl" as="p" className="w-[40%] font-inter text-[27px] font-medium leading-8 text-black-900">
          {hobbiesText}
        </Heading>
      </div>
      <div className="h-[12px] w-[12px] rounded-md border-2 border-solid border-blue_gray-100 bg-amber-200" />
    </div>
  );
}