import React, { useState } from 'react'

export default function Form({products,setProducts}) {
  const [formData, setFormData] = useState({id:"",price: "",name:""})

    const idhandler = (e)=>{
        setFormData({...formData , id: e.target.value})
    }
    const nameHandler = (e)=>{
        setFormData({...formData , name: e.target.value})
    }

    const priceHandler = (e)=>{
        setFormData({...formData , price: +e.target.value})
    }
    const Addproducthandler = ()=>{
        setProducts([...products,formData])
    }
    return (
        <>
            <h2>Add Product Here..</h2>
            <div style={{ display: 'flex', margin: "20px" ,justifyContent : "center" , flexDirection:"column",padding:"10px"}}>
                <div style={{  margin: "5px" ,padding:"5px"}}>
                    <label htmlFor='id'>Product ID</label>
                    <input id='id' onChange={(e)=>idhandler(e)} type='text' />
                </div>
                <div style={{  margin: "5px" ,padding:"5px"}}>
                    <label htmlFor='price'>Selling Price</label>
                    <input id='price' onChange={(e)=>priceHandler(e)} type='text' />
                </div>
                <div style={{  margin: "5px" ,padding:"5px"}}>
                    <label htmlFor='name'>Product Name</label>
                    <input id='name' onChange={(e)=>nameHandler(e)} type='text' />
                </div>
                <div style={{  margin: "5px" ,padding:"5px"}}>
                    <button onClick={Addproducthandler}>Add Product</button>
                </div>
            </div>
        </>
    )
}
