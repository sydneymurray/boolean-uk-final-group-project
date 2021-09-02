import create from "zustand";

type Store = {
  modal: string;
  setModal: (modalName: string) => void;

  // newUser: newUserType | null;
  // setUser: (newUser: newUserType) => void;
};

// type newUserType = {
//   userName: string;
//   email: string;
//   password: string;
// };

export const useStore = create<Store>((set, get) => ({
  modal: "",
  setModal: (modalName: string) => {
    set((store) => ({
      modal: modalName,
    }));
  },

  // newUser: null,
  // setUser: (user: newUserType) => {
  //   set((store) => ({
  //     newUser: user,
  //   }));
  // },
}));
