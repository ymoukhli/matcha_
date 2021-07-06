import React from 'react'
import '../styles/loginOverlay.css'

function validateForm(event)
{
  event.preventDefault();

  console.log("submitttted");
  let formata = new FormData(document.getElementById("loginForm"))

  let userName = formata.get('userName');
  let passWord = formata.get('passWord');
  let patern = new RegExp(`^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`);
  let passwordPatern = new RegExp(`^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`);

  if (patern.test(userName))
  {
    console.log('username : valid')
  }
  else
  {
    console.log('username : invalid')
  }
  if (passwordPatern.test(passWord))
  {
    console.log('password : valid')
  }
  else
  {
    console.log('password : invalid')
  }
}

function onClickOutside(e, props)
{
  let divi = document.getElementById('log');
  if (e.target === divi)
    props.onClick(false);
}
export const LoginButton = function(props) {
    return (
        <div className="login-container" id="log" onClick={(e) => { onClickOutside(e, props)}}>
          <div className="login-overlay">
          <button className="backBtn" onClick={() => props.onClick(false)}>X</button>
          <h2>Log in</h2>
          <form id="loginForm" method="Post" onSubmit={validateForm}>
              <label htmlFor="userName">user name</label><br/>
              <input className="input" type="text" id="userName" name="userName" placeholder="user name" required={true}></input><br/>

              <label htmlFor="passWord">password</label><br/>
              <input className="input" type="password" id="passWord" name="passWord" placeholder="password" required={true}></input>
              <br/>
              <button className="btn" type="submit">log in</button>
          </form>
          </div>
        </div>);
}

export default LoginButton;