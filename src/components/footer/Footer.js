import React from 'react'
import s from "./Footer.module.css"
import footer from "../../assets/footer.jpg"

function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.footer1}>
            <p className={s.savol}>Savolingiz bormi? Qo'ng'iroq qiling</p>
            <h2 className={s.pn_number}>+998 93 192 18 85</h2>
            <img src={footer} alt="" />
        </div>
        <div className={s.footer2}>
          <h3>Kompaniya</h3>
          <p>B2B savdosi</p>
          <p>Biz haqimizda</p>
          <p>Yangiliklar va sharhlar</p>
          <p>IMEI ni tekshirish</p>
        </div>
        <div className={s.footer2}>
          <h3>Ma'lumot</h3>
          <p>Bepul yetkazib berish</p>
          <p>Bonus tizimi</p>
          <p>Texnomartda ishlash</p>
          <p>Shaxsiy kabinet</p>
          <p>Aloqa raqamlari</p>
        </div>
        <div className={s.footer3}>
          <h3>Haridorga yordam</h3>
          <p>Muddatli to'lovga sotib olish</p>
          <p>Maxsulotni qaytarish</p>
          <p>Mahsulotlar uchun kafolat</p>
          <p>Ko'p so'raladigan savollar</p>
          <button>Bonusingizni bilib oling</button>
        </div>

        <div className="hra"></div>
    </div>
  )
}

export default Footer