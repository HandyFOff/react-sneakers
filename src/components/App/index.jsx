import { useEffect, useState } from "react";
import Home from "../../pages/Home";
import Layout from "../Layout";
import Favorites from "../../pages/Favorites"
import Orders from "../../pages/Orders"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "../../context"
import axios from "axios";

export const API = 'https://6543a8f001b5e279de20c076.mockapi.io/';
export const API2 = 'https://64fcc244605a026163aec998.mockapi.io/';

const App = () => {

  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState({
    data: [],
    status: false,
  });
  
  const isItemAdded = (id) => {
    return cart.data.some((obj) => +obj.parentId === +id);
  }

  const isItemFavorited = (id) => {
    return favorites.some((obj) => +obj.parentId === +id);
  }

  useEffect(() => {
    const fetchData = async () => {
      const cart = (await axios.get(`${API}/cart`)).data;
      const orders = (await axios.get(`${API2}/orders`)).data;
      const favorites = (await axios.get(`${API2}/favorites`)).data;
      const sneakers = (await axios.get(`${API}/sneakers`)).data;

      setFavorites(favorites);
      setOrders(orders);
      setCart((prev) => ({ ...prev, data: cart}))
      setData(sneakers)
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, setData, favorites, setFavorites, orders, setOrders, cart, setCart, isItemAdded, isItemFavorited }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setCart={setCart} cart={cart} setOrders={setOrders} />}>
            <Route index element={<Home data={data} setData={setData} cart={cart} setCart={setCart} />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="orders" element={<Orders orders={orders} setOrders={setOrders} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </AppContext.Provider>
  );
}

export default App;