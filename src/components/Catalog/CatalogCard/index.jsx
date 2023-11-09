import styles from './CatalogCard.module.scss';
import { API } from '../../App';
import { useState } from 'react';

const CatalogCard = (props) => {
    const [isAdded, setIsAdded] = useState(props.added)

    const addToCart = async () => {
        if (!isAdded) {
            props.setCart((prev) => ({
                ...prev,
                data: [...prev.data, {...props}],
            }));
    
            await fetch(`${API}/cart`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({...props}),
            })
        } else {
            props.setCart((prev) => ({
                ...prev,
                data: prev.data.filter((item) => item.itemId !== props.itemId),
            }));

            await fetch(`${API}/cart/${props.id}`, {
                method: 'DELETE',
                headers: {
                    "Content-type": "application/json",
                },
            });
        }

        setIsAdded((prev) => !prev)
    }

    console.log(isAdded);

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.like}>
                    <img src="assets/icons/heart.svg" alt="Like" />
                </div>
                <img src={props.image} className={styles.img} alt="Sneakers" />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.info}>
                    <div className={styles.price}>
                        <span>ЦЕНА:</span>
                        <h1>{props.price} руб.</h1>
                    </div>
                    <button className={styles.btn} onClick={addToCart}>
                        <img src={`assets/icons/${isAdded ? 'btn-complete.svg' : 'btn-plus.svg'}`} alt="Button plus" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;