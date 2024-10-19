import { Button, ChipView, Heading, Text, Img, Input } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import UserProfile4 from "../../components/UserProfile4";
import React from "react";

export default function AiAssistPageOneRowThree() {
    const [chipOptions, setChipOptions] = React.useState([
        { value: 1, label: 'Painting/Drawing' },
        { value: 2, label: 'Sports' },
        { value: 3, label: 'Video Games' },
        { value: 4, label: 'Solving Puzzles' },
        { value: 5, label: 'Playing' },
        { value: 6, label: 'Exploring Nature' },
        { value: 7, label: 'Building (Legos, Blocks)' },
        { value: 8, label: 'Singing/Dancing' },
        { value: 9, label: 'Cooking' },
        { value: 10, label: 'Reading Books' },
        { value: 11, label: 'Other' }
    ]);

    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

    return (
        <div className="relative mt-[18px] h-[886px] bg-[url(/public/images/img_group_15.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="mt-2 h-[878px] bg-[url(/public/images/img_group_16.png)] bg-cover bg-no-repeat md:h-auto">
                <div className="flex justify-center bg-black-900_99 py-[54px] md:py-5">
                    <div className="container-xs mb-[18px] flex justify-center px-[18px] md:px-5">
                        <div className="w-full rounded-[46px] bg-white-a700_7f px-11 py-12 shadow-2xl md:p-5">
                            <div className="flex flex-col items-center gap-4">
                                <Heading
                                    size="heading3xl"
                                    as="h1"
                                    className="font-poppins text-[30px] font-semibold text-black-900 md:text-[28px] sm:text-[26px]"
                                >
                                    Help us find the perfect gift!
                                </Heading>
                                <div className="flex items-center self-stretch md:flex-col">
                                    <div className="mt-[26px] w-[28%] md:w-full">
                                        <div className="flex gap-[25px]">
                                            <Button size="5xl" className="w-[66px] rounded-[32px] px-2 shadow-lg">
                                                <Img src="images/img_group_163.svg" />
                                            </Button>
                                            <Heading
                                                size="text3xl"
                                                as="h2"
                                                className="w-[42%] font-inter text-[27px] font-medium leading-8 text-black-900 md:text-[25px] sm:text-[23px]"
                                            >
                                                Hobbies & <br />
                                                Interests
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
                                                    as="h3"
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
                                                    as="h4"
                                                    className="w-[70%] font-inter text-[27px] font-medium leading-8 text-black-900 md:text-[25px] sm:text-[23px]"
                                                >
                                                    Technology & Gadgets
                                                </Heading>
                                            </div>
                                        </div>
                                    </div>
                                    <Img
                                        src="images/img_group_178.svg"
                                        alt="Image"
                                        className="ml-[18px] h-[566px] w-[12px] md:ml-0 md:w-full"
                                    />
                                    <div className="mt-[18px] flex flex-1 flex-col items-start self-start md:self-stretch sm:self-auto">
                                        <div className="ml-8 flex self-stretch md:ml-0 md:flex-col">
                                            <div className="flex flex-1 flex-col items-start gap-1 md:self-stretch">
                                                <Heading as="h5" className="font-poppins text-[18px] font-semibold text-black-900">
                                                    How old is the Child?
                                                </Heading>
                                                <Input
                                                    type="number"
                                                    name="groupsixtyseven"
                                                    placeholder="Type the age in numbers.."
                                                    className="w-[76%] rounded-[10px] border border-solid border-black-900 px-7 font-poppins sm:px-5"
                                                />
                                            </div>
                                            <div className="flex w-[38%] flex-col items-start gap-2 md:w-full">
                                                <Heading as="h6" className="text-[18px] font-bold text-black-900">
                                                    Gender
                                                </Heading>
                                                <div className="flex self-stretch md:flex-row">
                                                    <UserProfile4 className="w-[48%] hover:border hover:border-solid hover:border-black-900 hover:shadow-xs" />
                                                    <Img
                                                        src="images/img_image_9.png"
                                                        alt="Image"
                                                        className="mb-[26px] mt-5 h-[20px] w-[6%] cursor-pointer object-contain hover:border hover:border-solid hover:border-black-900 hover:shadow-xs"
                                                    />
                                                    <UserProfile4
                                                        userGender="Female"
                                                        userImage="images/img_image_10.png"
                                                        className="w-[52%] hover:border hover:border-solid hover:border-black-900 hover:shadow-xs"
                                                    />
                                                    <Img
                                                        src="images/img_image_10.png"
                                                        alt="Image"
                                                        className="mb-[26px] mr-2.5 mt-5 h-[20px] w-[6%] cursor-pointer object-contain hover:border hover:border-solid hover:border-black-900 hover:shadow-xs"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <Text
                                            size="textS"
                                            as="p"
                                            className="ml-8 mt-7 font-poppins text-[16px] font-normal text-gray-600_01 md:ml-0"
                                        >
                                            Step 1/2
                                        </Text>
                                        <div className="ml-[30px] flex flex-col items-start gap-2 self-stretch md:ml-0">
                                            <Heading size="headingxl" className="font-poppins text-[27px] font-semibold text-black-900 md:text-[25px] sm:text-[23px]">
                                                What are some hobbies or activities they really enjoy?
                                            </Heading>
                                            <div className="h-px w-full self-stretch bg-black-900_33" />
                                        </div>
                                        <ChipView
                                            options={chipOptions}
                                            setOptions={setChipOptions}
                                            values={selectedChipOptions}
                                            setValues={setSelectedChipOptions}
                                            className="ml-8 mt-5 flex flex-wrap gap-x-10 gap-y-5 self-stretch md:ml-0"
                                        >
                                            {(option) => (
                                                <React.Fragment key={option.value}>
                                                    {option.isSelected ? (
                                                        <div
                                                            onClick={option.toggle}
                                                            className="flex h-[40px] min-w-[190px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-black-900_99 bg-gray-200 px-4 text-center font-poppins text-[16px] text-black-900"
                                                        >
                                                            <span>{option.label}</span>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            onClick={option.toggle}
                                                            className="flex h-[40px] min-w-[190px] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-gray-200 px-4 text-center font-poppins text-[16px] text-black-900"
                                                        >
                                                            <span>{option.label}</span>
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            )}
                                        </ChipView>
                                        <div className="mt-[52px] flex justify-end gap-[141px] self-stretch">
                                            <Button
                                                color="gray_400"
                                                size="6xl"
                                                shape="round"
                                                className="min-w-[244px] rounded-[14px] px-[34px] font-quicksand font-bold sm:px-5"
                                            >
                                                Skip
                                            </Button>
                                            <Button
                                                size="6xl"
                                                shape="round"
                                                className="min-w-[194px] rounded-[14px] px-[34px] font-quicksand font-bold sm:px-5"
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}