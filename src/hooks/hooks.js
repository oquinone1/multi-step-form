import { useEffect, useState } from "react";
import PersonalInfoComponent from "../components/personalInfo";
import SelectPlanComponent from "../components/selectPlan";
import PickAddOnsComponent from "../components/pickAddOns";
import SummaryComponent from "../components/summary";
import CompletedFormComponent from "../components/completedForm";
import { useStore } from "../store/store";
const items = [
  <PersonalInfoComponent />,
  <SelectPlanComponent />,
  <PickAddOnsComponent />,
  <SummaryComponent />,
  <CompletedFormComponent />,
];

// logic for stepper
export function useStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [component, setComponent] = useState(items[0]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const setWidth = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", setWidth);
    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  const setNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const setPreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    setComponent(items[activeStep]);
  }, [activeStep]);

  return {
    activeStep,
    component,
    setNextStep,
    setPreviousStep,
    screenSize,
  };
}

const plans = ["Arcade", "Advanced", "Pro"];
const prices = [9, 12, 15];
export function useSelectPlan() {
  const store = useStore();

  const setSelectedPlan = (plan) => {
    const price = store.monthlyOrYearlyPlan ? prices[plan] * 10 : prices[plan];
    store.setPlan(plans[plan]);
    store.setPrice(price);
  };

  const monthlyOrYearlyPlan = () => {
    store.setMonthlyOrYearlyPlan(!store.monthlyOrYearlyPlan);
    if (store.planSelected) {
      let price = !store.monthlyOrYearlyPlan
        ? store.price * 10
        : store.price / 10;
      store.setPrice(price);
    }
  };
  return { setSelectedPlan, monthlyOrYearlyPlan };
}

export function usePickAddOns() {
  const store = useStore();

  useEffect(() => {
    if (store.onlineService) setOnlineServicePrice();
    if (store.largerStorage) setLargerStoragePrice();
    if (store.customizableProfile) setCustomizableProfilePrice();
    // eslint-disable-next-line
  }, []);

  const setOnlineService = () => {
    setOnlineServicePrice();
    store.setOnlineService(!store.onlineService);
  };

  const setOnlineServicePrice = () => {
    const price = store.monthlyOrYearlyPlan ? 10 : 1;
    store.setOnlineServicePrice(price);
  };

  const setLargerStorage = () => {
    setLargerStoragePrice();
    store.setLargerStorage(!store.largerStorage);
  };

  const setLargerStoragePrice = () => {
    const price = store.monthlyOrYearlyPlan ? 20 : 2;
    store.setLargerStoragePrice(price);
  };

  const setCustomizableProfile = () => {
    setCustomizableProfilePrice();
    store.setCustomizableProfile(!store.customizableProfile);
  };

  const setCustomizableProfilePrice = () => {
    const price = store.monthlyOrYearlyPlan ? 20 : 2;
    store.setCustomizableProfilePrice(price);
  };

  return {
    setOnlineService,
    setLargerStorage,
    setCustomizableProfile,
  };
}
