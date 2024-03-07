import styles from "./button.module.css"
const Button=(props)=>{

    return(
        <button className={`${styles.button} ${props.className}`} type={props.type} onClick={props.onClick}>{props.label}</button>
    )

}

export default Button