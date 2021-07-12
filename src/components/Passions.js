import passions from '../styles/Passions.module.css'
import React , {useState} from 'react'
import button from '../styles/buttons.module.css'

let passionArray = ['music', 'wine', 'travel', 'sex', 'shopping', 'talking', 'running']
export const Passions = () => {

    let [displayPassions, setCurrent] = useState(passionArray)
    let currentPassions = displayPassions.map((x, i) => <div Key={i}className={passions.normal}>{x}</div>);
    return (<div className={passions.root} onClick={(e) => console.log(e.currentTarget)}>
        {currentPassions}
        </div>);
}

export default Passions;