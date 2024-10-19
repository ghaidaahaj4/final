import { Img, Button, Heading } from "../../components";
import React from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";

export default function AiassistpageRowTwo() {
    return (
        <div>
              <Helmet>
                <title>GiftFlow Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex justify-center bg-black-900_99 py-60 md:py-5">
                <div className="container-xs mb-[22px] flex justify-center px-14 md:px-5">
                    <div className="flex w-[92%] items-start justify-center md:w-full md:flex-col">
                        <div className="flex flex-1 flex-col items-center self-center md:self-stretch">
                            <Heading
                                size="heading10xl"
                                as="h1"
                                className="self-stretch text-center font-abhayalibreextrabold text-[85px] font-extrabold leading-[86px] text-white-a700 md:text-[48px]"
                            >
                                Find the Perfect Gift with Intelligent Recommendations
                            </Heading>
                            <Heading
                                size="headingmd"
                                as="h2"
                                className="mt-4 w-[160%] text-center font-abhayalibreextrabold text-[22px] font-extrabold leading-[29px] text-white-a700 md:w-full"
                            >
                                Get personalized gift suggestions with our intelligent recommendations. Simply answer a few questions, and let our AI-powered tool find the perfect gift tailored to your child's interests.
                            </Heading>
                            <Button
                                size="2xl"
                                shape="round"
                                className="mt-10 min-w-[210px] rounded-[14px] px-[34px] font-abhayalibreextrabold font-extrabold sm:px-5"
                            >
                                Get Started
                            </Button>
                        </div>
                        <Img
                            src="images/img_profile.svg"
                            alt="Profile"
                            className="relative ml-[-22px] mt-[104px] h-[44px] w-[44px] md:ml-0 md:w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}