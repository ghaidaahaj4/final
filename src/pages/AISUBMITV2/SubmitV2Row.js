import { Heading } from "../../components";
import React from "react";

export default function Aiassistaftersubmitv2Row() {
    return (
        <div className="flex h-[1362px] items-start justify-center bg-[url('/public/images/img_group_15.png')] bg-cover bg-no-repeat py-[78px] md:h-auto md:py-5">
            <div className="container-xs mb-[52px] flex px-4 md:px-5">
                <Heading
                    size="heading8xl"
                    as="h1"
                    className="w-[44%] text-[57px] font-semibold leading-[68px] text-white-a700 md:text-[49px] sm:text-[43px]"
                >
                    Here's our suggestions based on your answers!
                </Heading>
            </div>
        </div>
    );
}
