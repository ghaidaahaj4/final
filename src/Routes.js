import React from "react";
import {useRoutes} from "react-router-dom";
import DesktopTwo from "./pages/DesktopTwo";
import DesktopThree from "./pages/DesktopThree";

import DesktopTenPage from "./pages/DesktopTen";
import DesktopOnePage from "./pages/DesktopOne";
import Login from "./pages/Login";
import DesktopSixteenPage from "./pages/DesktopSixteen";
import DesktopSeventeenPage from "./pages/DesktopSeventeen";
import About from "./pages/Abouts";
import DesktopTwentyPage from "./pages/DesktopTwenty";
import DesktopTwentyTwo from "./pages/DesktopTwentyTwo";
import DesktopTwentyThreePage from "./pages/DesktopTwentyThree";
import AIASSISTPageOnePage from "./pages/aiassestpageone";
import AIASSISTPageTwoPage from "./pages/aiassistpagetow";
import AIASSISTPageThreePage from "./pages/ASSISTPageThree";
import AIASSISTPageFourPage from "./pages/ASSISTPageFour";
import AIASSISTPageFivePage from "./pages/AssistPageFive";
import AIASSISTPageSixPage from "./pages/AssistPageSix";
import AIASSISTPageSevenPage from "./pages/AssistPageSeven";
import AIASSISTPagePage from "./pages/AIASSESTPage";
import AiassistpageRowTwo from "./pages/AISUBMITV1";
import AIASSISTAFTERSUBMITV2Page from "./pages/AISUBMITV2";
import Categories from "./pages/categories";


const ProjectRoutes = () => {
    return useRoutes([
        {path: "/", element: <DesktopOnePage/>},
        {path: "/login", element: <Login/>},
        {path: "/home", element: <DesktopOnePage/>},
        {path: "/product", element: <DesktopTwo/>},
        {path: "/assest", element: <DesktopThree/>},
        {path: "/result", element: <DesktopTenPage/>},
        {path: "/addGifts", element: <DesktopSixteenPage/>},
        {path: "/children", element: <DesktopSeventeenPage/>},
        {path: "/about", element: <About/>},
        {path: "/addChild", element: <DesktopTwentyPage/>},
        {path: "/thanks", element: <DesktopTwentyTwo/>},
        {path: "/invite", element: <DesktopTwentyThreePage/>},


        {path: "/assestsOne", element: <AIASSISTPageOnePage />},
        {path: "/assestsTwo", element: <AIASSISTPageTwoPage />},
        {path: "/assestsThree", element: <AIASSISTPageThreePage />},
        {path: "/assestsFour", element: <AIASSISTPageFourPage />},
        {path: "/assestsFive", element: <AIASSISTPageFivePage />},
        {path: "/assestsSix", element: <AIASSISTPageSixPage />},
        {path: "/assestsSeven", element: <AIASSISTPageSevenPage />},
        {path: "/assests", element: <AIASSISTPagePage />},
        {path: "/submit1", element: <AiassistpageRowTwo />},
        {path: "/submit2", element: <AIASSISTAFTERSUBMITV2Page />},
        {path: "/categories", element: <Categories />},



    ]);
};

export default ProjectRoutes;
