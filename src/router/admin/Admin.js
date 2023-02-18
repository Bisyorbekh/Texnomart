import React from 'react'
import "./Admin.css"
import {useStateValue} from "../../context/index"
import {useHistory} from "react-router-dom"
import CreateProduct from "../../components/create-product/CreateProduct"


function Admin() {
    const [{user}, dispatch] = useStateValue()
  const history = useHistory()
  //action == dispatch
  const logOut = ()=>{
    if(window.confirm("Are you sure?")){      
      dispatch({type: "LOG_OUT"})
      localStorage.removeItem("user")
      history.push("/login")
    }
  } 
  return (
    <div>
        <CreateProduct/>
        <button className='btn' onClick={logOut}>Log Out</button>

    </div>
  )
}

export default Admin