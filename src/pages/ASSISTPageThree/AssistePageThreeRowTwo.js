import { Button, TextArea, Heading, Text, Img } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React from "react";

export default function AiassistpagethreeRowTwo() {
  return (
    <div className="mt-2 h-[878px] bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:h-auto">
      <div className="flex justify-center bg-black-900_99 py-[46px] md:py-5">
        <div className="container-xs mb-[34px] flex justify-center px-[18px] md:px-5">
          <div className="flex w-full items-start gap-7 rounded-[46px] bg-white-a700_7f px-11 py-12 shadow-2xl md:flex-col md:p-5">
            <div className="mt-[62px] flex w-[32%] items-center justify-center gap-[18px] self-end md:w-full md:self-auto sm:flex-col">
              <div className="mt-[26px] flex-1 sm:self-stretch">
                <div className="flex gap-[25px]">
                  <Button color="white_A700" size="5xl" className="w-[66px] rounded-[32px] px-2 shadow-lg">
                    <Img src="images/img_group_163.svg" />
                  </Button>
                  <Heading
                    size="text3xl"
                    as="h1"
                    className="w-[42%] font-inter text-[27px] font-medium leading-8 text-black-900 md:text-[25px] sm:text-[23px]"
                  >
                    Hobbies & Interests
                  </Heading>
                </div>
                <div className="flex flex-col">
                  <UserProfile1
                    backgroundImage="images/img_group_163.svg"
                    favoriteText="Favorite Characters & Series"
                  />
                  <UserProfile1
                    backgroundImage="images/img_group_163.svg"
                    favoriteText="Sports & Outdoor Activities"
                    className="mr-[30px] md:mr-0"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="ml-8 h-[58px] w-px bg-black-900_33 md:ml-0" />
                  <div className="flex items-center gap-[25px] self-stretch">
                    <Button color="white_A700" size="5xl" className="w-[66px] rounded-[32px] px-2 shadow-3xl">
                      <Img src="images/img_group_163.svg" />
                    </Button>
                    <Heading
                      size="text3xl"
                      as="h2"
                      className="font-inter text-[27px] font-medium text-black-900 md:text-[25px] sm:text-[23px]"
                    >
                      Creative Arts
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="ml-8 h-[58px] w-px bg-black-900_33 md:ml-0" />
                  <div className="flex justify-center gap-[25px] self-stretch">
                    <div className="relative h-[66px] w-[20%] content-center md:h-auto">
                      <Img
                        src="images/img_ellipse_9.svg"
                        alt="Circleimage"
                        className="mx-auto h-[66px] w-[66px] rounded-[50%]"
                      />
                      <Img
                        src="images/img_group_163.svg"
                        alt="Image"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[50px] w-[52%] object-contain"
                      />
                    </div>
                    <Heading
                      size="text3xl"
                      as="h3"
                      className="w-[70%] font-inter text-[27px] font-medium leading-8 text-black-900 md:text-[25px] sm:text-[23px]"
                    >
                      Technology & Gadgets
                    </Heading>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_group_178_white_a700.svg"
                alt="Image"
                className="h-[566px] w-[4%] object-contain sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col items-start gap-[30px] md:self-stretch">
              <Heading
                size="heading3xl"
                as="h4"
                className="font-poppins text-[30px] font-semibold text-black-900 md:text-[28px] sm:text-[26px]"
              >
                Help us find the perfect gift!
              </Heading>
              <div className="flex flex-col items-start self-stretch">
                <Text size="text5" as="p" className="font-poppins text-[16px] font-normal text-gray-600_01">
                  Step 1/2
                </Text>
                <Heading
                  size="headingxl"
                  as="h5"
                  className="font-poppins text-[27px] font-semibold text-black-900 md:text-[25px] sm:text-[23px]"
                >
                  Do they have a favorite book or book series?
                </Heading>
                <div className="mt-2 h-px self-stretch bg-black-900_33" />
                <TextArea
                  shape="round"
                  name="group201"
                  placeholder="For example: Harry Potter, Percy Jackson, or any other beloved series."
                  className="mt-6 self-stretch rounded-[18px] border !border-black-900 px-3 font-poppins leading-[43px] text-gray-600"
                />
                <div className="mt-10 flex justify-end gap-[41px] self-stretch">
                  <Button
                    color="gray_400"
                    size="6xl"
                    shape="round"
                    className="min-w-[244px] rounded-[14px] px-[34px] font-quicksand font-bold sm:px-5"
                  >
                    Skip
                  </Button>
                  <a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
                    <Button
                      size="6xl"
                      shape="round"
                      className="min-w-[194px] rounded-[14px] px-[34px] font-quicksand font-bold sm:px-5"
                    >
                      Next
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}