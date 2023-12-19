import React from "react";
import data_product from '../Components/Assets/data'
import Item from "../Components/Item/Item";

const Product = () => {
    return(
        <div className="product">
            <div className="product-item">
                {data_product.map((item,i)=>{
                    return <Item key={i}id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Product