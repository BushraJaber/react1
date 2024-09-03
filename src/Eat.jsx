import React, { useState ,useEffect } from 'react'
import style from './product.module.css'

export default function Eat() {
  const [food, setFood] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    );
    const data = await response.json();
    setFood(data.recipes);
    console.log(data.recipes);
    setFood(data.recipes);
  }
useEffect( () =>{
  getData();
},[]);
return (
    <div className="container">
      <div className="row g-3">
        {food.map(item => (
          <div className="col-lg-3">
            <div className="card">
            <h2 className={style.font}>
  {item.title.split(' ').slice(0, 3).join(' ')}
</h2>

              <img src={item.image_url} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}