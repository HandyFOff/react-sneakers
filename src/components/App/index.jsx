import { useEffect, useState } from "react";
import Home from "../../pages/Home";
import Layout from "../Layout";

export const API = 'https://6543a8f001b5e279de20c076.mockapi.io/';

const App = () => {

  const [data, setData] = useState([]);

  const [cart, setCart] = useState({
    data: [],
    status: false,
  });

  useEffect(() => {
    fetch(`${API}/sneakers`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));

    fetch(`${API}/cart`)
      .then((res) => res.json())
      .then((res) => setCart((prev) => ({...prev, data: res})))
      .catch((err) => console.log(err));
  }, []);

  return (
      <Layout setCart={setCart} cart={cart}>
        <Home data={data} setData={setData} cart={cart} setCart={setCart} />
      </Layout>
  );
}

export default App;