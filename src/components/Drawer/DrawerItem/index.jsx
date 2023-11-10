import { useContext } from 'react';
import { API } from '../../App';
import styles from './DrawerItem.module.scss'
import { AppContext } from '../../../context';
import axios from 'axios';

const DrawerItem = ({id, title, image, price, parentId}) => {
    const {cart, setCart} = useContext(AppContext);

    console.log(id);
    
    const removeItem = async () => {
        const response = await axios.get(`${API}cart`);
        console.log(response.data);
        const filterId = response.data.filter((item) => +item.id === +id);

        console.log(cart, response.data, parentId);

        await axios.delete(`${API}cart/${filterId[0].id}`);
        
        setCart((prev) => ({
            ...prev,
            data: prev.data.filter((item) => item.id !== parentId),
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