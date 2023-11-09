import Navigation from '../Navigation';
import styles from './Header.module.scss'

const Header = ({setCart, cart}) => {
    return (  
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="assets/logo.svg" alt="logo" />
            </div>
            <Navigation setCart={setCart} cart={cart}/>
        </header>
    );
}
 
export default Header;