import { useStore } from "../Hooks/Store";
import React from "react";

import SignUpModal from "../components/SignUpModal";
import IncorrectLoginModal from "../components/IncorrectLoginModal";

import SellItemModal from "../components/SellItemModal";
import SuccessfulListingModal from "../components/SuccessfulListingModal"
import FailedListingModal from "../components/FailedListingModal"
import FavouriteDetailsModal from "../components/FavouriteDetailsModal"
import FailedSignUpModal from "../components/FailedSignUpModal"


type modal = {
  [index: string]: null | (() => JSX.Element | null);
};

const modals: modal = {
  "": null,
  newUser: SignUpModal,
  wrongDetails: IncorrectLoginModal,
  sellItem: SellItemModal,
  newListing: SuccessfulListingModal,
  listingFailed: FailedListingModal,
  favouriteDetails: FavouriteDetailsModal,
  signupFailed: FailedSignUpModal
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
