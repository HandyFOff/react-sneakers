import { useContext } from 'react';
import styles from './Favorites.module.scss';
import { AppContext } from '../../context';
import CatalogCard from '../../components/Catalog/CatalogCard';

const Favorites = () => {
    const {favorites} = useContext(AppContext);

    return (  
        <div className={styles.favorites}>
            <div className={styles.content}>
                {favorites.map((item) =>
                    <CatalogCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        parentId={item.id}
                        active
                    />
                )}
            </div>
        </div>
    );
}
 
export default Favorites;