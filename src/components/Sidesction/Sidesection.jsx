import React from 'react'
import "./Sidesection.css"
import user from '../../Assets/user.png'
import print from '../../Assets/printing.png'
import menu from '../../Assets/list.png'
import food from '../../Assets/cutlery.png'
import arrow from '../../Assets/arrow-right.png'

const Sidesection = () => {
  
  const data =[
    {
      head:"combo",
      price:"$358.00",
      desc:"1.00 Units at $358.00/units"
    },
    {
      head:"office Design Software",
      price:"$280.00",
      desc:"1.00 Units at $358.00/units"
    },
    {
      head:"office chair",
      price:"$70.00",
      desc:"1.00 Units at $358.00/units"
    },
    {
      head:"Minute Maid",
      price:"$2.20",
      desc:"1.00 Units at $358.00/units"
    },
    {
      head:"WATER",
      price:"$2.20",
      desc:"1.00 Units at $358.00/units"
    },
    {
      head:"Confrerence Chair",
      price:"$33.00",
      desc:"1.00 Units at $358.00/units"
    },
    {
      head:"Confrerence Chair",
      price:"$22.00",
      desc:"1.00 Units at $358.00/units"
    },
  ]
  


  return (
    <div className='Sidesection'>
      <div className="description">

        {data.map((item)=>(
           <div className='details'>
                 <div className='heading'>
                  <span>{item.head}</span>
                  <span>{item.price}</span>
                 </div>
                 <div className="desc">
                    <span>{item.desc}</span>
                 </div>
           </div>
           ))}

   
      </div>
      <div className="payment">
        <div className='add'>
          <button className='book'>
            <img className='order-img' src={print} alt="" />
            <span className='order-span'>Print KOT Reciept</span>
          </button>
          <button className='book'>
            <img className='order-img' src={menu} alt="" />
            <span className='order-span'>Dynamic Combo</span>
          </button>
        </div>

        <button className='order'>
            <img className='order-img' src={food} alt="" />
            <span className='order-span'>Print</span>
          </button>

          <div className="billing">
             <div className='customer'>
                 <button className='customer-btn'>
                   <img src={user} alt="" />
                   <span>Set customer</span>
                 </button>
                 <button className='pay-btn'>
                   <img src={arrow} alt="" />
                   <span>PAYMENT</span>
                 </button>
             </div>
             <div className='dial'>
                 <button>1</button>
                 <button>2</button>
                 <button>3</button>
                 <button>Qty</button>
                 <button>4</button>
                 <button>5</button>
                 <button>6</button>
                 <button>Desc</button>
                 <button>7</button>
                 <button>8</button>
                 <button>9</button>
                 <button>Price</button>
                 <button>+/-</button>
                 <button>0</button>
                 <button>.</button>
                 <button>x</button>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Sidesection