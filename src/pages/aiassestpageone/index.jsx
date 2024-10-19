import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import AiassistpageoneRowThree from "./AiassistpageoneRowThree";
import React from "react";

export default function AIASSISTPageOnePage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-a700">
                <div>
                    <AiassistpageoneRowThree />
                </div>
            </div>
        </>
    );
}