import React, { createContext, useState } from "react";

const CartItem = createContext({
  CartProduct: [],
  setCartProduct: () => {},
  deleteCart : ()=>{} // 초기값 지정
});

export function CartItemProvider({ children }) {
  const [CartProduct, setCartProduct] = useState([]);
  
  const deleteCart = (name) =>{
    setCartProduct((prev)=>prev.filter((product)=>product.name !== name))
  }
  

  return <CartItem.Provider value={{ CartProduct, setCartProduct, deleteCart }}>
      {children}
    </CartItem.Provider>
}

export default CartItem;
