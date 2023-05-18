import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export const CartWidget = () => {
  return (
    <>
    <div className="logo d-flex">
      <img src="../src/assets/bag.png" alt="" srcset="" />
      <div className="number-container">
        <div className="number">5
        </div>
      </div>
    </div>
    </>
  )
}

export default CartWidget;