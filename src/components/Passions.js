import passions from '../styles/Passions.module.css'
import React , {useState} from 'react'
import button from '../styles/buttons.module.css'

let passionArray = ['music', 'wine', 'travel', 'sex', 'shopping', 'talking', 'running', 'dancing', 'gaming'];


export const Passions = () => {

    const Funy = (e) => {
        console.log("hey"+display)
        SetDisplay(!display);
        console.log("hey"+e.currentTarget)
        
    }
    let [displayPassions, setCurrent] = useState([''])
    let [display, SetDisplay] = useState(false)

    // buttons of current passions
    let currentPassions = displayPassions.map((x, i) => <div Key={i + 'current'}className={passions.normal}>{x}</div>);

    // buttons on overlay passions
    let allPassions = passionArray.map((x, i) => <div Key={i + 'passions'}className={passions.normal}  onClick={(e) => {console.log(e.currentTarget)}}>{x} </div>);


    return (
        <div className={passions.root} onClick={Funy}>
        {display && <div className={passions.overlay} onClick={Funy}>{allPassions}</div>}
                {currentPassions}
        </div>);
}

export default Passions;