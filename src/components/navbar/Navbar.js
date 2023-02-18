import React from 'react'
import s from "./Navbar.module.css"
import { BiMicrophone, BiSearch, BiPackage } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { FaBalanceScaleLeft } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
// import { HiOutlineSquares2X2 } from "react-icons/hi2"
import { FiHeart } from "react-icons/fi"
import { Link } from "react-router-dom"
import texnomart from "../../assets/texnomart.svg"

function Navbar() {
  return (
    <div className={s.navbar}>
      <div className={s.nav_top}>
        <Link to="/">
          <img className={s.title} src={texnomart} alt="" />
        </Link>
        <div className={s.inp_btn}>
          <button className={s.nav_btn}>Barcha kategoriyalar</button>
          <input className={s.nav_inp} type="text" /> 
        </div>
          <div className={s.micro}><BiMicrophone/></div>
          <div className={s.search}><BiSearch/></div>
          <div className={s.pack}>
            <BiPackage className={s.pickage}/>
            <p className={s.buyurtma}>Buyurtma holati</p>
          </div>
          <div className={s.person}>
          <Link className={s.login_link} to="/login">
            <BsPerson className={s.persons}/>
            <p className={s.kirish}>Kirish</p>
            </Link>
          </div>
          <div className={s.scale}>
            <FaBalanceScaleLeft className={s.scales}/>
            <p className={s.taqqoslash}>Taqqoslash</p>
          </div>
          <div className={s.scale}>
              <FiHeart className={s.scales}/>
              <p className={s.taqqoslash}>Sevimlilar</p>
          </div>
          <div className={s.cart}>
            <Link className={s.login_link} to="/cart">
              <AiOutlineShoppingCart className={s.carts}/>
              <p className={s.savat}>Savatcha</p>
            </Link>
          </div>
        </div>

      <div className={s.nav_bottom}>
        <button className={s.katalog}> Katalog </button>
        <p className={s.aksiyalar}>🔥 AKSIYALAR SMARTFONLAR MUZLATGICHLAR СHANGYUTGICHLAR</p>
        <p className={s.sovutgichlar}>XAVO SOVUTGICHLAR</p>
        <p className={s.notbuk}>NOUTBUKLAR</p>
        <p className={s.sovutgichlar}>KIR YUVISH MASHINALARI</p>
        <p className={s.notbuk}>TELEVIZORLAR</p>
        <p className={s.sovutgichlar}>BARCHA KATEGORIYALAR</p>
      </div>

    </div>
  )
}

export default Navbar