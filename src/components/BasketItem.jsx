import React from 'react'

function BasketItem({item, product}) {
  return (
    <>

    <div className='calculate-shopping'>
        {product.title} x {item.amount}
    </div>
    

    <style>
      {
        `
        .calculate-shopping {
         color: #fff ;
         margin-left: 7px
        }
        `
      }
    </style>
    </>
  )
}

export default BasketItem