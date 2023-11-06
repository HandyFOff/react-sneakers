import styles from './DrawerItem.module.scss'

const DrawerItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src="assets/sneakers/01.png" alt="Sneakers" />
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>Мужские Кроссовки Nike Air Max 270</h1>
                <h1 className={styles.price}>12 999 руб.</h1>
            </div>
            <button className={styles.btn}>
                <img src="assets/icons/remove.svg" alt="Remove Item" />
            </button>
        </div>
    );
}

export default DrawerItem;