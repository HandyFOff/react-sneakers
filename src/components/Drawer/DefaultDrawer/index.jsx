import Button from '../../../ui/Button';
import { API2 } from '../../App';
import DrawerItem from '../DrawerItem';
import styles from './DefaultDrawer.module.scss';

const DefaultDrawer = ({ setStatus, setCart, cart, setOrders }) => {

    let tax = 0.05
    let total = cart.data.map((item) => item.price).reduce((acc, item) => acc + item, 0);

    const hadlerOrder = async (data) => {
        await fetch(`${API2}/orders`, {
            method: 'POST',
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(data)
        }).then((res) => console.log(res.json()));
    }

    const handlerDrawer = async () => {
        const response = await fetch('https://6543a8f001b5e279de20c076.mockapi.io/cart').then((res) => res.json());
        console.log(response);
        console.log(cart.data);

        hadlerOrder(response);

        for (const item of response) {
            await fetch(`https://6543a8f001b5e279de20c076.mockapi.io/cart/${item.id}`, {
                method: 'DELETE',
            });
        }
        
        setCart((prev) => ({ ...prev, data: [] }));
        setStatus((prev) => !prev);
    }

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
                        <h1 className={styles.price}>{Math.floor(total * tax)} руб.</h1>
                    </div>
                </div>
                <Button title={'Оформить заказ'} type={'forward'} event={handlerDrawer} />
            </div>
        </>
    );
}

export default DefaultDrawer;