import './App.css';
import Form from './component/Form';
import Display from './component/Display';
import { useState } from 'react';

function App() {
  const [products,setProducts] = useState([]);
  
  return (
    <div className="App">
      <Form products={products} setProducts={setProducts} />
      <Display products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
