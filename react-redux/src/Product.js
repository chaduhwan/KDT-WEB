import { useSelector, useDispatch } from "react-redux"
import { ADD_LIST } from "./Store/CartItem";
export default function ProductList() {


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
    const dispatch = useDispatch();

  return (
    <>
      {Product.map((product, index) => (
        <div key={index}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <button onClick={() => {dispatch({type : ADD_LIST , name : product.name , price : product.price})}}>
            카트에 담기
          </button>
        </div>
      ))}
    </>
  );
}
