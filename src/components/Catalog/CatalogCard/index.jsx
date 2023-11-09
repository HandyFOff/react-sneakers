import styles from './CatalogCard.module.scss';
import { API } from '../../App';
import { useState } from 'react';

const CatalogCard = ({id, title, price, image, added, setCart, cart, parentId}) => {
    const [isAdded, setIsAdded] = useState(added)

    const handlerAddToCart = async () => {
        await fetch(`${API}/cart`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({id, title, price, image, parentId}),
        });

        setCart((prev) => ({
            ...prev,
            data: [...prev.data, {title, price, image, id}],
        }));

    }

    const handlerRemoveFromCart = async () => {
        const response = await fetch(`${API}cart`).then((res) => res.json());
        const filterId = response.filter((item) => item.parentId === id);

        await fetch(`${API}cart/${filterId[0].id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
            },
        });
        
        setCart((prev) => ({
            ...prev,
            data: prev.data.filter((item) => item.id !== parentId),
        }));

    }

    const handlerCart = async () => {
        if (!isAdded) {await handlerAddToCart()}
        else {await handlerRemoveFromCart()}

        setIsAdded((prev) => !prev);
    }

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.like}>
                    <img src="assets/icons/heart.svg" alt="Like" />
                </div>
                <img src={image} className={styles.img} alt="Sneakers" />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.info}>
                    <div className={styles.price}>
                        <span>ЦЕНА:</span>
                        <h1>{price} руб.</h1>
                    </div>
                    <button className={styles.btn} onClick={handlerCart}>
                        <img src={`assets/icons/${isAdded ? 'btn-complete.svg' : 'btn-plus.svg'}`} alt="Button plus" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;