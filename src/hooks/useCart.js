import { useContext } from "react"
import { AppContext } from "../context"

export const useCart = () => {
    const {cart, setCart} = useContext(AppContext);

    let percent = 0.05
    let total = cart.data.map((item) => item.price).reduce((acc, item) => acc + item, 0);
    let tax = Math.floor(total * percent);

    return {cart, setCart, total, tax}
}