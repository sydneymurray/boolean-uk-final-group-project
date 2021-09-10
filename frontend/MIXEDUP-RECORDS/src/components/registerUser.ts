import {REGISTER_NEW_USER} from "./dbURLS"
import { History } from "../../node_modules/@types/history/index"
import { ModalData } from "../Hooks/Store"

export default function registerUser(newUser:{}, history: History<unknown>, setModal: (modalName: string, modalData?: ModalData) => void){
  fetch(REGISTER_NEW_USER,{
    credentials: "include",
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(newUser)
  })
  .then(res=>{
    if (res.ok) {
      setModal("")
      history.push("/search")
    }else setModal("signupFailed")
  })
}




