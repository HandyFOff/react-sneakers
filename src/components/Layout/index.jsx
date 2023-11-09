import styles from "./Layout.module.scss"
import Header from "../Header";

const Layout = ({children, setCart, cart}) => {
    return (  
        <div className={styles.wrapper}>
            <Header setCart={setCart} cart={cart}/>
            {children}
        </div>
    );
}
 
export default Layout;