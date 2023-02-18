import React from 'react'
import { Route, Redirect } from "react-router-dom"
import {useStateValue} from "../../context/index"

function Private(props) {
    const [{user}, dispatch] = useStateValue()

    return user ? <Route {...props}/> : <Redirect to="/login"/>
  return (
    <div>Private</div>
  )
}

export default Private