import { Stepper, Step, StepLabel, Button } from "@mui/material";
// import bgSideBarMobile from "../images/bg-sidebar-mobile.svg";
// import bgSidebarDesktop from "../images/bg-sidebar-desktop.svg";
import "../styling/multipartForm.scss";
import { useStepper } from "../hooks/hooks";

const steps = ["", "", "", ""];

const MulitPartFormComponent = () => {
  const { activeStep, component, setNextStep, setPreviousStep, screenSize } =
    useStepper();

  return (
    <main id="container">
      <div className="mulitpart-form-container">
        <img alt="background sidebar" id="bg-sidebar" />
        <div className="stepper-container">
          <Stepper
            activeStep={activeStep}
            orientation={`${screenSize <= 878 ? "horizontal" : "vertical"}`}
          >
            {steps.map((label, index) => {
              return (
                <Step key={`step_${index}`}>
                  <StepLabel>{}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div className="content-container">
          <div className="container">{component}</div>
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
