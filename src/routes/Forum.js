import Nav from '../components/Nav.js'
import Images from '../components/Images.js'
import button from '../styles/buttons.module.css'
import forum from '../styles/Forum.module.css'
import Select from '../components/Select.js'
import Passions from '../components/Passions.js'
import TextArea from '../components/TextArea.js'

let gender = ['male', 'female', 'bitchs and stuff']

export const Forum = () => {
    
    return (
        <div className={forum.root}>
            <Nav msg="fill information" form="infoForm"/>
            <Images/>
            <form className={forum.form} id="infoForm">
                <Select options={gender} label="select gender:"/>
                <Select options={gender} label="gender preference : "/>
                <Passions/>
                <TextArea/>
            </form>
        </div>
    )
}

export default Forum;