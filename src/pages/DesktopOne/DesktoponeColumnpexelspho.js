import { Button, Text, Heading, Img } from "../../components";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function DesktoponeColumnpexelspho() {
    const navigate = useNavigate();
    return (
        <div className="mt-[80px] self-stretch">
            {/*
            <div className="flex items-center bg-amber-200_01 md:flex-col">
                <Img
                    src="images/img_pexels_photo_by.png"
                    alt="Pexelsphotoby"
                    className="h-[522px] w-[46%] object-contain md:w-full"
                />
                <div className="mb-3.5 flex-1 self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                    <div className="flex flex-col">
                        <Heading as="h2" className="w-[80%] leading-[68px] md:w-full">
                            Personalized Gift Suggestions
                        </Heading>
                        <Text
                            size="textxl"
                            as="p"
                            className="w-[82%] leading-[29px] md:w-full relative"
                        >
                            When you sign up, we'll ask a few questions about your child's interests and personality.
                            Our advanced A.I. analyzes this information to recommend gifts that your child will love,
                            ensuring every present is a perfect match.
                        </Text>
                        <div className="relative h-[298px] content-end md:h-auto">
                            <div className="mx-auto mb-[104px] flex flex-1 gap-[21px]">
                                <Button
                                    onClick={() => {
                                        navigate('/login');
                                    }}
                                    color="black_900" shape="round" className="min-w-[184px] font-quicksand">
                                    Add your child
                                </Button>
                                <Button
                                    onClick={() => {
                                        navigate('/assest');
                                    }}
                                    color="black_900" shape="round" className="min-w-[162px] font-quicksand">
                                    Try AI Assist
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/}

            <div className="flex items-center justify-between gap-5 bg-amber-200_01 md:flex-col mb-4">
                <Img
                    src="images/img_pexels_photo_by.png"
                    alt="Pexelsphotoby"
                    className="w-[500px] object-contain md:w-[80%] sm:w-[90%] md:pt-4"
                />
                <div className="flex w-[50%] flex-col items-start md:w-[80%] sm:w-[90%]">
                    <Heading as="h4" className="w-[86%] md:w-full size40">
                        Personalized Gift Suggestions
                    </Heading>
                    <Text as="p" className="w-[82%] md:w-full">
                        When you sign up, we'll ask a few questions about your child's interests and personality.
                        Our advanced A.I. analyzes this information to recommend gifts that your child will love,
                        ensuring every present is a perfect match.
                    </Text>
                    <div className="relative h-[80px] content-end md:h-auto md:pb-4 md:pt-4">
                        <div className="mx-auto mb-[0px] flex flex-1 gap-[21px]">
                            <Button
                                onClick={() => {
                                    navigate('/login');
                                }}
                                color="black_900" shape="round" className="min-w-[184px] font-quicksand">
                                Add your child
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate('/assest');
                                }}
                                color="black_900" shape="round" className="min-w-[162px] font-quicksand">
                                Try AI Assist
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between gap-5 bg-amber-200_01 md:flex-col mb-4 pl-20 md:pl-0">
                <div className="flex w-[50%] flex-col items-start md:w-[80%] sm:w-[90%]">
                    <Heading as="h4" className="w-[86%] md:w-full size40">
                        Easy Gift List Management
                    </Heading>
                    <Text as="p" className="w-[82%] md:w-full">
                        Create and manage gift lists for each of your children. Edit, add, or remove items as you see
                        fit, keeping the list updated and relevant to your child's evolving interests.
                    </Text>
                    <div className="relative h-[80px] content-end md:h-auto">
                        <div className="mx-auto mb-[0px] flex flex-1 gap-[21px]">
                            <Button
                                onClick={() => {
                                    navigate('/login');
                                }}
                                color="black_900" shape="round" className="mt-[38px] min-w-[184px] font-quicksand">
                                + New Gift List
                            </Button>
                        </div>
                    </div>
                </div>
                <Img
                    src="images/img_pexels_photo_by_522x770.png"
                    alt="Pexelsphotoby"
                    className="w-[500px] object-contain sm:w-[90%] md:w-[80%] md:pb-4"
                />
            </div>

            <div className="flex items-center justify-between gap-5 bg-amber-200_01 md:flex-col mb-4">
                <Img
                    src="images/img_pexels_photo_by_520x670.png"
                    alt="Pexelsphotoby"
                    className="w-[500px] object-contain md:w-[80%] sm:w-[90%] md:pt-4"
                />
                <div className="flex w-[50%] flex-col items-start md:w-[80%] sm:w-[90%]">
                    <Heading as="h4" className="w-[86%] md:w-full size40">
                        Share with Friends and Family
                    </Heading>
                    <Text as="p" className="w-[82%] md:w-full">
                        Once your list is complete, share it effortlessly with friends, family, and even your child's
                        classmates through a unique link. This makes it easy for others to see what gifts your child
                        would love.
                    </Text>
                    <Button
                        onClick={() => {
                            navigate('/login');
                        }}
                        color="black_900" shape="round" className="mt-[20px] md:mb-4 min-w-[126px] font-quicksand">
                        Try now
                    </Button>
                </div>
            </div>
        </div>
    );
}
