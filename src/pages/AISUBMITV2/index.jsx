import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Aiassistaftersubmitv2ColumnOne from "./SubmitRow3";
import Aiassistaftersubmitv2Row from "./SubmitV2Row";
import React from "react";

export default function AIASSISTAFTERSUBMITV2Page() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
            </Helmet>

            <div className="flex w-full flex-col items-center gap-10 bg-white-a700">
                <div className="container-xs mt-[38px] px-5">
                    <header className="mr-2.5 flex items-center justify-between gap-5 md:mr-0 md:flex-col">
                        <Img
                            src="images/img_header_logo.png"
                            alt="Header logo"
                            className="h-[86px] w-[306px] object-contain"
                        />
                        <div className="flex w-[64%] justify-between gap-5 md:w-full md:flex-col">
                            <div className="flex w-[54%] items-center justify-between gap-5 md:w-full sm:flex-col">
                                <ul className="flex flex-wrap gap-[46px]">
                                    <li>
                                        <a href="#">
                                            <Text
                                                as="p"
                                                className="font-quicksand text-[18px] font-normal text-black-900"
                                            >
                                                Home
                                            </Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text
                                                as="p"
                                                className="font-quicksand text-[18px] font-normal text-black-900"
                                            >
                                                Products
                                            </Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text
                                                as="p"
                                                className="font-quicksand text-[18px] font-normal text-black-900"
                                            >
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
                                            alt="AI Technology Spark Icon"
                                            className="my-0.5 h-[18px] w-[18px]"
                                        />
                                    }
                                    className="min-w-[162px] gap-3 rounded-[14px] px-8 font-quicksand sm:px-5"
                                >
                                    AI Assist
                                </Button>
                            </div>

                            <a
                                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    color="black_900"
                                    shape="round"
                                    className="min-w-[130px] rounded-[14px] px-8 font-quicksand sm:px-5"
                                >
                                    Sign Up
                                </Button>
                            </a>
                        </div>
                    </header>
                </div>

                <div className="flex flex-col gap-20 self-stretch md:gap-[60px] sm:gap-10">
                    <div className="flex flex-col gap-[62px] sm:gap-[31px]">
                        <Aiassistaftersubmitv2Row />
                        <Aiassistaftersubmitv2ColumnOne />
                    </div>
                    <footer className="flex items-center justify-center bg-amber-200 py-[38px] sm:py-5">
                        <div className="container-xs flex justify-center md:px-5">
                            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                                <Img
                                    src="images/img_footer_logo.png"
                                    alt="Footer logo"
                                    className="h-[86px] w-[306px] object-contain"
                                />
                                <div className="flex w-[22%] justify-between gap-5 md:w-full">
                                    <Text
                                        as="p"
                                        className="w-[40%] font-quicksand text-[18px] font-normal leading-[22px] text-black-900"
                                    >
                                        About
                                        <br />
                                        Privacy Policy
                                        <br />
                                        Terms of Use
                                    </Text>
                                    <Text
                                        as="p"
                                        className="w-[30%] font-quicksand text-[18px] font-normal leading-[22px] text-black-900"
                                    >
                                        Facebook
                                        <br />
                                        Instagram
                                        <br />
                                        TikTok
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
