import {
  Stepper,
  Step,
  StepLabel,
  Button,
  StepContent,
  Typography,
} from "@mui/material";
import "../styling/multipartForm.scss";
import { useStepper } from "../hooks/hooks";

const steps: Record<string, string>[] = [
  { step: "STEP 1", content: "YOUR INFO" },
  { step: "STEP 2", content: "SELECT PLAN" },
  { step: "STEP 3", content: "ADD-ONS" },
  { step: "STEP 4", content: "SUMMARY" },
];

const MulitPartFormComponent = () => {
  const { activeStep, component, setNextStep, setPreviousStep, screenSize } =
    useStepper();

  return (
    <main id="container">
      <div className="mulitpart-form-container">
        <div className="stepper-container">
          <Stepper
            className="stepper-container-list"
            activeStep={activeStep}
            orientation={`${screenSize <= 878 ? "horizontal" : "vertical"}`}
          >
            {steps.map((step: Record<string, string>, index: number) => {
              return (
                <Step
                  key={`step_${index}`}
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed": {
                      color: "white",
                    },
                    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                      {
                        color: "white",
                      },
                    "& .MuiStepLabel-root .Mui-active": {
                      color: "white",
                    },
                    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                      {
                        color: "#38a832",
                      },
                    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                      fill: "#000",
                    },
                  }}
                >
                  <StepLabel
                    className="stepper-label"
                    sx={{ color: "#fff", fontSize: "25px" }}
                  >
                    <Typography variant="caption" color="#fff">
                      {screenSize <= 879 ? "" : step.step}
                    </Typography>
                  </StepLabel>
                  <StepContent className="step-content">
                    <Typography variant="body1" color="#fff">
                      {screenSize <= 879 ? "" : step.content}
                    </Typography>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div className="content-container">
          <div className="component-container">{component}</div>
          {activeStep < 4 ? (
            <footer className="buttons-outer-container">
              <Button
                disabled={activeStep === 0}
                onClick={() => setPreviousStep()}
                sx={{ mr: 1 }}
                id="btn-go-back"
              >
                Go Back
              </Button>

              <Button onClick={() => setNextStep()} id="btn-next">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </footer>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default MulitPartFormComponent;
