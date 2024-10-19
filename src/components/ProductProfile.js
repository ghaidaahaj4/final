import React, { useState } from "react";
import { Button, Img, Heading, Text } from "./index";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

export default function ProductProfile({
                                           productName = "Green Dinosaur Fluffy Toy - Collectible",
                                           productPrice = "$12.99",
                                           saveButtonText = "Save",
                                           productImage = "images/img_rectangle_17.png",
                                           isInvitation = false,
                                           manual = false,
                                           productLink = "https://www.example.com", // Use a valid URL
                                           ...props
                                       }) {
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    // Function to open URL in a new tab
    const openUrlInNewTab = () => {
      if(manual){
          window.open(productLink, '_blank', 'noopener,noreferrer');
      }else{
          alert('sorry this product does not have link')
      }
    };

    return (
        <div
            {...props}
            onClick={openUrlInNewTab}
            className={`cursor-pointer flex flex-col items-center w-full bg-white-a700 shadow-xs rounded-[30px] ${props.className}`}
        >
            <Img
                src={productImage ? productImage : "images/img_rectangle_17.png"}
                alt="Product Image"
                className="h-[236px] w-full rounded-[30px] object-cover"
            />
            <div className="mx-4 my-4 flex flex-col items-start gap-1.5 self-stretch">
                <Heading size="heading2xl" as="h4" className="w-full leading-7 size16">
                    {productName}
                </Heading>
                <Heading size="heading4xl" as="h3">
                    {productPrice}
                </Heading>
            </div>
            {/* <Button
                shape="round"
                rightIcon={
                    <Img
                        src="images/img_mdiheart.svg"
                        alt="Mdi:heart"
                        className="h-[24px] w-[24px]"
                    />
                }
                className="mb-4 mr-4 min-w-[104px] gap-2 self-end font-quicksand"
            >
                {saveButtonText}
            </Button> */}
            {isInvitation ? (
                <div className="flex items-center space-x-4 p-4 w-full justify-end">
                    <div className="flex items-center rounded-2xl p-4 cursor-pointer space-x-2 bg-amber-300 w-[120px]">
                        <Text>{isChecked ? 'Checked' : 'Check'}</Text>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}
