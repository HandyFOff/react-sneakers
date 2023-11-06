import Banner from '../../components/Banner';
import Catalog from '../../components/Catalog';
import Drawer from '../../components/Drawer';
import Input from '../../ui/Input';
import styles from './Home.module.scss'

const Home = () => {
    return (  
        <main className={styles.home}>
            <Banner/>
            <div className={styles.content}>
                <div className={styles.nav}>
                    <h1 className={styles.title}>Все кроссовки</h1>
                    <Input/>
                </div>
                <Catalog/>
            </div>
            <Drawer status={'default'}/>
        </main>
    );
}
 
export default Home;