import { Text } from "./index";
import React from "react";

export default function UserProfile2({
                                         userAnimatedText = "Animated",
                                         isChecked = false,
                                         onChange,
                                        isForm = false,
                                         ...props
                                     }) {
    return (
        <div
            {...props}
            onClick={onChange}

            className={`${props.className} ${isForm? 'border-2 border-gray-300': ''} flex items-center gap-5 px-[18px] py-2 bg-white-a700 rounded-[12px] cursor-pointer wdh`}
        >
            <div
                style={{backgroundColor: isChecked? '#333': '#fff'}}
                className={`h-[25px] w-[25px] rounded-[16px] border border-solid ${
                    isChecked ? 'bg-black' : 'border-black-900 bg-white-a700'
                }`}
            />
            <Text as="p" className={"size14"}>{userAnimatedText}</Text>
        </div>
    );
}
