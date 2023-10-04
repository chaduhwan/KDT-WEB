import { useContext } from "react";
import CartItem from "./CartItem";

export default function ProductList() {
  const value = useContext(CartItem);
  const Product = [
    {
      name: "세탁기",
      price: 20000000,
    },
    {
      name: "TV",
      price: 40000000,
    },
    {
      name: "냉장고",
      price: 60000000,
    },
  ];

  const AddCart = (name, price) => {
    value.setCartProduct((prev) => [...prev, { name, price }]);
  };

  return (
    <>
      {Product.map((product, index) => (
        <div key={index}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <button onClick={() => AddCart(product.name, product.price)}>
            카트에 담기
          </button>
        </div>
      ))}
    </>
  );
}
