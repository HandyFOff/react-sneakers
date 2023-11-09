import { useState } from 'react';
import Banner from '../../components/Banner';
import Catalog from '../../components/Catalog';
import Drawer from '../../components/Drawer';
import Input from '../../ui/Input';
import styles from './Home.module.scss'

const Home = ({cart, setCart, data, setData}) => {
    const [value, setValue] = useState('');

    const handlerInput = (e) => {
        setValue(e.target.value);
        console.log(value);
    }

    return (  
        <main className={styles.home}>
            <Banner/>
            <div className={styles.content}>
                <div className={styles.nav}>
                    <h1 className={styles.title}>Все кроссовки</h1>
                    <Input value={value} event={handlerInput}/>
                </div>
                <Catalog data={data} cart={cart} setCart={setCart} filter={value}/>
            </div>
            <Drawer status={'default'} cart={cart} setCart={setCart}/>
        </main>
    );
}
 
export default Home;