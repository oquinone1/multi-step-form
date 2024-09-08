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

import PersonalInfoComponent from "../components/personalInfo";
import SelectPlanComponent from "../components/selectPlan";
import PickAddOnsComponent from "../components/pickAddOns";
import SummaryComponent from "../components/summary";
import CompletedFormComponent from "../components/completedForm";
import { Sections, ScreenSize } from "../extras/enums";

const steps: Record<string, string>[] = [
  { step: "STEP 1", content: "YOUR INFO" },
  { step: "STEP 2", content: "SELECT PLAN" },
  { step: "STEP 3", content: "ADD-ONS" },
  { step: "STEP 4", content: "SUMMARY" },
];

const MulitPartFormComponent = () => {
  const {
    activeStep,
    setNextStep,
    setPreviousStep,
    screenSize,
    allowUserToChangePlan,
  } = useStepper();

  return (
    <section id="multipart-form-outer-container">
      <div className="mulitpart-form-inner-container">
        <aside
          className="stepper-container"
          aria-label="Multi-step form progress display"
        >
          <Stepper
            className="stepper-container-list"
            activeStep={activeStep}
            orientation={`${
              screenSize <= ScreenSize.MobileScreen ? "horizontal" : "vertical"
            }`}
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
                      {screenSize <= ScreenSize.MobileScreen ? "" : step.step}
                    </Typography>
                  </StepLabel>
                  {screenSize <= ScreenSize.MobileScreen ? null : (
                    <StepContent className="step-content">
                      <Typography variant="body1" color="#fff">
                        {step.content}
                      </Typography>
                    </StepContent>
                  )}
                </Step>
              );
            })}
          </Stepper>
        </aside>
        <section className="content-container">
          <section className="current-selection-component-container">
            {activeStep === Sections.PersonalInfo ? (
              <PersonalInfoComponent />
            ) : null}
            {activeStep === Sections.SelectPlan ? (
              <SelectPlanComponent />
            ) : null}
            {activeStep === Sections.PickAddOns ? (
              <PickAddOnsComponent />
            ) : null}
            {activeStep === Sections.Summary ? (
              <SummaryComponent allowUserToChangePlan={allowUserToChangePlan} />
            ) : null}
            {activeStep === Sections.Completed ? (
              <CompletedFormComponent />
            ) : null}
          </section>
          {activeStep < Sections.Completed ? (
            <nav
              className="buttons-outer-container"
              aria-label="Multi-step form navigation buttons"
            >
              <Button
                disabled={activeStep === Sections.PersonalInfo}
                onClick={() => setPreviousStep()}
                sx={{ mr: 1 }}
                id="btn-go-back"
              >
                Go Back
              </Button>

              <Button onClick={() => setNextStep()} id="btn-next">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </nav>
          ) : null}
        </section>
      </div>
    </section>
  );
};

export default MulitPartFormComponent;
