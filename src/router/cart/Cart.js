import React from 'react'
import s from "./Cart.module.css"
import {useStateValue} from "../../context/index"
import firebase from 'firebase'

function Cart() {
  const [state, action] = useStateValue()
    const {cart} = state

      // let total = 0
      // cart.forEach(pro=>{
      //     total += pro.price * pro.count
      // })
    const incPro = (id)=>{
        let index = state.cart.findIndex(item=> item.id === id) 
        let newCart = state.cart.map((product, inx)=>{
            if(inx === index){
              return {
                ...product,
                count: product.count + 1
              }
            }else{
              return product
            }
          })
          action({type: "ADD_TO_CART", payload:newCart})
    }
    const decPro = (id)=>{
        let index = state.cart.findIndex(item=> item.id === id) 
        let newCart = state.cart.map((product, inx)=>{
            if(inx === index){
              return {
                ...product,
                count: product.count - 1
              }
            }else{
              return product
            }
          })
          action({type: "ADD_TO_CART", payload:newCart})
    }
    const delateProduct = (id)=>{
      if(window.confirm("Are you sure?")){
          firebase
              .firestore()
              .collection("products")
              .doc(id)
              .delete()
      }
  }
  return (
    <div>
         <h2 className={s.your}>Your shopping cart</h2>
        <h3 className={s.prices}>Total price: {cart.reduce((a,b)=> a + b.count * b.price, 0)}</h3>
        <div className={s.cart_container}>
            {
                cart?.map((pro, inx)=><div key={inx} className={s.cart_item}>
                    <img src={pro.url} alt="" />
                    <p>{pro.title}</p>
                    <h3>{pro.price} $</h3>
                    <button className={s.cart_btn} disabled={pro.count <= 1} onClick={ ()=> decPro(pro.id)}>-</button>
                    <span>{pro.count}</span>
                    <button className={s.cart_btn} onClick={ ()=> incPro(pro.id)}>+</button>
                    <button className={s.data_del} onClick={()=> delateProduct()}>Delate</button>
            </div>)
            }
        </div>
    </div>
  )
}

export default Cart