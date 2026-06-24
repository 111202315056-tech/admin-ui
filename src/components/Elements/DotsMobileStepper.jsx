import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function DotsMobileStepper({ data }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { theme: themeMode } = useContext(ThemeContext);

  return (
    <>
      <div>{data[activeStep]}</div>
      <MobileStepper
        variant="dots"
        steps={data.length}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          "& .MuiMobileStepper-dot": { backgroundColor: "darkgray" },
          "& .MuiMobileStepper-dotActive": { backgroundColor: themeMode.color },
        }}
        nextButton={
          <Button size="small" onClick={() => setActiveStep((p) => p + 1)} disabled={activeStep === data.length - 1} sx={{ color: "black" }}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => setActiveStep((p) => p - 1)} disabled={activeStep === 0} sx={{ color: "black" }}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </>
  );
}