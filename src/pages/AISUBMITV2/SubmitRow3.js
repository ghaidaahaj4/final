import { Button, SelectBox, Img, Text } from "../../components";
import ProductCard1 from "../../components/ProductCard1";
import React, { Suspense } from "react";

const data = [
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
];

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function Aiassistaftersubmitv2ColumnOne() {
    return (
        <div className="flex flex-col items-center">
            <div className="container-xs md:px-5">
                <div className="flex flex-col items-center gap-[70px] md:gap-[52px] sm:gap-[35px]">
                    <div className="mx-4 flex gap-3.5 self-stretch md:mx-0 sm:flex-col">
                        <div className="flex w-[16%] items-center justify-between gap-5 rounded-[18px] bg-white-a700 px-3 py-[18px] shadow-5xl sm:w-full">
                            <Text as="p" className="ml-[18px] text-[18px] font-normal text-black-900_7f md:ml-0">
                                Price Range
                            </Text>
                            <Img src="images/img_ouitokenrange.svg" alt="Ouitokenrange" className="h-[26px] w-[26px]" />
                        </div>
                        <SelectBox
                            shape="round"
                            indicator={<Img src="images/img_checkmark.svg" alt="Checkmark" className="h-[28px] w-[34px]" />}
                            name="checkmark"
                            placeholder="Category"
                            options={dropDownOptions}
                            className="w-[16%] gap-4 rounded-[18px] sm:w-full"
                        />
                    </div>

                    <div className="grid grid-cols-4 justify-center gap-[30px] self-stretch px-2 md:grid-cols-2 sm:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, index) => (
                                <ProductCard1 {...d} key={"gridgreendino" + index} />
                            ))}
                        </Suspense>
                    </div>
                    <Button size="6xl" shape="round" className="min-w-[352px] rounded-[14px] px-[34px] font-semibold sm:px-5">
                        Load More
                    </Button>
                </div>
            </div>
        </div>
    );
}
