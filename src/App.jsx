import React from 'react'
import ProductCard from './ProductCard.jsx'
import './App.css'
import keyboard from './assets/keyboard.png'
import laptop from './assets/laptop.png'
const pcDescription = "small, portable computer that has a screen, keyboard, and a touch pad all in one piece. I"

function App() {
  return(<>
    <ProductCard productImg={keyboard} productName={'keyboard'} price={20} currentStatus={'Available'} about={'TVS Electronics Gold Prime USB-A Mechanical Keyboard Black'}/>
    <br />
    <ProductCard productImg={laptop} productName={'laptop'} price={2500} currentStatus={'out of stock'} about={pcDescription}/>
   
  
</>
  )
}

export default App
