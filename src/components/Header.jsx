import React from 'react'

function Header({ money, total }) {
  return (
    <>


      <div className='container-header'>
        Bakiyeniz : {money - total}₺

      </div>
    </>
  )
}

export default Header