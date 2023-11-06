import styles from "./Banner.module.scss"

const Banner = () => {
    return (  
        <div className={styles.banner}>
            <div className={styles.item}>
                <img src="assets/banners/adidas.png" alt="Adidas's Banner" />
            </div>
        </div>
    );
}
 
export default Banner;