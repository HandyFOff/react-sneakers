import CatalogCard from '../CatalogCard';
import styles from './Catalog.module.scss'

const Catalog = () => {
    return (  
        <div className={styles.catalog}>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
            <CatalogCard/>
        </div>
    );
}
 
export default Catalog;