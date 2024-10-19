import { Button, Img, Heading } from "../components";
import React from "react";

export default function ProductCard1({
  productName = "Green Dinosaur Fluffy Toy - Collectible",
  productPrice = "$12.99",
  saveButtonText = "Save",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full bg-white-a700 shadow-md rounded-[30px]`}
    >
      <Img src="images/img_rectangle_17.png" alt="Image" className="h-[236px] w-full rounded-[30px] object-cover" />
      <div className="mx-4 mt-4 flex flex-col items-start gap-1.5 self-stretch">
        <Heading size="headinglg" as="h4" className="w-full text-[24px] font-semibold leading-7 text-black-900">
          {productName}
        </Heading>
        <Heading size="heading2xl" as="h3" className="text-[28px] font-bold text-black-900">
          {productPrice}
        </Heading>
      </div>
      <Button
        shape="round"
        rightIcon={<Img src="images/img_mdiheart_black_900.svg" alt="Mdi:heart" className="h-[24px] w-[24px]" />}
        className="mb-4 mr-4 min-w-[104px] gap-2 self-end rounded-[14px] px-3.5 font-quicksand"
      >
        {saveButtonText}
      </Button>
    </div>
  );
}