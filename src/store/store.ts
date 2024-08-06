import { create } from "zustand";

export const useStore = create((set) => ({
  name: "",
  email: "",
  phoneNumber: "",
  monthlyOrYearlyPlan: false,
  planSelected: "",
  price: 0,
  onlineService: false,
  onlineServicePrice: 0,
  largerStorage: false,
  largerStoragePrice: 0,
  customizableProfile: false,
  customizableProfilePrice: 0,

  setName: (newName: string) => set({ name: newName }),
  setEmail: (newEmail: string) => set({ email: newEmail }),
  setPhoneNumber: (newNumber: number) => set({ phoneNumber: newNumber }),
  setMonthlyOrYearlyPlan: (typeOfPlan: boolean) =>
    set({ monthlyOrYearlyPlan: typeOfPlan }),
  setPlan: (plan: string) => set({ planSelected: plan }),
  setOnlineService: (service: boolean) => set({ onlineService: service }),
  setOnlineServicePrice: (price: number) => set({ onlineServicePrice: price }),
  setLargerStorage: (storage: boolean) => set({ largerStorage: storage }),
  setLargerStoragePrice: (price: number) => set({ largerStoragePrice: price }),
  setCustomizableProfile: (customizable: boolean) =>
    set({ customizableProfile: customizable }),
  setCustomizableProfilePrice: (price: number) =>
    set({ customizableProfilePrice: price }),
  setPrice: (price: Number) => set({ price: price }),
}));
