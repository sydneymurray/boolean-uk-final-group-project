import {REGISTER_NEW_USER} from "./dbURLS"

export default async function registerUser(newUser:{}){
  let response: any = await fetch(REGISTER_NEW_USER,{
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(newUser)
  })
  let responseData = await response.json()
  return responseData
}




