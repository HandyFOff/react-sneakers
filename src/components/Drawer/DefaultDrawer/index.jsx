import Button from '../../../ui/Button';
import { API2 } from '../../App';
import DrawerItem from '../DrawerItem';
import styles from './DefaultDrawer.module.scss';
import { useCart } from '../../../hooks/useCart.js'
import axios from 'axios';

const DefaultDrawer = ({ setStatus }) => {

    const {tax, total, cart, setCart} = useCart();

    const hadlerOrder = async () => {
        await axios.post(`${API2}/orders`, {items: cart.data});
    }

    const handlerDrawer = async () => {

        hadlerOrder();

        for (const item of cart.data) {
            await axios.delete(`https://6543a8f001b5e279de20c076.mockapi.io/cart/${item.id}`);
        }
        
        setCart((prev) => ({ ...prev, data: [] }));
        setStatus((prev) => !prev);
    }

    cart.data.map((item) => console.log(item.id))

    return (
        <>
            <div className={styles.content}>
                {cart.data.map((item) =>
                    <DrawerItem
                        key={item.id}
                        id={item.id}
                        parentId={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        setCart={setCart}
                    />
                )}
            </div>
            <div className={styles.checkout}>
                <div className={styles.info}>
                    <div className={styles.total}>
                        <h1 className={styles.title}>Итого:</h1>
                        <div className={styles.underline}></div>
                        <h1 className={styles.price}>{total} руб.</h1>
                    </div>
                    <div className={styles.tax}>
                        <h1 className={styles.title}>Налог 5%:</h1>
                        <div className={styles.underline}></div>
                        <h1 className={styles.price}>{tax} руб.</h1>
                    </div>
                </div>
                <Button title={'Оформить заказ'} type={'forward'} event={handlerDrawer} />
            </div>
        </>
    );
}

export default DefaultDrawer;