import React from 'react'
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src="https://tse4.mm.bing.net/th?id=OIP.5hpVIn132kdyI3zDR02ctAHaJ4&pid=Api&P=0" alt="" />
        <h2>SHIRTS</h2>
        <h2>Price : 1799</h2>
        <h2>Discount: 5%</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.tFug-teKn2r4JkbiBZz78wHaIW&pid=Api&P=0"alt="" />
        <h2>HOODIES</h2>
        <h2>Price :1599</h2>
        <h2>Discount: 30%</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.E03T2rF2NO_r-BkZNPl5SwHaEK&pid=Api&P=0" alt="" />
        <h2>GYM OUTFITS </h2>
        <h2>Price : 2999</h2>
        <h2>Discount: 19%</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src="https://tse1.mm.bing.net/th?id=OIP.fyhrrCJXBlBQdV9mjrvFVgHaE8&pid=Api&P=0" alt="" />
        <h2>T-SHIRTS</h2>
        <h2>Price : 999</h2>
        <h2>Discount: 15%</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     
    </div><br/><br/><br/>
    <a href='' className="show">SHOW MORE</a>
    </section>
  )
}
