import styles from "./Layout.module.scss"
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Drawer from "../Drawer"

const Layout = ({setCart, cart, setOrders}) => {
    return (  
        <div className={styles.wrapper}>
            <Header setCart={setCart} cart={cart}/>
            <Outlet />
            <Drawer status={'default'} cart={cart} setCart={setCart} setOrders={setOrders}/>
        </div>
    );
}
 
export default Layout;