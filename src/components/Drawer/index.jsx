import Button from "../../ui/Button";
import DefaultDrawer from "./DefaultDrawer";
import styles from "./Drawer.module.scss"
import EmptyDrawer from "./EmptyDrawer";
import SuccsesfulDrawer from "./SuccsesfulDrawer";

const Drawer = ({status}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h1 className={styles.title}>Корзина</h1>
                {status === "empty" ? <EmptyDrawer/> : status === "succsesful" ? <SuccsesfulDrawer/> : <DefaultDrawer/>}
            </div>
        </div>
    );
}

export default Drawer;