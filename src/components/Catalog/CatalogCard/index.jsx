import styles from './CatalogCard.module.scss';

const CatalogCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.like}>
                    <img src="assets/icons/heart.svg" alt="Like" />
                </div>
                <img src="assets/sneakers/01.png" className={styles.img} alt="Sneakers" />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Мужские Кроссовки Nike Blazer Mid Suede</h1>
                <div className={styles.info}>
                    <div className={styles.price}>
                        <span>ЦЕНА:</span>
                        <h1>12 999 руб.</h1>
                    </div>
                    <button className={styles.btn}>
                        <img src="assets/icons/btn-plus.svg" alt="Button plus" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;