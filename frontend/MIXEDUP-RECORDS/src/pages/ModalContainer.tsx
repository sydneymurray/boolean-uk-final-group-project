import { useStore } from "../Hooks/Store";
import React from "react";
import SignUpModal from "../components/SignUpModal";
import IncorrectLoginModal from "../components/IncorrectLoginModal"

type modal = {
  [index: string]: null | (() => JSX.Element);
};

const modals: modal = {
  "": null,
  newUser: SignUpModal,
  wrongDetails: IncorrectLoginModal
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
