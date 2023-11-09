import CatalogCard from './CatalogCard';
import styles from './Catalog.module.scss'
import Button from '../../ui/Button';
import { useState } from 'react';

const Catalog = ({ data, setCart, filter, cart }) => {
    const step = 12;
    let [max, setMax] = useState(0);
    let filtredArray = data.filter(filter);
    const moreBtnRule = filtredArray.length - max < step ? max = filtredArray.length - max + max : max += step;

    return (
        <div className={styles.catalog}>
            <div className={styles.content}>
                {filtredArray.filter(filter).slice(0, max).map((sneaker) =>
                    <CatalogCard
                        key={sneaker.id}
                        id={sneaker.id}
                        parentId={sneaker.id}
                        title={sneaker.title}
                        price={sneaker.price}
                        image={sneaker.image}
                        cart={cart}
                        setCart={setCart}
                        added={cart.data.some((obj) => +obj.parentId === +sneaker.id)}
                    />
                )}
            </div>

            {max !== filtredArray.length ? <Button title={'Показать еще'} type={'default'} event={() => setMax(moreBtnRule)} /> : null}
        </div>
    );
}

export default Catalog;