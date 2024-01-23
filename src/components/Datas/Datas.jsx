import React from 'react'
import "./Datas.css"
import home from "../../Assets/home.png"
import search from "../../Assets/search.png"
import close from "../../Assets/close.png"
import items from './item'

const Datas = () => {
  return (
    <div className='datas'>
       <div className="dataNav">
          <button className='homeimg'>
            <img src={home} alt=""  />
          </button>
         <div className="inpitems">
           <img src={search} alt="" />
           <input type="text" placeholder='Seach Products'/>
           <img src={close} alt="" />
         </div>
         

       </div>
       <div className="items-nav">
          <button className='items-btn'>
            <span>Chairs</span>
          </button>
          <button className='items-btn'>
            <span>Desks</span>
          </button>
          <button className='items-btn'>
            <span>Drinks</span>
          </button>
          <button className='items-btn'>
            <span>Food</span>
          </button>
          <button className='items-btn'>
            <span>Miscellaneous</span>
          </button>
        
       </div>

       <div className="product">
          {items.map((item)=>(
          <div className='prdetail'>
              <span>$ 120.00</span>
              <img src={item.img} alt="" />
          </div>
          ))}
          
         </div> 

    
    </div>
  )
}

export default Datas