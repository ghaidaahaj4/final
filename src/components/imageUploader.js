import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { Img, Heading } from "../components";

export default function ImageUploader({ onImageUpload }) {
    const [imageUrl, setImageUrl] = useState(null);

    // Function to handle image upload
    const uploadImageAndGetURL = async (file) => {
        if (!file) return null;

        const storageRef = ref(storage, `images/${file.name}`);

        try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = await uploadImageAndGetURL(file);
            if (imageURL) {
                setImageUrl(imageURL);
                onImageUpload(imageURL);
            }
        }
    };

    return (
        <div className="flex w-[200px] md:items-start flex-col items-center gap-4 self-center md:w-full md:mt-8">
            {imageUrl ? (
                <div>
                    <img
                        src={imageUrl}
                        alt="Child"
                        className="h-[150px] w-[150px] object-cover rounded-full"
                    />
                </div>
            ) : (
                <label htmlFor="picture"
                       className="w-[150px] h-[150px] rounded-[80px] bg-black-900 justify-center cursor-pointer">
                    <Img
                        src="images/material-symbols_person-add.svg"
                        alt="Add Picture"
                        className="h-[50px] w-[50px]"
                    />
                </label>
            )}
            <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
            />
            <Heading size="headings" as="h4" className="mr-[22px] md:mr-0">
                Add Picture
            </Heading>
        </div>
    );
}
