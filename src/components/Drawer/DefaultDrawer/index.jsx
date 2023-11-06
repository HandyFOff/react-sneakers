import Button from '../../../ui/Button';
import DrawerItem from '../DrawerItem';
import styles from './DefaultDrawer.module.scss';

const DefaultDrawer = () => {
    return (
        <>
            <div className={styles.content}>
                <DrawerItem />
            </div>
            <div className={styles.checkout}>
                <div className={styles.info}>
                    <div className={styles.total}>
                        <h1 className={styles.title}>Итого:</h1>
                        <div className={styles.underline}></div>
                        <h1 className={styles.price}>21 498 руб.</h1>
                    </div>
                    <div className={styles.tax}>
                        <h1 className={styles.title}>Налог 5%:</h1>
                        <div className={styles.underline}></div>
                        <h1 className={styles.price}>1074 руб.</h1>
                    </div>
                </div>
                <Button title={'Оформить заказ'} type={'forward'}/>
            </div>
        </>
    );
}

export default DefaultDrawer;