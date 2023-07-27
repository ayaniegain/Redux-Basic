import {React} from "react";
import { useSelector,useDispatch} from "react-redux";
import { remove } from "../store/cartSlice";


function Cart() {
  const dispatch=useDispatch()

  let cartProducts = useSelector((state) => state.cart);

  let Handleremove=(item)=>{
    dispatch(remove(item))

  }

  return (
    <div>
      <div style={{ backgroundColor: "wheat", fontSize: "16px" }}>
        {" "}
        Cart count: {cartProducts.length}{" "}
      </div>
      <section style={{ backgroundColor: "gray", height: "600px" }}>
        <>
          {cartProducts.map((e,i) => (
            <div key={e.id}>
            <img style={{height:"200px",width:"200px"}} src={e.image} alt={e.id} />
              <h2>{e.title}</h2>
              <span>{e.price}</span>
              <br />
              <button onClick={()=>{Handleremove(e.id)}}>remove item</button>
            </div>
          ))}
        </>
      </section>
    </div>
  );
}

export default Cart;
