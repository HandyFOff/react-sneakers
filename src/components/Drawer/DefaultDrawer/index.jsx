import Button from '../../../ui/Button';
import DrawerItem from '../DrawerItem';
import styles from './DefaultDrawer.module.scss';

const DefaultDrawer = ({ setStatus, setCart, cart }) => {

    let tax = 0.05
    let total = cart.data.map((item) => item.price).reduce((acc, item) => acc + item, 0);

    const handlerDrawer = async () => {
        const allCartResponse = await fetch(`https://6543a8f001b5e279de20c076.mockapi.io/cart`)
        .then((res) => res.json());
    
        for (const item of allCartResponse) {
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