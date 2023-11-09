import { useState } from "react";
import DefaultDrawer from "./DefaultDrawer";
import styles from "./Drawer.module.scss"
import EmptyDrawer from "./EmptyDrawer";
import SuccsesfulDrawer from "./SuccsesfulDrawer";

const Drawer = ({cart, setCart, setOrders}) => {

    const [status, setStatus] = useState(false)

    const handlerDrawer = (e) => {
        if (!e.target.dataset.drawer) return null
        setCart((prev) => ({
            ...prev,
            status: prev.status = false
        }));
    }

    return (
        <div className={styles.overlay} onClick={handlerDrawer} data-drawer={cart.status}>
            <div className={styles.drawer}>
                <h1 className={styles.title}>Корзина</h1>
                {status ? <SuccsesfulDrawer setCart={setCart} setStatus={setStatus}/> : cart.data.length ? <DefaultDrawer setOrders={setOrders} cart={cart} setCart={setCart} setStatus={setStatus}/> : <EmptyDrawer setCart={setCart}/>}
            </div>
        </div>
    );
}

export default Drawer;