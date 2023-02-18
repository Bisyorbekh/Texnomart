import React from 'react'
import "./SinglePage.css"
import {HOME} from "../../static/static"
import {useParams} from "react-router-dom"

function SinglePage() {
    const {id} = useParams()
    let filterData = HOME.find(item=> item.id === Number(id))
  return (
    <div className="single_page">
        <div className="single_page_right">
        <img src={filterData?.url} alt="" />

        </div>
        <div className="single_page_left">
          <h2 className='apple'>{filterData?.title}</h2>
          <p className="visit">Visit the Apple Store</p>
          <p className="star">PROtect+ texnologiyasi qo'sh motor himoyasi (haddan tashqari qizib ketish va ortiqcha yuk), 4 pichoqli titan qoplamali pichoq, yoritilgan quvvat</p>
          <p className="choise">tugmasi, blender stendi, chayqalishdan himoyalangan shisha qopqoq; SilentPRO texnologiyasi (2 marta tinchroq)</p>
          <p className="pledge">Climate Pledge Friendly Climate Pledge Friendly</p>
          <div className="hr"><hr /></div>
          <p className="narx">{filterData?.price} so'm</p>
        </div>
    </div>
  )
}

export default SinglePage