import styles from './CatalogCard.module.scss';
import { API, API2 } from '../../App';
import { useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../../context';

const CatalogCard = ({id, title, price, image, parentId, active}) => {
    const {setFavorites, setCart, isItemAdded, isItemFavorited} = useContext(AppContext);

    const handlerAddToCart = async () => {
        const item = await axios.post(`${API}/cart`, {id, title, price, image, parentId})

        setCart((prev) => ({
            ...prev,
            data: [...prev.data, item.data],
        }));

    }

    const handlerRemoveFromCart = async () => {
        const response = await axios.get(`${API}cart`)
        const filterId = response.data.filter((item) => item.parentId === id);

        await axios.delete(`${API}cart/${filterId[0].id}`);

        setCart((prev) => ({...prev, data: response.data.filter((item) => item.parentId !== id)}))
    }

    const handlerAddToFavorite = async () => {
        const item = await axios.post(`${API2}/favorites`, {id, title, price, image, parentId})

        setFavorites((prev) => [...prev, item.data]);
    }

    const handlerRemoveFromFavorite = async () => {
        const response = await axios.get(`${API2}favorites`);

        let filterId = response.data.filter((item) => +item.parentId === +id);
        if (active) {
            console.log(1);
            filterId = response.data.filter((item) => +item.id === +id);
        };

        await axios.delete(`${API2}favorites/${filterId[0].id}`);

        if (active) {
            setFavorites(response.data.filter((item) => item.id !== id))
        } else {
            setFavorites(response.data.filter((item) => item.parentId !== id))
        }
    }

    const handlerFavorite = async () => {
        if (isItemFavorited(parentId) || active) await handlerRemoveFromFavorite();
        else await handlerAddToFavorite();
    }

    const handlerAdded = async () => {
        if (isItemAdded(id)) await handlerRemoveFromCart();
        else await handlerAddToCart();
    }

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.like} onClick={handlerFavorite}>
                    <img src={`assets/icons/${isItemFavorited(id) || active ? 'favorited.svg' : 'not-favorited.svg'}`} alt="Like" />
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
                    <button className={styles.btn} onClick={handlerAdded}>
                        <img src={`assets/icons/${isItemAdded(id) ? 'btn-complete.svg' : 'btn-plus.svg'}`} alt="Button plus" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;