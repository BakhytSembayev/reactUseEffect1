import { useEffect, useState } from 'react';
import styles from './App.css';

export const App = () => {
 const [products, setProducts]=useState([]);

 useEffect(()=>{
  fetch('https://mocki.io/v1/95e68538-4704-4587-9a18-da1ef5ed9748')
  .then((loadedData)=>loadedData.json())
  .then((loadedProducts)=>{
    setProducts(loadedProducts);
  });
 },[]);

  return (
    <div className={styles.app}>
      {products.map(({id,name,price})=>(
        <div key={id}>
{name}-{price} RUB
        </div>
      ))}
    </div>
  );
};

export default App;
