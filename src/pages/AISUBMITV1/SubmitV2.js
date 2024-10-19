import { Suspense } from "react";
import ProductCard1 from "../../components/ProductCard1";
import React from "react";

const data = [
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" }
];

export default function Aiassistaftersubmitv1RowOne() {
    return (
        <div className="mt-[60px] flex justify-center self-stretch">
            <div className="container-xs flex justify-center md:px-5">
                <div className="grid w-full grid-cols-4 gap-[30px] gap-y-[30px] px-2 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <ProductCard1 {...d} key={"gridgreendinosa" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}