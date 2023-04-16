import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductsCart from "./ProductsCart";

function Cart(props) {
  
  const mapp = useSelector((state) => state.product_list);
  
  var sm = 0;var count = 0;

  Object.keys(mapp).map((el) => {
    sm += props.item[el - 1].price * mapp[el];
    count += mapp[el];
  });

  const [Total, SetTotal] = useState(sm);
  const [Product_Count , SetCount] = useState(count);

  mapp.forEach((el) => {
    console.log("item", el);
  });

  return (
    <>
      <div className="main_cart">
        {Total === 0 ? (
          <div className="empty_cart"><h2>Cart Is Empty</h2></div>
        ) : (
          <div className="container">
            {Object.keys(mapp).map((id) => {
              let quan = mapp[id];
              console.log(id);
              let ele = props.item[id - 1];
              if (quan > 0)
                return (
                  <ProductsCart
                    data={ele}
                    Total={Total}
                    SetTotal={SetTotal}
                    Count = {Product_Count}
                    SetCount = {SetCount}
                    quantity={quan}
                    key={id}
                  />
                );
            })}
          </div>
        )}
      </div>
      <div className="Total_amount container">
        <div className="div">
          <p>
            <strong>Total Items :</strong>
            {Product_Count}
          </p>
          <p>
            <strong>Total Amount :</strong>
            {Math.round((Total + Number.EPSILON) * 100) / 100}
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
