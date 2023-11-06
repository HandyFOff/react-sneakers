import styles from "./Layout.module.scss"
import Header from "../Header";

const Layout = ({children}) => {
    return (  
        <div className={styles.wrapper}>
            <Header/>
            {children}
        </div>
    );
}
 
export default Layout;