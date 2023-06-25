import React from 'react'
import { getProduct } from '../Redux/Action/Api';
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  
const Api = "https://reqres.in/api/users?page=1"
const dispatch  =useDispatch();
const Data=useSelector((e)=>e.ProductReducer)

return (
    <header>
        <img src='Asset.png' alt='asset logo' />
      <button className='btn' onClick={()=>
   getProduct(Api,dispatch)} disabled={Data.isLoading || Data.products}>Get Users</button>
    </header>
  )
}

export default Header