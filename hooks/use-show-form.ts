import { create } from "zustand";

interface UserDataTypes {
  name: string;
  surname: string;
  dni: string;
  streetAddress: string;
  houseNumber: string;
  city: string;
  province: string;
  zipCode: string;
  phoneNumberA: string;
  emailA: string;
}

interface FormStore {
  isOpen: boolean;
  userData: UserDataTypes;
  isFormCompleted: boolean;
  onCompleteForm: () => void;
  onOpen: () => void;
  onClose: () => void;
  setUserData: (userData: UserDataTypes) => void;
}

const useShowForm = create<FormStore>((set) => ({
  isOpen: false,
  isFormCompleted: false,
  userData: {
    name: "",
    surname: "",
    dni: "",
    streetAddress: "",
    houseNumber: "",
    city: "",
    province: "",
    zipCode: "",
    phoneNumberA: "",
    emailA: "",
  },
  onCompleteForm: () => set({ isFormCompleted: true }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setUserData: (userData: UserDataTypes) => set({ userData }),
}));

export default useShowForm;
