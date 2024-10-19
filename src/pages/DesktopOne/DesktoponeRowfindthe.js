import {Img, Button, Heading, Text} from "../../components";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function DesktoponeRowfindthe() {
    const navigate = useNavigate();
    return (

        <div className="left-0 right-0 top-0 m-auto flex flex-1 items-center justify-between bg-amber-200_01 md:relative md:flex-col">
            <div className="mb-[30px] ml-[30px] flex w-[54%] flex-col items-start gap-[30px] md:w-[80%] md:gap-[30px] sm:w-[90%] sm:gap-[30px]">
                <Heading as="h4" className="w-[92%] md:w-full left-[2%] size40">
                    Find the Perfect Gift for Every Child, Every Time
                </Heading>
                <Text as="p" className=" left-[2%]">
                    Discover the joy of perfect gifting with our expertly curated selection of children's gifts. Whether
                    it's for a birthday, holiday, or just because, we ensure every present is a delightful surprise,
                    tailored to your child's unique interests. Make every occasion memorable with gifts they'll
                    cherish.
                </Text>
                <Button
                    onClick={()=>{
                        navigate('/login');
                    }}
                    color="black_900"
                    shape="round"
                    rightIcon={
                        <div className="flex h-[18px] w-[18px] items-center justify-center bg-black-900">
                            <Img src="images/img_profile.svg" alt="Profile" className="h-[18px] w-[18px]" />
                        </div>
                    }
                    className="min-w-[246px] gap-2 font-quicksand"
                >
                    Find the Perfect Gift
                </Button>
            </div>
            <Img
                src="images/img_image_1.png"
                alt="Imageone"
                className="w-[42%] object-contain md:w-[80%] md:mb-8 sm:w-[90%]"
            />
        </div>
    );
}
