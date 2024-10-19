import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";

export default function AiassistpagetwoRowThree() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the button click
  const handleGetStarted = () => {
    navigate("/categories"); // Navigate to the categories page
  };

  return (

    <>
      <Helmet>
                <title>GiftFlow Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />

    <Box
      sx={{
        position: "relative",
        height: { xs: "100vh", md: "886px", lg: "100vh" }, // Full height on mobile and desktop
        backgroundImage: 'url("/images/img_group_16.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%", // Full width
      }}
    >
      {/* Black overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
          zIndex: 1, // Ensure the overlay is on top of the background image
        }}
      />

      {/* Centered content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Ensure text is above the overlay
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%", // Center content vertically
          textAlign: "center",
          padding: { xs: 2, md: 0 }, // Add padding for mobile screens
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "85px" }, // Responsive font size
            color: "#fff",
            width: "80%",
            lineHeight: { xs: "50px", md: "90px" }, // Responsive line height
            fontWeight: 'bold', // Use lowercase for consistency
            fontFamily: "Abhaya Libre ExtraBold", // Custom font family
            maxWidth: "90%", // Ensure text doesn't overflow on small screens
          }}
        >
          Find the Perfect Gift with Intelligent Recommendations
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "22px" }, // Responsive font size
            color: "#fff",
            width: { xs: "80%", md: "50%" },
            marginTop: 3,
            fontFamily: "Abhaya Libre ExtraBold", // Custom font family
            maxWidth: "90%", // Ensure text doesn't overflow on small screens
          }}
        >
          Get personalized gift suggestions with our intelligent recommendations.
          Simply answer a few questions, and let our AI-powered tool find the perfect gift tailored to your child's interests.
        </Typography>

        {/* Get Started Button */}
        <Button
          variant="contained"
          onClick={handleGetStarted} // Add onClick handler to navigate
          sx={{
            marginTop: 4,
            backgroundColor: "#FEE280", // Button color
            borderRadius: "15px", // Border radius
            width: { xs: "150px", md: "210px" }, // Responsive width
            height: { xs: "50px", md: "61px" }, // Responsive height
            color: "#000", // Button text color
            "&:hover": {
              backgroundColor: "#fdd76a", // Slightly darker on hover
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
    <Footer className="mt-[30px] self-stretch" />

    </>
  );
}










