import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({setCart, cart}) => {
    let total = cart.data.map((item) => item.price).reduce((acc, item) => acc + item, 0);

    return (  
        <nav className={styles.nav}>
            <div className={styles.item + ' ' + styles.price} onClick={() => setCart((prev) => ({
                ...prev,
                status: !prev.status
            }))}>
                <img src="assets/icons/cart.svg" className={styles.icon} alt="cart" />
                <h1>{total} руб.</h1>
            </div>
            <Link to={'/favorites'} className={styles.item}>
                <img src="assets/icons/favorite.svg" className={styles.icon} alt="cart" />
                <h1>Закладки</h1>
            </Link>
            <Link to={'/orders'} className={styles.item}>
                <img src="assets/icons/profile.svg" className={styles.icon} alt="cart" />
                <h1>Профиль</h1>
            </Link>
        </nav>
    );
}
 
export default Navigation;