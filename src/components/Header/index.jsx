import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import styles from './Header.module.scss'

const Header = ({setCart, cart}) => {
    return (  
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img src="assets/logo.svg" alt="logo" />
            </Link>
            <Navigation setCart={setCart} cart={cart}/>
        </header>
    );
}
 
export default Header;