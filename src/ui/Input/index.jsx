import styles from "./Input.module.scss"

const Input = () => {
    return (  
        <div className={styles.inputBlock}>
            <img src="assets/icons/search.svg" alt="Search" className={styles.icon}/>
            <input type="text" placeholder="Поиск..." className={styles.input}/>
        </div>
    );
}
 
export default Input;