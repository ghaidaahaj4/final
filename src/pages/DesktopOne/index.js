import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import DesktoponeColumnpexelspho from "./DesktoponeColumnpexelspho";
import DesktoponeRowFour from "./DesktoponeRowFour";
import DesktoponeRowfindthe from "./DesktoponeRowfindthe";
import React from "react";

export default function DesktopOnePage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex flex-col items-center">
                <div className="relative self-stretch">
                    <DesktoponeRowfindthe />
                    {/*<Text size="textxl" as="p" className="absolute bottom-[40%]  left-[2%] m-auto w-[52%]">
                        Discover the joy of perfect gifting with our expertly curated selection of children's gifts. Whether
                        it's for a birthday, holiday, or just because, we ensure every present is a delightful surprise,
                        tailored to your child's unique interests. Make every occasion memorable with gifts they'll
                        cherish.
                    </Text>*/}
                </div>
                <div className="container-xs relative z-[2] flex flex-col items-center md:px-5 mt-8">
                    <Heading  className="md:w-full md:text-center m-auto size40" as="h3">
                        How does it work?
                    </Heading>
                    <div className="mt-4 self-stretch md:self-center rounded-[42px] bg-amber-200_01 p-5">
                        <div className="mb-7 flex md:flex-col md:gap-20">
                            <UserProfile userName={1} img={"images/How_works_1.svg"} userDescription={"Enter the child's information, including age, gender, and preferences."} className="w-[33.33%] md:w-[100%] md:w-full" />
                            <UserProfile userName={2} img={"images/How_works_2.svg"} userDescription={"Browse tens of gift suggestions from our AI-assisted curation list."}  className="w-[33.33%] md:w-[100%] md:w-full" />
                            <UserProfile userName={3} img={"images/How_works_3.svg"} userDescription={"Click the link to purchase the gift from one of our trusted partner websites."}  className="w-[33.33%] md:w-[100%] md:w-full" />
                        </div>
                    </div>
                    <div className="mt-9 flex flex-col items-center justify-center gap-[62px] self-stretch md:mx-0 sm:gap-[31px] w-[100%]">
                        <Heading className="md:w-full md:text-center m-auto size40" as="h3">
                            Our Partners
                        </Heading>
                        <div className="flex md:items-center md:flex-col w-[100%]">

                                <Img src="images/img_image_4.png" alt="Imagefour" className="h-[70px] w-[33%] object-contain sm:w-full md:mb-8" />

                            <Img
                                src="images/img_image_2.png"
                                alt="Imagetwo"
                                className="h-[70px] w-[33%] object-contain sm:w-full md:mb-8"
                            />
                            <Img
                                src="images/img_image_3.png"
                                alt="Imagethree"
                                className="ml-[106px] h-[70px] w-[33%] object-contain md:ml-0 sm:w-full md:mb-8"
                            />
                        </div>
                    </div>
                    <DesktoponeColumnpexelspho />
                 {/*
                    <DesktoponeRowFour />
                    */}
                </div>
                <Footer className="mt-[30px] self-stretch" />
            </div>
        </>
    );
}
