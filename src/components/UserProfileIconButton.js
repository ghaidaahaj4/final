import { Heading, Button, Img } from "../components";
import React from "react";

export default function UserProfileIconButton({
  hobbiesText = (
    <>
      Hobbies & <br />
      Interests
    </>
  ),
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center gap-6 flex-1`}>
      <Button color="white_A700" size="5xl" className="w-[66px] rounded-[32px] px-2 shadow-lg">
        <Img src="images/img_group_163.svg" />
      </Button>
      <Heading size="text3xl" as="p" className="font-inter text-[27px] font-medium leading-8 text-black-900">
        {hobbiesText}
      </Heading>
    </div>
  );
}