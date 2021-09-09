import React, { SyntheticEvent } from "react";
import registerUser from "./registerUser"
import "../styles/modalStyling.css";
import { useStore } from "../Hooks/Store";



export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal);
  //const setUser = useStore((store) => store.setUser);
  
  function registerNewUser(event: SyntheticEvent){
    event.preventDefault();
    const {
      newUsersName: name,
      newUsername: username,
      newUsersEmail: email,
      newUserPassword: password,
    } = event.target as HTMLFormElement

    const newUser = {
      name: name,
      username: username,
      email: email,
      password: password
    }
    
    registerUser(newUser).then(data => {
      setModal("")
      alert("Login username "+data.user.username+" succesfully created "+data.user.id)
    })
  }

  return (
    <form onSubmit={registerNewUser} className="modal-bg">
      <div className="modal">
        <h1>Sign up</h1>
        <label htmlFor="name">Name: </label>
        <input className="newUsersName" type="text" name="name" required />

        <label htmlFor="name">User Name: </label>
        <input className="newUsername" type="text" name="name" required />

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
