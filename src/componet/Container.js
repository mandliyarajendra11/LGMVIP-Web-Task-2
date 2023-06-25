import React from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from './Loader';
const Container = () => {
    const style={
        textAlign:"center",
    }
 const Data=useSelector((e)=>e.ProductReducer);
    return (
        <>
    <div className='container'>
        {
            Data.getData?<h1 style={style}>click on get users button</h1>:
            Data.isError?<h1 style={style}>Error in getting data</h1>:
            Data.isLoading?<LoadingSpinner/>
            : Data.products.map((e)=>{
                return <div className='childContainer' style={{width: Data.products.length<=2?393:null}} key={e.id} >
                <img src={e.avatar} alt={e.title}/>
                <h3>{e.first_name} {e.last_name}</h3>
                <p>{e.email}</p>
            </div>
            
        }  )
    }
       
    </div>
       </>
  )
}

export default Container