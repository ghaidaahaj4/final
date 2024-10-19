import { Text, Heading } from "../../components";
import TeamMemberProfile from "../../components/TeamMemberProfile";
import React, { Suspense } from "react";

const data = [
    { teamMemberName: "Team Member", teamMemberEmail: "hello@gmail.com" },
    { teamMemberName: "Team Member", teamMemberEmail: "hello@gmail.com" },
    { teamMemberName: "Team Member", teamMemberEmail: "hello@gmail.com" },
    { teamMemberName: "Team Member", teamMemberEmail: "hello@gmail.com" }
];

export default function DesktoptwentyfourColumnOne() {
    return (
        <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col gap-[54px] px-[50px] md:px-5 sm:gap-[27px]">
                <div className="mx-16 flex flex-col items-center gap-[42px] md:mx-0">
                    <Heading as="h1" className="font-quicksand size40">About</Heading>
                    <Text size="text2xl" as="p" className="w-full leading-[37px] size20">
                        We are a team of four dedicated individuals who created this website to solve a problem many of us face
                        during children&#39;s birthdays. Guests often don&#39;t know what to buy, and sometimes the gifts are not
                        suitable or meaningful. Our goal is to ease the burden on guests and ensure that every child receives a gift
                        they truly love and appreciate.
                    </Text>
                </div>
                <div className="flex gap-8 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <TeamMemberProfile {...d} key={"listteammember" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
