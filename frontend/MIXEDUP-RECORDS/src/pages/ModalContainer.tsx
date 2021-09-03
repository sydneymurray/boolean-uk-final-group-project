import { useStore } from "../Hooks/Store";
import React from "react";
import Modal from "../components/SignUpModal";

type modal = {
  [index: string]: null | (() => JSX.Element);
};

const modals: modal = {
  "": null,
  newUser: Modal,
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
