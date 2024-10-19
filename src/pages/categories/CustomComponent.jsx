import React from "react";
import {
  Box,
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Chip,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import maleImage from "../../assets/images/maleImage.png"; // Replace with your image path
import femaleImage from "../../assets/images/femaleImage.png"; // Replace with your image path

const CustomComponent = ({
  handleBack,
  currentIndex,
  chipOptions1,
  selectedChipOptions,
  handleChipToggle,
  handleSkip,
  handleNext,
  otherInput,
  setOtherInput,
  nextOtherInput,
  setNextOtherInput,
  value11, // New prop for passing the value 11
  textFieldPlaceholder,
  setInputText,
  inputText,
  age,
                             setGender, gender,
                             ages,                       setAge,
  selectedIndex,
  handleSubmit,
  totalOptions, // Total number of chipOptions
}) => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Adjust based on screen width

  const isLastSix =
    selectedIndex >= totalOptions - 6 &&
    chipOptions1.length === currentIndex + 1;
  //console.log(chipOptions1);

  if (!Array.isArray(chipOptions1) || chipOptions1.length === 0) {
    return <div>No options available</div>;
  }

  const currentOption = chipOptions1[currentIndex];

  if (!currentOption) {
    return <div>No question available</div>; // Handle undefined case
  }
  return (
    <Box
      sx={{
        margin: {
          xs: "4%",
          md: "2.5%",
        },
      }}
    >
      {age && (
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            // flexDirection: isMobile ? 'column' : 'row', // Column layout for mobile
            justifyContent: "space-between",
            // mb: 3,
            width: "100%",

            // paddingt:"100px",
            padding: 2,
          }}
        >
          {/* Left side for Age */}
          <Box sx={{ flex: 1, mb: isMobile ? 2 : 0, mr: isMobile ? 0 : "30%" }}>
            <Typography
              sx={{
                fontSize: isMobile ? 15 : 18,
                fontWeight: "bold",
                color: "black",
                mb: 1,
              }}
            >
              How old is the Child?
            </Typography>
            <TextField
              placeholder="Type the age in numbers..."
              fullWidth
              variant="filled"
              onChange={(e) =>  setAge(e.target.value)} // Update state on change
              value={ages}
              sx={{
                backgroundColor: "white",
              }}
            />
          </Box>

          {/* Right side for Gender */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: isMobile ? 15 : 18,

                fontWeight: "bold",
                color: "black",
                mb: 1,
                ml: isMobile ? 0 : "-10px", // Adjust margin based on screen size
              }}
            >
              Gender
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup value={gender} onChange={setGender} row>
                <FormControlLabel
                  style={{
                    backgroundColor: "white",
                  }}
                  value="male"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={maleImage}
                        alt="Male"
                        style={{ width: 24, height: 24, marginRight: 8 }}
                      />
                      Male
                    </Box>
                  }
                />
                <FormControlLabel
                  style={{
                    backgroundColor: "white",
                  }}
                  value="female"
                  control={<Radio />}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={femaleImage}
                        alt="Female"
                        style={{ width: 24, height: 24, marginRight: 8 }}
                      />
                      Female
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      )}

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ fontSize: { xs: 12, md: 16 } }}
      >
        Step {currentIndex + 1}/{chipOptions1.length}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: 16, md: 40 },
          fontWeight: "600",
          color: "black",
        }}
      >
        {currentIndex + 1}. {chipOptions1[currentIndex].question}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
  {chipOptions1[currentIndex].chiper.length === 0 ? (
    <TextField
      placeholder={textFieldPlaceholder}
      fullWidth
      variant="filled"
      multiline
      rows={4}
      sx={{ backgroundColor: "#fff", borderWidth: "0px" }}
      onChange={(e) => setInputText(e.target.value)} // Update state on change
      value={inputText}
    />
  ) : (
    chipOptions1[currentIndex].chiper.map((chip) => (
      <Chip
        key={chip.value} // Ensure this is unique
        label={chip.label}
        onClick={() => handleChipToggle(chip.label)}
        sx={{
          height: { xs: 25, md: 40 },
          fontSize: { xs: 12, md: 16 },
          backgroundColor: selectedChipOptions.includes(chip.label.replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, '').trim()) // Change background based on selection
            ? "black" // Selected color
            : "#EEEEEE", // Default color
          color: selectedChipOptions.includes(chip.label.replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, '').trim())
            ? "white" // Text color when selected
            : "black", // Default text color
          paddingLeft: "5px",
          paddingRight: "5px",
          "&:hover": {
            backgroundColor: selectedChipOptions.includes(chip.label.replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, '').trim())
              ? "black" // Keep the same color on hover if selected
              : "#EEEEEE", // Default hover color
          },
        }}
      />
    ))
  )}
</Box>
      {selectedChipOptions.some((option) =>
        option
          .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, "")
          .trim()
          .includes("Other")
      ) && (
        <TextField
          label="Other Options are..."
          value={otherInput}
          onChange={(e) => setOtherInput(e.target.value)}
          fullWidth
          variant="filled"
          multiline
          rows={4}
          sx={{ mt: 2, backgroundColor: "#fff", borderRadius: 1 }}
        />
      )}

      {chipOptions1[currentIndex + 1]?.chiper.some(
        (chip) =>
          chip.label
            .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, "")
            .trim() === "Other"
      ) &&
        selectedChipOptions.some((option) =>
          option
            .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, "")
            .trim()
            .includes("Other")
        ) &&
        currentIndex !== 0 && (
          <TextField
            label="Other Options are..."
            value={nextOtherInput}
            onChange={(e) => setNextOtherInput(e.target.value)}
            fullWidth
            variant="filled"
            multiline
            rows={4}
            sx={{ mt: 2, backgroundColor: "#fff", borderRadius: 1 }}
          />
        )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 4,
        }}
      >
        {isLastSix ? ( // Conditionally show "Submit" button if in the last 6
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#4CAF50", // Green for submit
              height: "66px",
              color: "#000",
              fontSize: "20px",
              width: { xs: "80px", md: "195px" },
              borderRadius: "20px",
            }}
            onClick={handleSubmit} // New submit action
          >
            Submit
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#C2C2C2",
                height: "66px",
                color: "#000",
                fontSize: "20px",
                width: { xs: "80px", md: "245px" },
                borderRadius: "20px",
              }}
              onClick={handleSkip}
            >
              Skip
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#C2C2C2",
                height: "66px",
                color: "#000",
                fontSize: "20px",
                width: { xs: "80px", md: "245px" },
                borderRadius: "20px",
              }}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#FEE280",
                height: "66px",
                color: "#000",
                fontSize: "20px",
                width: { xs: "80px", md: "195px" },
                borderRadius: "20px",
              }}
              onClick={handleNext}
            >
              Next
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CustomComponent;
