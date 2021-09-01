import create from "zustand";

type Store = {
  modal: string;
  setModal: (modalName: string) => void;
};

export const useStore = create<Store>((set, get) => ({
  modal: "",
  setModal: (modalName: string) => {
    set((store) => ({
      modal: modalName,
    }));
  },
}));
