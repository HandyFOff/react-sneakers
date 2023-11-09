import { API } from '../../App';
import styles from './DrawerItem.module.scss'

const DrawerItem = (props) => {
    
    const removeItem = (id) => {
        props.setCart((prev) => ({
            ...prev,
            data: prev.data.filter((item) => item.id !== id)
        }));

        console.log(props.itemId, ' ', id);

        fetch(`${API}cart/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
            }
        })
    }

    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={props.image} alt="Sneakers" />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{props.title}</h1>
                <h1 className={styles.price}>{props.price} руб.</h1>
            </div>
            <button className={styles.btn} onClick={() => removeItem(props.id)}>
                <img src="assets/icons/remove.svg" alt="Remove Item" />
            </button>
        </div>
    );
}

export default DrawerItem;