import React, { useEffect, useMemo, useState } from 'react'
import { gsap } from "gsap";

export const WrapperBanner = ({ items, children }) => {

    var colors = ["#0ae448","#ff8709", "#9d95ff", "#00bae2"];
    const [valueSpeed, setValueSpeed] = useState(40)

   useEffect(() => {
      //initially colorize each box and position in a row
    gsap.set(".box", {
      backgroundColor: (i) => colors[i % colors.length],
      x: (i) => i * 374
    });
    
    
    gsap.to(".box", {
      duration: valueSpeed,
      ease: "none",
      x: `+=${(374 * 6)}` , //move each box 500px to right 
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (374 * 6)) //force x value to be between 0 and 500 using modulus
      },
      repeat: -1
    });

   }, [valueSpeed])
    
   
  return (
    <div className="wrapper"
          onMouseEnter={() => setValueSpeed(70)}
          onMouseLeave={() => setValueSpeed(40)} 
        >
          <div className="absolute z-10 w-full h-[80vh]">
            {children}
          </div>
          <div className="boxes">
            {
                items.map((item, i) => (
                    <picture key={i} className="box">
                        <img className='w-full h-full object-cover' 
                            src={item.img} 
                            alt={item.name} 
                        />
                    </picture>
                ))
            }
          </div>
        </div>
  )
}
