import CatalogCard from '../../components/Catalog/CatalogCard';
import styles from './Orders.module.scss';

const Orders = ({data, cart, setCart, orders}) => {
    console.log(orders);

    return (  
        <div className="orders">
            {orders.map((item) => 
                <CatalogCard 
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    cart={cart}
                    setCart={setCart}
                    added={cart.data.some((obj) => +obj.parentId === +item.id)}
                    parentId={item.id}
                />
            )}
        </div>
    );
}
 
export default Orders;