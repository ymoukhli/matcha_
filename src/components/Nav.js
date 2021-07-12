import button from '../styles/buttons.module.css'
import nav from '../styles/Nav.module.css'


export const Nav = (props) => {
    
    return (
        <nav className={nav.nav}>
            <p className={nav.text}>{props.msg}</p>
            <button className={`${nav.third} ${button.small}`} form={props.form}>done</button>
        </nav>
    )
}

export default Nav