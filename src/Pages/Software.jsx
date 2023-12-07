import React from "react";
import data_product from "../Components/Assets/data";
import Item from "../Components/Item/item";
import new_collections from "../Components/Assets/new_collections";
import "./Software.css";

const Software = () => {
  return (
    <div className="product">
      <h1>Featured Software</h1>
      <hr />
      <div className="new-collections">
        <div className="product-item-2">
          {new_collections.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
      <div className="product-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Software;
