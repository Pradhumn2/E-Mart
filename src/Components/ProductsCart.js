import React from 'react'
import './Product.css'
import { useDispatch,useSelector } from 'react-redux';
import { add_to_cart } from '../redux/actionCreators';
import { delete_from_cart } from '../redux/actionCreators';
import {useState} from "react"

function ProductsCart(props) {
    const dispatch = useDispatch();
    const mapp = useSelector((state) => state.product_list);
    const [quant,setQuant] = useState(props.quantity)

    function handleAdd(){
      dispatch(add_to_cart(props.data.id))
      props.SetTotal(Math.round((props.Total + props.data.price+Number.EPSILON)*100)/100)
      props.SetCount(props.Count + 1)
      setQuant(quant+1)
    }
    
    function handleSub(){
      dispatch(delete_from_cart(props.data.id))
      props.SetTotal( Math.round((props.Total - props.data.price+Number.EPSILON)*100)/100)
      props.SetCount(props.Count - 1)
      setQuant(quant-1)
    }

  return (
    <>
    <div className="container cart_detail">
        <div className="product_image">
        <img src={props.data.image} className="card-img-top" alt="Error in loading image" />
        </div>
        <div className="product_details">
            <p><strong>Item Name : </strong>{props.data.title}</p>
            <p><strong>Item Price : </strong>{(Math.round((props.data.price+Number.EPSILON)*100)/100)}</p>
            <p><strong>Item Rating : </strong>{props.data.rating.rate } ({props.data.rating.count} Peoples)</p>
            <p><strong>Item Quantity : </strong>{quant}<button className="btn btn-primary mx-2" onClick = {handleAdd}><strong>+</strong></button><button className="btn btn-primary mx-2" onClick={handleSub}><strong>-</strong></button></p>
            <p><strong>Item Total : </strong>{quant*props.data.price}</p>
        </div>
      </div>
    </>
  )
}

export default ProductsCart
