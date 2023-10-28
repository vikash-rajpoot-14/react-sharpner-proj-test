import React from 'react'

function Display({ products,setProducts }) {
    localStorage.setItem('products',JSON.stringify(products))
    let total = 0;
    products.forEach(element => {
        total = total + element.price
    });
    
    const deleteHandler = (id) => {
       const newProducts =  products.filter(product =>product.id !== id);
       setProducts(newProducts)
    }
    return (
        <div>
            <h2>Products are ... </h2>
            <ul>
                {products.map((product, index) => <li key={index}>{product.id}-{product.name}-{product.price} <button onClick={(e) => deleteHandler( product.id)}>Delete Product</button></li>)}
            </ul>
            <h2>Total value of products is :-{total}</h2>
        </div>
    )
}

export default Display
