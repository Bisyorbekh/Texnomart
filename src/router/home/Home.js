import React, {useState} from 'react'
import s from "./Home.module.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FiHeart } from "react-icons/fi"
import { HOME } from "../../static/static"
import { useStateValue } from "../../context/index"
import ish from "../../assets/ish.jpg"
import {firestore} from "../../server/index"
import firebase from 'firebase'
import { Link } from 'react-router-dom';
 
function Home() {
  const [data, setData] = useState([])
  React.useEffect(()=>{
      firestore.collection("products").onSnapshot(pro=>{
          setData(
              pro.docs.map(item=>({
                  id: item.id,
                  product: item.data()
              }))
          )
      })
  }, [])
  const delateProduct = (id)=>{
      if(window.confirm("Are you sure?")){
          firebase
              .firestore()
              .collection("products")
              .doc(id)
              .delete()
      }
  }



  const [state, action] = useStateValue()

  const addToCart = (pro)=>{
    let index = state.cart.findIndex(item=> item.id === pro.id)

    if(index < 0){
      let newPro = {
        ...pro,
        count: 1
      }
      action({type:"ADD_TO_CART", payload:[...state.cart, newPro]})
    }else{
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

  }
  return (
    <div className={s.home}>
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className={s.swiper_image} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/3358231920uz.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.swiper_image} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/3169181920uz.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.swiper_image} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2147831920uz.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.swiper_image} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/4745801920uz.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.swiper_image} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/9802141920uz.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.swiper_image} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/9004071920uz.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.swiper_image} src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/7403101920kr.webp" alt="" />
      </SwiperSlide>
    </Swiper>

    <div className={s.deliver_con}>
        <h2>Yasalgan productlar</h2>
        <div className={s.deliver_wrapper}>
            {
                data?.map(({id, product})=> <div key={id} className={s.deliver_item}>
                    <img src={product.url} alt=""/>
                    <h2>{product.name}</h2>
                    <h3>{product.price} so'm</h3>
                    <button className={s.data_del} onClick={()=> delateProduct(id)}>Delate</button>
                    <button className={s.savat_btn}><AiOutlineShoppingCart/> Savatchaga</button>
                </div>)
            }
        </div>
    </div>

    <h2 className={s.ommabob}>Ommabop kategoriyalar</h2>
      <div className={s.cards}>
        {
          HOME?.map((item, inx)=><div 
          key={inx}
          className={s.card}>
            <Link to={`/pro/${item.id}`}>
              <img src={item.url} alt="" />
            </Link>
          <p className={s.card_title}>{item.title}</p>
          <p className={s.price}>{item.price} so'm</p>
          <button className={s.savat_btn} onClick={()=> addToCart(item)}><AiOutlineShoppingCart/> Savatchaga</button>
          <FiHeart/>
        </div>)
        }

      </div>
      <div className={s.banner}>
        <div className={s.banner_left}>
          <img src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png" alt="" />
        </div>
        <div className={s.banner_right}>
          <h1>Ilovani yuklang</h1>
          <p>Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!</p>
          <img src={ish} alt="" />
        </div>
      </div>
      <div className={s.banner2}>
        <p className={s.texnika}>Telefonlar va maishiy texnika muddatli to'lovga</p>
        <div className={s.muddatli}>
          <div className={s.cardi}>
            <img src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg" alt="" />
            <p className={s.tolov}>Muddatli to'lovga sotib olish</p>
            <p className={s.qulay}>Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov</p>
          </div>
          <div className={s.cardi}>
            <img src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg" alt="" />
            <p className={s.tolov}>Bepul yetkazib berish</p>
            <p className={s.qulay}>Texnomartga tovarlarni yetkazib berish shartlari</p>
          </div>
          <div className={s.cardi}>
            <img src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg" alt="" />
            <p className={s.tolov}>Maxsulotlar uchun kafolat</p>
            <p className={s.qulay}>Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov hamma</p>
          </div>
          <div className={s.cardi}>
            <img src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg" alt="" />
            <p className={s.tolov}>Bonus tizimi</p>
            <p className={s.qulay}>Bounus tizimi</p>
          </div>
          <div className={s.cardi}>
            <img src="https://texnomart.uz/_nuxt/img/installment-5.513f513.svg" alt="" />
            <p className={s.tolov}>Yordam</p>
            <p className={s.qulay}>Ko'p beriladigan savollar</p>
          </div>
        
          
        </div>
      </div>
    </div>
  )
}

export default Home