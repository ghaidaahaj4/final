import {
  TextField,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
  Avatar,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import React, { useState } from "react"; // Import useState for managing selected item
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import CustomComponent from "./CustomComponent";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Categories() {
  const [selectedIndex, setSelectedIndex] = useState(0); // State for the selected index
  const navigate = useNavigate(); // Initialize the navigate function

  const chipOptions1 = [
    {
      question: " What are some hobbies or activities they really enjoy?",
      chiper: [
        { value: 1, label: "🧑‍🎨 Drawing/Painting" },
        { value: 2, label: "🏃 Sports/Running" },
        { value: 3, label: "🎮 Video Games" },
        { value: 4, label: "🧩 Solving Puzzles" },
        { value: 5, label: "🎸 Playing" },
        { value: 6, label: "🌳 Exploring Nature" },
        { value: 7, label: "🏰 Building (Legos, Blocks)" },
        { value: 8, label: "🎤 Singing/Dancing" },
        { value: 9, label: "🧑‍🍳 Cooking" },
        { value: 10, label: "📖 Reading Books" },
        { value: 11, label: "📝 Other" },
      ],
    },
    {
      question: "Do they attend any clubs or classes regularly?",
      chiper: [
        { value: 1, label: "🎨 Art Class" },
        { value: 2, label: "🏀 Sports Team" },
        { value: 3, label: "🎶 Music Class" },
        { value: 4, label: "🤖 Robotics/Coding Club" },
        { value: 5, label: "📚 Reading Club" },
        { value: 6, label: "🧩 Puzzle/Chess Club" },
        { value: 7, label: "🏊 Swimming Class" },
        { value: 8, label: "🎭 Drama/Theater Group" },
        { value: 9, label: "🧑‍🔬 Science Club" },
        { value: 10, label: "💃 Dance Class" },
        { value: 11, label: "📝 Other" },
      ],
    },
  ];
  const chipOptions2 = [
    {
      question: "Do they have a favorite book or book series?",
      chiper: [],
    },
    {
      question: "Is there a movie or TV show character they really like?",
      chiper: [],
    },
  ];

  const chipOptions3 = [
    {
      question: "Are they involved in any sports regularly?",
      chiper: [
        { value: 1, label: "⚽ Soccer" },
        { value: 2, label: "🏀 Basketball" },
        { value: 3, label: "🏊 Swimming" },
        { value: 4, label: "🏸 Badminton" },
        { value: 5, label: "🏃 Running" },
        { value: 6, label: "🏐 Volleyball" },
        { value: 7, label: "🎾 Tennis" },
        { value: 8, label: "🥋 Martial Arts" },
        { value: 9, label: "🏋️ Gymnastics" },
        { value: 10, label: "🚴 Cycling" },
        { value: 11, label: "📝 Other" },
      ],
    },
  ];

  const chipOptions4 = [
    {
      question: " What are some hobbies or activities they really enjoy?",
      chiper: [
        { value: 1, label: "🎨 Painting" },
        { value: 2, label: "✂️ Crafting" },
        { value: 3, label: "🧶 Knitting/Sewing" },
        { value: 4, label: "🧵 Making Jewelry" },
        { value: 5, label: "🖌 Sculpting" },
        { value: 6, label: "🧩 DIY Projects" },
        { value: 7, label: "📒 Scrapbooking" },
        { value: 8, label: "🎭 Making Costumes" },
      ],
    },
    {
      question: "Do they attend any clubs or classes regularly?",
      chiper: [],
    },
  ];
  const chipOptions5 = [
    {
      question:
        "Do they like playing video games? If so, what are their favorite games?",
      chiper: [],
    },
    {
      question:
        "Do they enjoy using gadgets like drones, robots, or other tech toys?",
      chiper: [],
    },
  ];
  const chipOptions6 = [
    {
      question: "Do they enjoy playing board games?",
      chiper: [],
    },
    {
      question: "Do they like watching movies? What genres do they enjoy?",
      chiper: [
        { value: 1, label: "🎬 Action/Adventure" },
        { value: 2, label: "🦸 Superhero Movies" },
        { value: 3, label: "😂 Comedy" },
        { value: 4, label: "🧙 Fantasy" },
        { value: 5, label: "👻 Horror" },
        { value: 6, label: "🕵️ Mystery/Thriller" },
        { value: 7, label: "🌍 Documentary" },
        { value: 8, label: "💖 Romantic" },
        { value: 9, label: "🐉 Animated" },
        { value: 10, label: "👑 Historical/Period Drama" },
        { value: 11, label: "🏰 Fairy Tales" },
        { value: 12, label: "🚀 Sci-Fi" },
        { value: 13, label: "🎵 Musicals" },
        { value: 14, label: "🤖 Supernatural/Sci-Fi Fantasy" },
        { value: 15, label: "👶 Kids/Family" },
      ],
    },
    {
      question: "What kinds of books do they enjoy?",
      chiper: [
        { value: 1, label: "🏰 Fantasy/Adventure" },
        { value: 2, label: "👩‍🏫 Educational" },
        { value: 3, label: "🦸‍♂️ Superhero" },
        { value: 4, label: "😂 Humor" },
        { value: 5, label: "😱 Thriller" },
        { value: 6, label: "👾 Science Fiction" },
      ],
    },
  ];

  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [otherInput, setOtherInput] = useState("");
  const [nextOtherInput, setNextOtherInput] = useState(""); // For the next question
  const [inputText, setInputText] = useState("");
    const [age, setAge] = useState("");// State for the input text
    const [formData, setFormData] = useState({});

    const [gender, setGender] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value);  // Update state with selected radio button value
    };

