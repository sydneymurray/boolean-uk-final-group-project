import { useStore } from "../Hooks/Store";
import React from "react";

import SignUpModal from "../components/SignUpModal";
import IncorrectLoginModal from "../components/IncorrectLoginModal";
import FavouriteDetailsModal from "../components/FavouriteDetailsModal"

type modal = {
  [index: string]: null | (() => JSX.Element);
};

const modals: modal = {
  "": null,
  newUser: SignUpModal,
  wrongDetails: IncorrectLoginModal,
  favouriteDetails: FavouriteDetailsModal
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
