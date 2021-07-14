import Nav from '../components/Nav.js'
import Images from '../components/Images.js'
import button from '../styles/buttons.module.css'
import input from '../styles/inputs.module.css'
import forum from '../styles/Forum.module.css'
import Select from '../components/Select.js'
import Passions from '../components/Passions.js'
import TextArea from '../components/TextArea.js'

let gender = ['male', 'female', 'bitchs and stuff']

export const EditInfo = () => {
    
    return (
        <div className={forum.root}>
            <Nav msg="edit Info" form="infoForm"/>
            <Images/>
            <form className={forum.form} id="infoForm">
            <label htmlFor="firstName">first name</label>
              <input className={input.normal} type="text" id="firstName" name="firstName" placeholder="first name"></input><br/>

              <label  htmlFor="lastName">last name</label>
              <input className={input.normal} type="text" id="lastName" name="lastName" placeholder="last name"></input><br/>

              <label  htmlFor="userName">user name</label>
              <input className={input.normal} type="text" id="userName" name="userName" placeholder="user name"></input><br/>


              <label  htmlFor="email">email</label>
              <input className={input.normal} type="email" id="email" name="email" placeholder="email"></input><br/>

              <label  htmlFor="passWord">password</label>
              <input className={input.normal} type="password" id="passWord" name="passWord" placeholder="password"></input>
                
              
                <Select options={gender} label="select gender:"/>
                <Select options={gender} label="gender preference : "/>
                <Passions/>
                <TextArea/>
            </form>
        </div>)
}

export default EditInfo;