import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import AiassistpagefiveRowSix from "./AssistPageFiveRowFive";
import React from "react";

export default function AIASSISTPageFivePage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-a700">
                <header className="relative z-[1] flex items-end justify-center bg-white-a700 py-[26px] sm:py-5">
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
                                className="relative mt-[-58px] font-casaygon text-[46px] font-bold text-black-900 md:text-[42px] sm:text-[36px]"
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
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
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
                </header>
                <AiassistpagefiveRowSix />
            </div>
        </>
    );
}
