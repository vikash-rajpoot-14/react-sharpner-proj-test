import './App.css';
import Form from './component/Form';
import Display from './component/Display';
import { useState } from 'react';

let productlist = JSON.parse(localStorage.getItem('products'));
let list ; 
if(productlist!=null){
  list = productlist
}else{
  list = [];
}

function App() {
  const [products,setProducts] = useState(list);
 
  return (
    <div className="App">
      <Form products={products} setProducts={setProducts} />
      <Display products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
