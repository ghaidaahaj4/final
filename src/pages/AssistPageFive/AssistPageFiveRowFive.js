import { Button, Input, Text, Heading, Img } from "../../components";
import UserProfileIconButton from "../../components/UserProfileIconButton";
import React from "react";

export default function AiassistpagefiveRow() {
    return (
        <div className="relative mt-[18px] h-[886px] bg-[url('/public/images/img_group_15.png')] bg-cover bg-no-repeat md:h-auto">
            <div className="mt-2 h-[878px] bg-[url('/public/images/img_group_16.png')] bg-cover bg-no-repeat md:h-auto">
                <div className="flex justify-center bg-black-900_99 py-[46px] md:py-5">
                    <div className="container-xs mb-[34px] flex justify-center px-4 md:px-5">
                        <div className="flex w-full items-start gap-7 rounded-[46px] bg-white-a700_7f px-11 py-12 shadow-2xl md:flex-col md:p-5">
                            <div className="mt-[62px] flex w-[32%] items-center justify-center gap-[18px] self-end md:w-full md:self-auto sm:flex-col">
                                <UserProfileIconButton className="mr-[118px] md:mr-0" />
                                <div className="ml-8 mr-[316px] h-[58px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[58px]" />
                                <UserProfileIconButton className="mr-[30px] md:mr-0" />
                                <div className="ml-8 mr-[316px] h-[58px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[58px]" />
                                <UserProfileIconButton hobbiesText="Creative Arts" className="mr-[88px] md:mr-0" />
                                <div className="ml-8 mr-[316px] h-[58px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[58px]" />
                                <UserProfileIconButton className="mr-[30px] md:mr-0" />
                            </div>
                            <Img src="images/img_group_178_amber_200.svg" alt="Image" className="h-[566px] w-[4%] object-contain sm:w-full" />
                        </div>

                        <div className="flex flex-1 flex-col items-start gap-[30px] md:self-stretch">
                            <Heading size="heading3xl" as="h1" className="font-poppins text-[30px] font-semibold text-black-900 md:text-[28px] sm:text-[26px]">
                                Help us find the perfect gift!
                            </Heading>
                            <div className="flex flex-col items-start self-stretch">
                                <Text size="textS" as="p" className="font-poppins text-[16px] font-normal text-gray-600_01">
                                    Step 1 / 2
                                </Text>
                                <Heading size="headingxl" as="h2" className="font-poppins text-[27px] font-semibold text-black-900 md:text-[25px] sm:text-[23px]">
                                    Do they enjoy drawing, painting, or doing craft projects?
                                </Heading>
                                <div className="mt-2 h-px self-stretch bg-black-900_33" />
                                <div className="mt-5 flex flex-col gap-5 self-stretch">
                                    <div className="flex justify-between gap-5 md:flex-col">
                                        <div className="flex rounded-[20px] bg-gray-200 p-2">
                                            <Text size="textS" as="p" className="font-poppins text-[16px] font-normal text-black-900">
                                                • Painting
                                            </Text>
                                        </div>
                                        <Input color="gray_200" size="xs" shape="round" name="edittext" className="w-[28%] rounded-[20px] px-3 md:w-full" />
                                        <Input color="gray_200" size="xs" shape="round" name="edittext_one" className="w-[18%] rounded-[20px] px-3 md:w-full" />
                                        <Input color="gray_200" size="xs" shape="round" name="edittext_two" className="w-[20%] rounded-[20px] px-3 md:w-full" />
                                    </div>
                                    <div className="flex gap-[30px] md:flex-col">
                                        <Input color="gray_200" size="xs" shape="round" name="edittext_three" className="w-[14%] rounded-[20px] px-3 md:w-full" />
                                        <Input color="gray_200" size="xs" shape="round" name="edittext_four" className="w-[26%] rounded-[20px] px-3 md:w-full" />
                                        <Input color="gray_200" size="xs" shape="round" name="edittext_five" className="flex-grow rounded-[20px] px-3" />
                                        <Input color="gray_200" size="xs" shape="round" name="edittext_six" className="w-[26%] rounded-[20px] px-3 md:w-full" />
                                    </div>
                                    <div className="flex sm:flex-col">
                                        <Input color="gray_200" size="xs" shape="round" name="edittext_seven" className="w-[16%] rounded-[20px] px-3 sm:w-full" />
                                        <div className="ml-[30px] h-[40px] w-[22%] rounded-[20px] bg-gray-200 sm:ml-0" />
                                        <Button color="gray_200" size="sm" className="ml-[30px] min-w-[96px] rounded-[20px] px-4 font-poppins sm:ml-0">
                                            & other
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[52px] flex justify-end gap-[41px] self-stretch">
                                <Button color="gray_400" size="6xl" shape="round" className="min-w-[244px] rounded-[14px] px-[34px] font-quicksand font-bold sm:px-5">
                                    Skip
                                </Button>
                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                    <Button size="6xl" shape="round" className="min-w-[194px] rounded-[14px] px-[34px] font-quicksand font-bold sm:px-5">
                                        Next
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
