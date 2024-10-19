import { Button, Input, Heading, Text, Img } from "../../components";
import UserProfile from "../../components/UserProfile";
import React from "react";

export default function AiassistpagefourRowFour() {
  return (
    <div className="mt-2 h-[878px] bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:h-auto">
      <div className="flex justify-center bg-black-900_99 py-[46px] md:py-5">
        <div className="container-xs mb-[34px] flex justify-center px-4 md:px-5">
          <div className="flex w-full items-start gap-7 rounded-[46px] bg-white-a700_7f px-11 py-12 shadow-2xl md:flex-col md:p-5">
            <div className="mt-[62px] flex w-[32%] items-center justify-center gap-[18px] self-end md:w-full md:self-auto sm:flex-col">
              <div className="mt-[26px] flex-1 sm:self-stretch">
                <div className="flex gap-[125px]">
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
                  <UserProfile backgroundImage="images/img_group_163.svg" favoriteText="Favorite Characters & Series" />
                  <UserProfile
                    backgroundImage="images/img_group_163.svg"
                    favoriteText="Sports & Outdoor Activities"
                    className="mr-[30px] md:mr-0"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <div className="ml-8 h-[58px] w-px bg-black-900_33 md:ml-0" />
                  <a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
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
                  </a>
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
                src="images/img_group_178_white_a700_566x12.svg"
                alt="Image"
                className="h-[566px] w-[4%] object-contain sm:w-full"
              />
              <div className="flex flex-col items-start md:self-stretch">
                <Heading
                  size="heading3xl"
                  as="h4"
                  className="font-poppins text-[30px] font-semibold text-black-900 md:text-[28px] sm:text-[26px]"
                >
                  Help us find the perfect gift!
                </Heading>
                <Text size="text5" as="p" className="mt-[30px] font-poppins text-[16px] font-normal text-gray-600_01">
                  Step 1/2
                </Text>
                <Heading
                  size="headingxl"
                  as="h5"
                  className="font-poppins text-[27px] font-semibold text-black-900 md:text-[25px] sm:text-[23px]"
                >
                  Are they involved in any sports regularly?
                </Heading>
                <div className="mt-2 h-px self-stretch bg-black-900_33" />
                <div className="mt-5 self-stretch">
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between gap-5 md:flex-col">
                      <Button
                        color="gray_200"
                        size="sm"
                        className="min-w-[120px] rounded-[20px] px-[22px] font-poppins sm:px-5"
                      >
                        Soccer
                      </Button>
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext"
                        className="w-[28%] rounded-[20px] px-3 md:w-full"
                      />
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_one"
                        className="w-[18%] rounded-[20px] px-3 md:w-full"
                      />
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_two"
                        className="w-[20%] rounded-[20px] px-3 md:w-full"
                      />
                    </div>
                    <div className="flex gap-[30px]">
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_three"
                        className="w-[14%] rounded-[20px] px-3"
                      />
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_four"
                        className="w-[26%] rounded-[20px] px-3"
                      />
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_five"
                        className="flex-grow rounded-[20px] px-3"
                      />
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_six"
                        className="w-[26%] rounded-[20px] px-3"
                      />
                    </div>
                    <div className="flex sm:flex-col">
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_seven"
                        className="w-[16%] rounded-[20px] px-3 sm:w-full"
                      />
                      <Input
                        color="gray_200"
                        size="xs"
                        shape="round"
                        name="edittext_eight"
                        className="ml-[30px] w-[22%] rounded-[20px] px-3 sm:ml-0 sm:w-full"
                      />
                      <Button
                        color="gray_200"
                        size="sm"
                        className="ml-[30px] min-w-[96px] rounded-[20px] px-4 font-poppins sm:ml-0"
                      >
                        Other
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-[52px] flex justify-end gap-[41px] self-stretch">
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