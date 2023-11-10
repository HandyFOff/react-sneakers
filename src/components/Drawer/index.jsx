import { useContext, useState } from "react";
import DefaultDrawer from "./DefaultDrawer";
import styles from "./Drawer.module.scss"
import EmptyDrawer from "./EmptyDrawer";
import SuccsesfulDrawer from "./SuccsesfulDrawer";
import { AppContext } from "../../context";

const Drawer = () => {

    const {cart, setCart} = useContext(AppContext);

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
                <div className={styles.nav}>
                    <h1 className={styles.title}>Корзина</h1>
                    <img src="assets/icons/remove.svg" alt="" onClick={() => setCart((prev) => ({...prev, status: false}))}/>
                </div>
                {status ? <SuccsesfulDrawer setStatus={setStatus}/> : cart.data.length ? <DefaultDrawer setStatus={setStatus}/> : <EmptyDrawer/>}
            </div>
        </div>
    );
}

export default Drawer;