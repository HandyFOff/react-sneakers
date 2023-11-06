import Navigation from '../Navigation';
import styles from './Header.module.scss'

const Header = () => {
    return (  
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="assets/logo.svg" alt="logo" />
            </div>
            <Navigation/>
        </header>
    );
}
 
export default Header;