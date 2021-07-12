import React, { useState } from 'react'
import button from '../styles/buttons.module.css'
import input from '../styles/inputs.module.css'
import style from '../styles/styles.module.css'
import signin from '../styles/signupOverlay.module.css'

function onClickOutside(e, props)
{
  let divi = document.getElementById('log');
  if (e.target === divi)
    props.onClick(false);
}

export const SignupOverlay = function(props) {

    let [message, SetMessage] = useState("");
    let [userError, SetuserError] = useState(false);
    let [passError, SetpassError] = useState(false);

    function validateForm(event)
    {
      event.preventDefault();

      console.log("submitttted");
      let formata = new FormData(document.getElementById("loginForm"))

      let userName = formata.get('userName');
      let passWord = formata.get('passWord');
      let patern = new RegExp(`^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`);
      let passwordPatern = new RegExp(`^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`);

      // add message handler
      if (patern.test(userName))
      {
        SetuserError(false);
      }
      else
      {
        SetuserError(true);
        if (userName.length > 20 || userName.length < 5){
          SetMessage(`user name should be from 5 to 20 character`);
        }
        else{
          SetMessage(`only '.' and '_' are alowed. no symbol should be at the end at the start no consucitive symblos`);
        }
      }
      if (passwordPatern.test(passWord))
      {
        SetpassError(false);
      }
      else
      {
        SetpassError(true);
        if (passWord.length > 20 || passWord.length < 5){
          SetMessage(`password should be from 5 to 20 character`);
        }
        else{
          SetMessage(`only '.' and '_' are alowed. no symbol should be at the end at the start no consucitive symblos`);
        }
      }
    }


    return (<div className={signin.Container} id="log" onClick={(e) => { onClickOutside(e, props)}}>
          <div className={signin.Overlay}>
          <button className={signin.backBtn} onClick={() => props.onClick(false)}>X</button>
          <div className={signin.Center}>
          {userError && <div className={style.error}>{message}</div>}
          {passError && <div className={style.error}>{message}</div>}
          <h2 className={signin.h2}>Create your account</h2>
          <form className={signin.Center} id="loginForm" method="Post" onSubmit={(e) => validateForm(e)}>

              <label className={signin.label} htmlFor="firstName">first name</label>
              <input className={signin.input} type="text" id="firstName" name="firstName" placeholder="first name" required={true}></input><br/>

              <label className={signin.label}  htmlFor="lastName">last name</label>
              <input className={signin.input} type="text" id="lastName" name="lastName" placeholder="last name" required={true}></input><br/>

              <label className={signin.label}  htmlFor="userName">user name</label>
              <input className={signin.input} type="text" id="userName" name="userName" placeholder="user name" required={true}></input><br/>


              <label className={signin.label}  htmlFor="email">email</label>
              <input className={signin.input} type="email" id="email" name="email" placeholder="email" required={true}></input><br/>

              <label className={signin.label}  htmlFor="passWord">password</label>
              <input className={signin.input} type="password" id="passWord" name="passWord" placeholder="password" required={true}></input>
              <br/>
              <button className={button.normal} type="submit">Create</button>
          </form>
          </div>
          </div>
        </div>);
}

export default SignupOverlay;