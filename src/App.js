import style from './App.module.css';
import button from './styles/buttons.module.css'
import LoginOverlay from './components/loginOverlay'
import SignupOverlay from './components/SignupOverlay'
import logo from './images/matchaDark.png'
import React, { useState } from 'react'

export function App() {
  const [login, setLogin] = useState(false);
  const [Signin, setSignin] = useState(false);
  console.log(login)
  
  return (
    <div>
    {login && <LoginOverlay onClick={setLogin}/>}
    {Signin && <SignupOverlay onClick={setSignin}/>}
    <nav className={style.nav}>
        <img className={style.navImg} src= {logo} alt=""/>
        <button className={button.nav}  onClick={() => setLogin(true)}>log in</button>
      </nav>
      <div className={style.homePage}>
        <h1>meet new faces</h1>
        <button className={button.normal} onClick={() => setSignin(!Signin)}>create your account</button>
      </div>
      <p>Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks</p>
      <p>There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.</p>
    </div>
  );
}

export default App;
