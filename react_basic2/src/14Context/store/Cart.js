import React, { useContext } from "react";
import CartItemContext from "./CartItem";

export default function Cart() {
  const value = useContext(CartItemContext);

  const total = value.CartProduct.reduce((total, product) => total + product.price, 0);

  return (
    <>
      {value.CartProduct.map((v) => {
        return (
          <div key={v.name}>
            <div>{v.name}</div>
            <button onClick={() => value.deleteCart(v.name)}>장바구니에서 삭제</button>
          </div>
        );
      })}
      <div>합계: {total}</div>
    </>
  );
}
