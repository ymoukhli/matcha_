import Nav from '../components/Nav.js'
import Images from '../components/Images.js'
import button from '../styles/buttons.module.css'
import forum from '../styles/Forum.module.css'
import Select from '../components/Select.js'
import Passions from '../components/Passions.js'

let gender = ['male', 'female', 'bitchs and stuff']

const passions = (e) => {
    e.preventDefault()
    console.log('yey')
}
export const Forum = () => {
    
    return (
        <div className={forum.root}>
            <Nav msg="fill information" form="infoForm"/>
            <Images/>
            <form className={forum.form} id="infoForm">
                <Select options={gender} label="select gender:"/>
                <Select options={gender} label="gender preference : "/>
                <button className={button.normal} onClick={passions} id="passionButton">passions</button>
                <Passions/>
                <label htmlFor="bio">biography</label>
                <textarea id="bio" rows="4"></textarea>
            </form>
        </div>
    )
}

export default Forum;