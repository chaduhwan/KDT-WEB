import ProductList from "./14Context/store/ProductList";
import CartItem, { CartItemProvider } from "./14Context/store/CartItem";
import Cart from "./14Context/store/Cart";



function App() {
  
  return (
   <>
   <CartItemProvider>
     <ProductList/> 
     <Cart/>
   </CartItemProvider>
   </>
  )

}


export default App;
