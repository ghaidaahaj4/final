import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import AiassistpagetwoRowThree from "./aiassistpagetworowthree";
import React from "react";

export default function AIASSISTPageTwoPage() {
    return (
        <>
            {/* <Helmet>
                <title>GiftFlow Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet> */}
            <div className="w-full bg-white-a700">
                <div>
                    {/* <header className="relative z-[2] flex items-end justify-center bg-white-a700 py-[26px] sm:py-5">
                        <div className="container-xs mt-1 flex items-start justify-between gap-5 md:flex-col md:px-5">
                            <div className="flex flex-col items-start self-center">
                                <Img
                                    src="images/img_giftflowlogoclr.png"
                                    alt="Giftflowlogoclr"
                                    className="ml-[106px] h-[80px] w-[38%] object-contain md:ml-0"
                                />
                                <Heading
                                    size="heading6xl"
                                    as="h1"
                                    className="relative mt-[58px] font-casaygon text-[46px] font-bold text-black-900 md:text-[42px] sm:text-[36px]"
                                >
                                    Gift Flow
                                </Heading>
                            </div>
                            <div className="mr-2.5 mt-[18px] flex w-[64%] justify-between gap-5 md:mr-0 md:w-full md:flex-col">
                                <div className="flex w-[54%] items-center justify-between gap-5 md:w-full sm:flex-col">
                                    <ul className="flex flex-wrap gap-[46px]">
                                        <li>
                                            <a href="#">
                                                <Text as="p" className="font-quicksand text-[18px] font-normal text-black-900">
                                                    Home
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p" className="font-quicksand text-[18px] font-normal text-black-900">
                                                    Products
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p" className="font-quicksand text-[18px] font-normal text-black-900">
                                                    About
                                                </Text>
                                            </a>
                                        </li>
                                    </ul>
                                    <Button
                                        shape="round"
                                        rightIcon={
                                            <Img
                                                src="images/img_streamlineaitechnologysparksolid.svg"
                                                alt="Streamline:ai-technology-spark-solid"
                                                className="my-0.5 h-[18px] w-[18px]"
                                            />
                                        }
                                        className="min-w-[162px] gap-3 rounded-[14px] px-8 font-quicksand sm:px-5"
                                    >
                                        AI Assist
                                    </Button>
                                </div>
                                <a href="https://www.youtube.com/embed/bv8FxkOsz7" target="_blank">
                                    <Button
                                        color="black_900"
                                        shape="round"
                                        className="min-w-[130px] rounded-[14px] px-8 font-quicksand sm:px-5"
                                    >
                                        Sign Up
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </header> */}
                    <AiassistpagetwoRowThree />
                </div>
            </div>
        </>
    );
}
     {/* <div className="flex justify-center bg-black-900_99 py-[54px] md:py-5">
          <div className="container-xs mb-[18px] flex justify-center px-[18px] md:px-5">
            <div className="flex w-full flex-col items-cen  ter gap-4 rounded-[46px] bg-white-a700_7f px-11 py-12 shadow-2xl md:p-5">
              <Heading
                size="heading3xl"
                as="h1"
                className="font-poppins text-[30px] font-semibold text-black-900 md:text-[28px] sm:text-[26px]"
              >
                Help us find the perfect gift!
              </Heading>
              <div className="self-stretch">
                <div className="flex items-start gap-[30px] md:flex-col">
                  <div className="flex w-[32%] flex-col items-end self-center md:w-full">
                    <div className="relative z-[1] mr-1.5 h-[54px] w-px bg-black-900_33 md:mr-0" />
                    <div className="relative mt-[26px] flex flex-col self-stretch">
                      <UserProfileRow />
                      <div className="ml-[374px] mr-1.5 h-[114px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[114px]" />
                      <div className="ml-8 mr-[346px] h-[58px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[58px]" />
                      <UserProfileRow className="mr-[30px] md:mr-0" />
                      <div className="ml-[368px] h-[12px] w-[12px] rounded-md border-2 border-solid border-blue_gray-100 bg-white-a700 md:ml-0" />
                      <div className="ml-[374px] mr-1.5 h-[114px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[114px]" />
                      <div className="ml-8 mr-[346px] h-[58px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[58px]" />
                      <UserProfileRow
                        hobbiesText="Sports & Outdoor Activities"
                        className="gap-[50px]"
                      />
                      <div className="ml-[374px] mr-1.5 h-[114px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[114px]" />
                      <div className="ml-8 mr-[346px] h-[58px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[58px]" />
                      <UserProfileRow hobbiesText="Creative Arts" />
                      <div className="ml-[374px] mr-1.5 h-[114px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[114px]" />
                      <div className="ml-8 mr-[346px] h-[58px] w-px flex-1 bg-black-900_33 md:mx-0 md:h-px md:w-[58px]" />
                      <UserProfileRow className="mr-[62px] md:mr-0" />
                      <div className="mb-[26px] ml-[368px] h-[12px] w-[12px] rounded-md border-2 border-solid border-blue_gray-100 bg-white-a700 md:ml-0" />
                    </div>
                  </div>
                  <div className="mt-3.5 flex flex-1 flex-col gap-[52px] md:self-stretch sm:gap-[26px]">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col items-start">
                        <Text
                          size="textS"
                          as="p"
                          className="font-poppins text-[16px] font-normal text-gray-600_01"
                        >
                          Step 1/2
                        </Text>
                        <Heading
                          size="headingxl"
                          as="h2"
                          className="font-poppins text-[27px] font-semibold text-black-900 md:text-[25px] sm:text-[23px]"
                        >
                          What are some hobbies or activities they really enjoy?
                        </Heading>
                        <div className="mt-2 h-px w-full self-stretch bg-black-900_33" />
                      </div>
                      <ChipView
                        options={chipOptions}
                        setOptions={setChipOptions}
                        values={selectedChipOptions}
                        setValues={setSelectedChipOptions}
                        className="flex flex-wrap gap-x-10 gap-y-5"
                      >
                        {(option) => (
                          <React.Fragment key={option.value}>
                            {option.isSelected ? (
                              <div
                                onClick={option.toggle}
                                className="flex h-[40px] min-w-[190px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[20px] border border-solid border-black-900"
                              >
                                <span>{option.label}</span>
                              </div>
                            ) : (
                              <div
                                onClick={option.toggle}
                                className="flex h-[40px] min-w-[190px] cursor-pointer flex-row items-center justify-center rounded-[20px] bg-gray-200 px-4"
                              >
                                <span>{option.label}</span>
                              </div>
                            )}
                          </React.Fragment>
                        )}
                      </ChipView>
                    </div>
                    <div className="flex justify-end gap-[41px]">
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
        </div> */}