import { useContext } from 'react';
import CatalogCard from '../../components/Catalog/CatalogCard';
import styles from './Orders.module.scss';
import { AppContext } from '../../context';

const Orders = () => {
    const { orders } = useContext(AppContext);

    return (
        <div className={styles.orders}>
            <div className={styles.content}>
                {orders[0] && orders[0].items.map((item) =>
                    <CatalogCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        parentId={item.id}
                    />
                )}
            </div>
        </div>
    );
}

export default Orders;