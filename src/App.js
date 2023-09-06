import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import products from './poducts.json'
import Product from './components/Product';
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(5000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState();

  const resetBasket = () => {
    setBasket([])
  }


  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
  }, [basket])
  return (
    <div className="container">
      <Header total={total} money={money} />

      <div className='product-container'>
        {
          products.map((product => (
            <Product money={money} total={total} basket={basket} setBasket={setBasket} product={product} key={product.id} />
          )))
        }
      </div>
      <Basket total={total} resetBasket={resetBasket} products={products} basket={basket} />
      {/* Burada footer'ın sayfada en aşağıda kalan card'ın üzerine binmemesi için boş satırlar oluşturuldu. */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
