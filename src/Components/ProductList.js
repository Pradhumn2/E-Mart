import React from "react";
import Card from "./Card";

function ProductList(props) {
  
  return <div className="main">
  <div className="Head"><h2>Items</h2></div>
  <div className="container  total_product_list">
      {
        props.item.map((ele,key)=>(
          <Card data={ele} key={key}  showAlert = {props.showAlert}/>
        ))
      }
  </div>
  </div>
}

export default ProductList;
