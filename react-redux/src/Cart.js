import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { DELETE_CART } from "./Store/CartItem";

export default function Cart() {

    const CartList = useSelector((state)=>state)
    const dispatch = useDispatch()

    const total = CartList.reduce((total, product) => total + product.price, 0);

  return (
    <>
      {CartList.map((product) => {
        return (
          <div key={product.id}>
            <div>{product.name}</div>
            <button onClick={() => {dispatch({type : DELETE_CART, id : product.id})}}>장바구니에서 삭제</button>
            <div>{product.quantity}개</div>
          </div>
        );
      })}
      <div>합계: {total}</div>
    </>
  );
}