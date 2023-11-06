import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (  
        <nav className={styles.nav}>
            <div className={styles.item + ' ' + styles.price}>
                <img src="assets/icons/cart.svg" className={styles.icon} alt="cart" />
                <h1>1205 руб.</h1>
            </div>
            <div className={styles.item}>
                <img src="assets/icons/favorite.svg" className={styles.icon} alt="cart" />
                <h1>Закладки</h1>
            </div>
            <div className={styles.item}>
                <img src="assets/icons/profile.svg" className={styles.icon} alt="cart" />
                <h1>Профиль</h1>
            </div>
        </nav>
    );
}
 
export default Navigation;