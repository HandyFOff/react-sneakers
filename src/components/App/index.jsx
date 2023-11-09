import { useEffect, useState } from "react";
import Home from "../../pages/Home";
import Layout from "../Layout";
import Favorites from "../../pages/Favorites"
import Orders from "../../pages/Orders"
import { BrowserRouter, Route, Routes } from "react-router-dom";

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


  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${API}/cart`)
        .then((res) => res.json())
        .then((res) => setCart((prev) => ({ ...prev, data: res })))
        .catch((err) => console.log(err));

      await fetch(`${API}/sneakers`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setCart={setCart} cart={cart} setOrders={setOrders} />}>
          <Route index element={<Home data={data} setData={setData} cart={cart} setCart={setCart} />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="orders" element={<Orders orders={orders} setOrders={setOrders} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;