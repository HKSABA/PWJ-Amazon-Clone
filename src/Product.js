import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return ( 
    <div className="product">
      <div className="product__content">

        <div className="product__overlay"></div>
        <img className="product__image" src={image} alt="" />

        <div className="product__info fadeIn-left"> 
          <p>{title}</p>
          <p className="product__price">
            <large>$&nbsp;</large>
            <strong>{price}</strong>
          </p>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button className="product__button" onClick={addToBasket}>Add to basket</button> 
        </div>
      </div>    
      
    </div>
  );
}

export default Product;