console.log('Other Inputs', otherInput);
console.log('Gender', gender);
console.log('inputText', inputText);
console.log('Answer are here', selectedChipOptions);



  const handleChipToggle = (label) => {
    // Strip emojis from the label and trim it
    const strippedLabel = label.replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, '').trim();
    
    setSelectedChipOptions((prevSelected) => {
      const isSelected = prevSelected.includes(strippedLabel);
      const newSelected = isSelected 
        ? prevSelected.filter((l) => l !== strippedLabel) // Remove label
        : [...prevSelected, strippedLabel]; // Add label
  
      console.log("Selected options (before change):", prevSelected);
      console.log("Selected options (after change):", newSelected);
      console.log("Selected otherInput (after change):", otherInput);

      return newSelected; // Return the new state
    });
  
    // Reset the input field if the "Other" chip is clicked
    if (strippedLabel === "Other") {
      setOtherInput(""); // Reset the other input if selected
    }
  };
  
  

// setTimeout(() => {
//   console.log("Selected options:", selectedChipOptions);
// }, 5000);

    console.log('formdata', formData);
  
  const handleNext = () => {
    // Calculate the number of chip options available for the current index

      const obj2 = {...formData};
      const length = Object.keys(obj2).length;

      const index = 'question-' + currentIndex + length;


if(selectedChipOptions.length > 0) {
    obj2[index] = selectedChipOptions.join(' ');
}

if (inputText){
    obj2[index] = inputText;
}

      if (gender){
          obj2['gender'] = gender;
      }

if(otherInput){
    obj2[index] = otherInput;
}

if(age) {
    obj2['age'] = age;
}

      setFormData(obj2);

    const options = [chipOptions1, chipOptions2, chipOptions3, chipOptions4, chipOptions5, chipOptions6];
    
    if (currentIndex < options[selectedIndex].length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
      setSelectedIndex((prevIndex) => (prevIndex + 1) % options.length); // Cycle through the selectedIndex
    }


  
    // Reset inputs and selected chips
    setInputText("");
    setOtherInput("");
    setNextOtherInput("");
    setSelectedChipOptions([]);
  };
  const isLastSix = selectedIndex >= chipOptions6.length - 6;

  const handleSkip = () => {
    setCurrentIndex(0);
    setInputText("");
  
    // Cycle to the next selected index, ensuring it wraps around
    setSelectedIndex((prevIndex) => (prevIndex + 1) % 6); // Adjust 6 based on the total number of chipOptions arrays
  
    // Reset input and chip selections
    setOtherInput("");
    setSelectedChipOptions([]);
    setNextOtherInput("");
  };
  
  
  const items = [
    {
      name: "Hobbies & Interests ",
      image: require("../../assets/images/Hobbies.png"),
    },
    {
      name: "Favorite Characters & Series",
      image: require("../../assets/images/Favorite.png"),
    },
    {
      name: "Sports & Outdoor Activities ",
      image: require("../../assets/images/Sports.png"),
    },
    {
      name: "Creative Arts ",
      image: require("../../assets/images/Hobbies.png"),
    },
    {
      name: "Technology & Gadgets ",
      image: require("../../assets/images/Technology.png"),
    },
    {
      name: "Personal Preferences",
      image: require("../../assets/images/Personal.png"),
    },
  ];

  // Dummy names for display when selectedIndex === 0
  const handleSubmit = () => {
    console.log("Submit form");
    //navigate('/result')
      navigate('/result', { state: formData });
    // Perform submit action here
  };
  const handleBack = () => {
    console.log("handleBack ");
    // navigate('/result')
    // Perform submit action here
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
        display: "flex", // Enable flexbox for centering
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      {/* Black overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "100px",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
          zIndex: 1, // Ensure the overlay is on top of the background image
        }}
      />

      <Box
        sx={{
          width: { xs: "90%", md: "90%", lg: "90%" }, // Responsive width
          overflowY: "auto", // Enable vertical scrolling
          maxHeight: { xs: "90vh", md: "90vh", lg: "100vh" }, // Set max height to allow scrolling
          height: { xs: "90%", md: "90%", lg: "90%" }, // Responsive height

          backgroundColor: "rgba(255, 255, 255, 0.5)", // White overlay with 50% opacity
          backdropFilter: "blur(20px)", // Blur effect
          borderRadius: "46px", // Rounded corners
          display: "flex", // Enable flexbox for centering
          flexDirection: "column", // Arrange children in a column
          justifyContent: "flex-start", // Start from the top
          alignItems: "center", // Center items horizontally
          zIndex: 2, // Ensure the overlay is on top of the background image
          paddingTop: { xs: "10px", md: "20px" }, // Responsive padding at the top
        }}
      >
        {/* Centered text at the top */}
        <Typography
          variant="h4" // You can use a variant that best fits your design
          sx={{
            fontSize: { xs: "22px", md: "32px" }, // Responsive font size
            color: "black", // Font color
            fontWeight: "600", // Font weight semi-bold
            margin: { xs: "10px", md: "20px" }, // Responsive margin
            textAlign: "center", // Center align text
          }}
        >
          Help us find the perfect gift!
        </Typography>

        {/* Horizontal line */}
        <Box
          sx={{
            width: "95%", // Width of the line
            height: "1px", // Height of the line
            backgroundColor: "grey", // Color of the line
            marginTop: "20px", // Margin for spacing
          }}
        />

        {/* Flex row for left and right sections */}
        <Box
          sx={{
            display: "flex", // Use flexbox for horizontal layout
            flexDirection: { xs: "column", md: "row" }, // Change to column on mobile
            width: "100%", // Full width
            height: "100%", // Full height
            marginTop: "20px", // Add some margin on top
          }}
        >
          {/* Left section for text list */}
          <Box
            sx={{
              width: { xs: "100%", md: "25%" }, // Full width on mobile, 25% on desktop
              backgroundColor: "transparent", // Pink background color
              paddingLeft: "2%", // Padding around the list
              overflowY: "auto", // Scroll if content overflows
              order: { xs: 2, md: 1 }, // Order in column layout
              display: { xs: "none", md: "block" },
            }}
          >
            <List>
              {items.map((item, index) => (
                <Box
                  key={index} // Add the key here for each mapped item
                  sx={{
                    display: "flex", // Use flex for alignment
                    flexDirection: "column", // Column direction for stacking
                    width: "100%", // Full width for each item
                  }}
                >
                  <ListItem
                    button
                    onClick={() => setSelectedIndex(index)} // Set selected index on click
                    sx={{
                      backgroundColor:
                        selectedIndex === index ? "#fff" : "transparent", // Change background if selected
                      borderRadius: "20px", // Rounded corners for list items
                      marginBottom: "8px", // Margin between list items
                      display: "flex", // Enable flexbox
                      width: "100%", // Full width for mobile responsiveness
                      alignItems: "center", // Center items vertically
                      padding: { xs: "8px", sm: "12px" }, // Responsive padding
                      boxShadow:
                        selectedIndex === index
                          ? "0px 2px 4px rgba(0,0,0,0.2)"
                          : "none", // Optional shadow on selected
                      "&:hover": {
                        backgroundColor: "white", // Change background to white on hover
                        color: "#000",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 67,
                        width: 67,
                        borderRadius: "50%", // Change to 50% for a perfect circle
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor:
                          selectedIndex === index ? "#FEE280" : "#fff", // Change background color based on selection
                        marginRight: 2,
                        flexShrink: 0, // Prevent shrinking on small screens
                        "&:hover": {
                          backgroundColor: "#FEE280", // Keep the color consistent on hover for selected
                        },
                      }}
                    >
                      <Avatar
                        alt={`Image for ${item}`} // Accessibility label
                        src={item.image} // Path to the image
                        sx={{
                          width: 35,
                          height: 35,
                          borderRadius: "50%", // Set borderRadius to 50% for circular avatar
                        }}
                      />
                    </Box>
                    <ListItemText
                      primary={item.name} // Accessing the name property from item
                      primaryTypographyProps={{
                        sx: {
                          fontSize: { xs: "18px", sm: "24px" }, // Responsive font size
                          fontWeight: 500,
                          color: selectedIndex === index ? "#000" : "#000", // Change text color based on selection
                          "&:hover": {
                            color: "#000", // Keep text color black on hover
                          },
                        },
                      }}
                    />
                  </ListItem>
                </Box>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              width: { xs: "100%" }, // Full width on mobile
              backgroundColor: "transparent", // Transparent background color
              paddingLeft: "2%", // Padding around the list
              overflowY: "auto", // Scroll if content overflows
              order: { xs: 2, md: 1 }, // Order in column layout
              display: { xs: "block", md: "none" }, // Show only on mobile
              // marginTop:"10px"
            }}
          >
            <Box
              sx={{
                width: "100%", // Full width for the container
                overflowX: "auto", // Enable horizontal scrolling
                display: "flex", // Flexbox for horizontal layout
                paddingLeft: "2%", // Optional padding
                paddingRight: "2%", // Optional padding
              }}
            >
              <Grid
                container
                spacing={2} // Space between items
                sx={{
                  display: "flex", // Flexbox for horizontal alignment
                  flexWrap: "nowrap", // Prevent items from wrapping to the next line
                  justifyContent: "flex-start", // Align items to the start of the container
                }}
              >
                {items.map((item, index) => (
                  <Grid
                    item
                    key={index}
                    xs={3} // Adjust size according to your needs (3 out of 12 columns)
                    onClick={() => setSelectedIndex(index)} // Set selected index on click
                    sx={{
                      cursor: "pointer", // Change cursor to pointer on hover
                      width: "100px", // Fixed width for each item
                      backgroundColor:
                        selectedIndex === index ? "transparent" : "transparent", // Change background if selected
                      borderRadius: "20px", // Rounded corners for items
                      padding: { xs: "8px", sm: "8px" }, // Responsive padding
                      display: "flex", // Flexbox for vertical alignment
                      flexDirection: "column", // Arrange items vertically
                      justifyContent: "center", // Center items vertically
                      alignItems: "center", // Center items horizontally
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: "55px", sm: "55px" },
                        width: { xs: "55px", sm: "55px" },
                        borderRadius: "50%", // Circular shape for the avatar box
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        backgroundColor:
                          selectedIndex === index ? "#FEE280" : "#fff", // Change background color based on selection
                        marginBottom: 1, // Space below the avatar
                        "&:hover": {
                          backgroundColor: "#FEE280", // Keep the color consistent on hover for selected
                        },
                      }}
                    >
                      <Avatar
                        alt={`Image for ${item.name}`} // Accessibility label
                        src={item.image} // Path to the image
                        sx={{
                          height: { xs: "25px", sm: "25px" },
                          width: { xs: "25px", sm: "25px" },
                          borderRadius: "50%", // Set borderRadius to 50% for circular avatar
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        fontSize: { xs: "13px", sm: "13px" }, // Responsive font size
                        textAlign: "center", // Center the text
                        fontWeight: 500,
                        color: selectedIndex === index ? "#000" : "#000", // Change text color based on selection
                        "&:hover": {
                          color: "#000", // Keep text color black on hover
                        },
                      }}
                    >
                      {item.name} {/* Accessing the name property from item */}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          {/* Vertical line */}
          <Box
            sx={{
              width: "1px", // Width of the vertical line
              backgroundColor: "grey", // Color of the line
              marginTop: "-20px",
              marginX: "15px", // Margin for spacing
              display: { xs: "none", md: "block" }, // Hide on mobile
              order: { md: 2 }, // Order in column layout
            }}
          />

          {/* Right section for different views */}
          <Box
            sx={{
              width: { xs: "100%", md: "75%" }, // Full width on mobile, 75% on desktop
              backgroundColor: "transparent", // Black background color
              display: "flex",
              flexDirection: "column",
              // Use flex to center content
              // justifyContent: "center", // Center horizontally
              // alignItems: "center", // Center vertically
              order: { xs: 2, md: 3 }, // Order in column layout
            }}
          >
            {/* Display dummy names when selected index is 0 */}
            {selectedIndex === 0 ? (
              <>
                <CustomComponent
                  currentIndex={currentIndex}
                  chipOptions1={chipOptions1}
                  selectedChipOptions={selectedChipOptions}
                  handleChipToggle={handleChipToggle}
                  handleSkip={handleSkip}
                  handleNext={handleNext}
                  otherInput={otherInput}
                  setOtherInput={setOtherInput}
                  nextOtherInput={nextOtherInput}
                  setNextOtherInput={setNextOtherInput}
                  value11={11} // Passing value 11
                  textFieldPlaceholder="Enter your text here" // Passing placeholder text
                  inputText={inputText}
                  handleBack={handleBack}
                  setGender={handleChange}
                  gender={gender}
                  setInputText={setInputText}
                  setAge={setAge}
                  ages={age}
                  age={true}
                />
              </>
            ) : selectedIndex === 1 ? (
              <>
                <CustomComponent
                  currentIndex={currentIndex}
                  chipOptions1={chipOptions2}
                  selectedChipOptions={selectedChipOptions}
                  handleChipToggle={handleChipToggle}
                  handleSkip={handleSkip}
                  handleNext={handleNext}
                  otherInput={otherInput}
                  setOtherInput={setOtherInput}
                  nextOtherInput={nextOtherInput}
                  setNextOtherInput={setNextOtherInput}
                  value11={11} // Passing value 11
                  textFieldPlaceholder="Enter your text here" // Passing placeholder text
                  inputText={inputText}
                  handleBack={handleBack}

                  setInputText={setInputText}
                />
              </>
            ) : selectedIndex === 2 ? (
              <>
                <CustomComponent
                  currentIndex={currentIndex}
                  chipOptions1={chipOptions3}
                  selectedChipOptions={selectedChipOptions}
                  handleChipToggle={handleChipToggle}
                  handleSkip={handleSkip}
                  handleNext={handleNext}
                  otherInput={otherInput}
                  setOtherInput={setOtherInput}
                  nextOtherInput={nextOtherInput}
                  setNextOtherInput={setNextOtherInput}
                  value11={11} // Passing value 11
                  textFieldPlaceholder="Enter your text here" // Passing placeholder text
                  inputText={inputText}
                  setInputText={setInputText}
                  handleBack={handleBack}

                />
              </>
            ) : selectedIndex === 3 ? (
              <>
                <CustomComponent
                  currentIndex={currentIndex}
                  chipOptions1={chipOptions4}
                  selectedChipOptions={selectedChipOptions}
                  handleChipToggle={handleChipToggle}
                  handleSkip={handleSkip}
                  handleNext={handleNext}
                  otherInput={otherInput}
                  setOtherInput={setOtherInput}
                  nextOtherInput={nextOtherInput}
                  setNextOtherInput={setNextOtherInput}
                  value11={11} // Passing value 11
                  textFieldPlaceholder="Enter your text here" // Passing placeholder text
                  inputText={inputText}
                  handleBack={handleBack}

                  setInputText={setInputText}
                />
              </>
            ) : selectedIndex === 4 ? (
              <>
                <CustomComponent
                  currentIndex={currentIndex}
                  chipOptions1={chipOptions5}
                  selectedChipOptions={selectedChipOptions}
                  handleChipToggle={handleChipToggle}
                  handleSkip={handleSkip}
                  handleNext={handleNext}
                  otherInput={otherInput}
                  setOtherInput={setOtherInput}
                  nextOtherInput={nextOtherInput}
                  setNextOtherInput={setNextOtherInput}
                  value11={11} // Passing value 11
                  textFieldPlaceholder="Enter your text here" // Passing placeholder text
                  inputText={inputText}
                  handleBack={handleBack}

                  setInputText={setInputText}
                />
              </>
            ) : selectedIndex === 5 ? (
              <>
                <CustomComponent
                  currentIndex={currentIndex}
                  chipOptions1={chipOptions6}
                  selectedChipOptions={selectedChipOptions}
                  handleChipToggle={handleChipToggle}
                  handleSkip={handleSkip}
                  handleNext={handleNext}
                  otherInput={otherInput}
                  setOtherInput={setOtherInput}
                  nextOtherInput={nextOtherInput}
                  setNextOtherInput={setNextOtherInput}
                  value11={11} // Passing value 11
                  textFieldPlaceholder="Enter your text here" // Passing placeholder text
                  inputText={inputText}
                  setInputText={setInputText}
                  selectedIndex={selectedIndex}
                  handleSubmit={handleSubmit}
                  totalOptions={6}
                  isLastSix={isLastSix}
                  handleBack={handleBack}
/>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
    <Footer className="mt-[30px] self-stretch" />


    </>
  );
}
