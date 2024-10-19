import { Text, Img } from "./index";
import React from "react";

export default function UserProfile({
                                        userName = "1",
                                        img="images/img_material_symbol.svg",
                                        userDescription = "Enter the child's information, including age, gender, and preferences.",
                                        ...props
                                    }) {
    return (
        <div {...props} className={`${props.className} flex items-center`}>
            <div className="flex w-full flex-col items-center">
                <Img src={img} alt="Image" className="h-[100px] w-[100px]" />
                <div className="flex items-center justify-center gap-[10px] self-stretch">
                    <Text as="p" className="!font-casaygon size40">
                        {userName}
                    </Text>
                    <Text size="textsm" as="p" className="mb-1.5 w-[84%] self-end leading-6">
                        {userDescription}
                    </Text>
                </div>
            </div>
        </div>
    );
}
