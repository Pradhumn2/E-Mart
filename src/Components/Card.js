import React from "react";
import {useDispatch} from "react-redux";
import {add_to_cart} from "../redux/actionCreators/index.js"

const Card = (props) => {
  const dispatch = useDispatch();

  const onclickHandle = () =>{
    dispatch(add_to_cart(props.data.id))
    props.showAlert("Item Added To Cart" , "success")
  }

  return (
    <>
      <div className="card border border-secondary rounded card_product" style={{width: "18rem"}}>
        <img src={props.data.image} className="card-img-top card_image" alt="Error in loading image" />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">
            {props.data.description}
          </p>
          <p className="card-text">
            <strong>Price :</strong> {props.data.price}
            <br />
            <strong>Rating :</strong> {props.data.rating.rate}
          </p>
          <div className="btn btn-primary" onClick = {onclickHandle}>
          Add to Cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
