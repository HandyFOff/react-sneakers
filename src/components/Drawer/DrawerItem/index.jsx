import { API } from '../../App';
import styles from './DrawerItem.module.scss'

const DrawerItem = ({id, title, image, price, parentId, setCart}) => {
    
    const removeItem = async () => {
        const response = await fetch(`${API}cart`).then((res) => res.json());
        const filterId = response.filter((item) => +item.parentId === +id);

        await fetch(`${API}cart/${filterId[0].id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
            }
        });

        setCart((prev) => ({
            ...prev,
            data: prev.data.filter((item) => item.id !== id)
        }));
    }

    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={image} alt="Sneakers" />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <h1 className={styles.price}>{price} руб.</h1>
            </div>
            <button className={styles.btn} onClick={removeItem}>
                <img src="assets/icons/remove.svg" alt="Remove Item" />
            </button>
        </div>
    );
}

export default DrawerItem;