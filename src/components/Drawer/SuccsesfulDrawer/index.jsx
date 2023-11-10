import { useContext } from 'react';
import Button from '../../../ui/Button';
import styles from './SuccsesfulDrawer.module.scss';
import { AppContext } from '../../../context';

const SuccsesfulDrawer = ({setStatus}) => {

    const {setCart, orders} = useContext(AppContext);

    const handlerDrawer = () => {
        setCart((prev) => ({...prev, status: false}))
        setTimeout(() => setStatus(false), 300)
    }

    return (  
        <div className={styles.content}>
            <div className={styles.img}>
                <img src="assets/images/document.png" alt="Succsesful!" />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>Заказ оформлен!</h1>
                <p className={styles.description}>Ваш заказ #{orders.length < 1 ? 1 : Number(orders[orders.length - 1].id) + 1} скоро будет передан курьерской доставке</p>
            </div>
            <Button title={'Вернуться назад'} type={'back'} event={handlerDrawer}/>
        </div>
    );
}
 
export default SuccsesfulDrawer;