import React, { useEffect } from "react";
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
import { useChild } from "../context/ChildContext";

const CustomComponent = ({
  handleBack,
  currentIndex,
  chipOptions1,
  selectedChipOptions,
  handleChipToggle,
  handleSkip,
  handleNext,
  // otherInput,
  // setOtherInput,
  // nextOtherInput,
  // setNextOtherInput,
  value11, // New prop for passing the value 11
  textFieldPlaceholder,
  setInputText,
  inputText,
  age,
  selectedIndex,
  handleSubmit,
  totalOptions, // Total number of chipOptions
  value,
  handleCloseModalsecond,
  setSelectedChipOptions,
  onChange,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const {
    childrenData,
    addChild,
    updateChild,
    deleteChild,
    selectChild,
    selectedChildId,
  } = useChild();
  // useEffect(() => {
  //   let questionToFind = chipOptions1[currentIndex].question;

  //   let foundObject = selectedChildId?.questions.find(
  //     (obj) => obj?.question === questionToFind
  //   );

  //   console.log("founded Object", foundObject?.answer);

  //   let answer = foundObject?.answer;
  //   if (answer) {
  //     setSelectedChipOptions([...answer]);
  //   }

  //   console.log("founded object are ", foundObject);
  //   console.log("answers  are ", answer);

  // }, [selectedChildId]);

  useEffect(() => {
    if (chipOptions1.length > 0) {
      let questionToFind = chipOptions1[currentIndex]?.question;

      let foundObject = selectedChildId?.questions.find(
        (obj) => obj?.question === questionToFind
      );

      console.log("founded Object", foundObject?.answer);

      let answer = foundObject?.answer;
      let options = foundObject?.options;
      let inputtext = foundObject?.inputtext;

      if (answer) {
        setSelectedChipOptions([...answer]);
      }
      if (options === null && inputtext) {
        setInputText(answer);
      }

      
      console.log("founded object are ", foundObject);
      console.log("answers are ", answer);
    }
  }, [selectedChildId, currentIndex, chipOptions1]);

  // console.log('selected option from update section', selectedChipOptions);

  const isLastSix =
    selectedIndex >= totalOptions - 6 &&
    chipOptions1.length === currentIndex + 1;
  // console.log(chipOptions1);

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
              onClick={() =>
                handleChipToggle(
                  chip.label,
                  chipOptions1[currentIndex].question,
                  chipOptions1[currentIndex].chiper
                )
              }
              sx={{
                height: { xs: 25, md: 40 },
                fontSize: { xs: 12, md: 16 },
                backgroundColor: selectedChipOptions.includes(
                  chip.label
                    .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, "")
                    .trim()
                ) // Change background based on selection
                  ? "black" // Selected color
                  : "#EEEEEE", // Default color
                color: selectedChipOptions.includes(
                  chip.label
                    .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, "")
                    .trim()
                )
                  ? "white" // Text color when selected
                  : "black", // Default text color
                paddingLeft: "5px",
                paddingRight: "5px",
                "&:hover": {
                  backgroundColor: selectedChipOptions.includes(
                    chip.label
                      .replace(/[\p{Emoji_Presentation}\p{Emoji}\u200D]/gu, "")
                      .trim()
                  )
                    ? "black" // Keep the same color on hover if selected
                    : "#EEEEEE", // Default hover color
                },
              }}
            />
          ))
        )}
      </Box>
      {/* {selectedChipOptions.some((option) =>
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
      )} */}

      {/* {chipOptions1[currentIndex + 1]?.chiper.some(
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
        )} */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 4,
        }}
      >
        {isLastSix ? ( // Conditionally show "Submit" button if in the last 6
          <>
            {/* <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#000", // Green for submit
              height: "66px",
              color: "#fff",
              fontSize: "20px",
              width: { xs: "80px", md: "332px" },
              borderRadius: "20px",
            }}
            onClick={handleSubmit} // New submit action
          >
            Add Child
          </Button> */}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                mt: 4,
                position: "absolute",
                bottom: "30px",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#000", // Green for submit
                  height: "66px",
                  color: "#fff",
                  fontSize: "20px",
                  width: { xs: "80px", md: "332px" },
                  borderRadius: "20px",
                }}
                onClick={handleSubmit} // New submit action
              >
                Save Changes
              </Button>
            </Box>
          </>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 4,
          position: "absolute",
          bottom: "30px",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#222222", // Green for submit
            height: "66px",
            color: "#fff",
            fontSize: "20px",
            width: { xs: "80px", md: "200px" },
            borderRadius: "20px",
          }}
          onClick={handleCloseModalsecond} // New submit action
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default CustomComponent;
