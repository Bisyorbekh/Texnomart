import React, {useState} from 'react'
import s from "./Login.module.css"
import { auth, provider, firebase } from "../../server/index"
import {useStateValue} from "../../context/index"
import { useHistory } from "react-router-dom"


function Login() {
  const [phoneNumber, setPhoneNumber] = useState("+998")

  const [state, dispatch] = useStateValue()
  const history = useHistory()
  // action == dispatch
  
  const signWithGoogle = ()=>{
    auth.signInWithPopup(provider)
      .then(res=> {
        dispatch({type: "ADD_USER", payload: res.user})
        localStorage.setItem("user", JSON.stringify(res.user))
        history.push("/admin")
      } )
      .catch(err=> console.log(err))
  }
  const signWithPhone = ()=>{
    const recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha_container")
    firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, recaptcha)
    .then(res=>{
      let code = prompt("Enter code")
      res.confirm(code)
      .then(user=> {
        dispatch({type: "ADD_USER", payload: user.user})
        localStorage.setItem("user", JSON.stringify(user.user))
        history.push("/admin")
      })
      .catch(err=> console.log(err))
    })
  }

 
  return (
    <div className={s.login}>
      <h1>Login</h1>
        <div className={s.kirish}>
          <h3 className={s.title_kirish}>Kirish</h3>
          <h3 className={s.royxatdan}>Ro'yxatdan o'tish</h3>
          <input value={phoneNumber} onChange={e=> setPhoneNumber(e.target.value)} className={s.input} type="text"  />
          <button onClick={signWithGoogle} className={s.login_kirish}>Login orqali kirish</button>
          <p onClick={signWithPhone} className={s.tel_or}>Telefon orqali kirish</p>
        </div>
    </div>
  )
}
export default Login