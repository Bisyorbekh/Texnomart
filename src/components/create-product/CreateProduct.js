import React, {useState} from 'react'
import "./CreateProduct.css"
import {firestore} from "../../server/index"

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const createPro = (e)=>{
    e.preventDefault()
    setLoading(true)
    let newPro = { name: title, price: price, url }

    firestore.collection("products").add(newPro)
      .then(res=> {
        setTitle("")
        setPrice(0)
        setUrl("")
        setLoading(false)
        console.log(res)})
      .catch(err=> console.log(err))
  }

  return (
    <div className='create_product'>
        <h2 className='titttle'>CreateProduct</h2>
        <form onSubmit={createPro} action="">
          <input value={title} onChange={e=>setTitle(e.target.value)} required type="text" placeholder='Title' />
          <input value={price} onChange={e=>setPrice(e.target.value)} required type="number" placeholder='Price' />
          <input value={url} onChange={e=>setUrl(e.target.value)} required type="text" placeholder='Url' />
          <button disabled={loading}>{loading ? "Loading...":"Create Ptoduct"}</button>
        </form>
    </div>
  )
}

export default CreateProduct