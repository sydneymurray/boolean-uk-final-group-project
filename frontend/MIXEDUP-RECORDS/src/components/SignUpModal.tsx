import React, { SyntheticEvent } from "react";
import registerUser from "./registerUser"
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";
import { useHistory } from "react-router-dom";



export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  const history = useHistory();
  
  function registerNewUser(event: SyntheticEvent){
    event.preventDefault();
    const {
      formalName: name,
      username: username,
      email: email,
      password: password,
    } = event.target as HTMLFormElement

    const newUser = {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value
    }
    
    
    registerUser(newUser, history, setModal)
  }

  return (
    <form onSubmit={registerNewUser} className="modal-bg">
      <div className="modal">
        <h1>Sign up</h1>
        <label htmlFor="name">Name: </label>
        <input className="newUsersName" type="text" name="formalName" required />

        <label htmlFor="name">User Name: </label>
        <input className="newUsername" type="text" name="username" required />

        <label htmlFor="name">Email: </label>
        <input className="newUsersEmail" type="email" name="email" required />
        <label htmlFor="password">Password: </label>
        <input className="newUserPassword" type="password" name="password" required/>

        <button type="submit" className="modalJoinButton">Join</button>

        <span className="modalClose" onClick={() => {setModal("")}}>
          ❎
        </span>
      </div>
    </form>
  );
}
