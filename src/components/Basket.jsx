import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, products, resetBasket, total }) {
    return (
        <>

            <div className="container-footer">
                {
                    total > 0 && (
                        <div className="footer">
                            {basket.map(item => (

                                <BasketItem item={item} product={products.find(p => item.id == p.id)} />
                            ))}

                            <div className="container-result">
                                <div className='total'>{total}₺</div>

                                <button className='btn-reset' onClick={resetBasket}>Sıfırla</button>
                            </div>
                        </div>
                    )
                }

            </div>
            <style>
                {`
                .footer{    
                    border: 1px solid #ddd;
                    width: 100%;
                    margin-top:1000px;
                    height:120px;
                    background-color: #fff;        
                    position:fixed;
                    bottom:0;
                    clear:both;
                    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,101,1) 35%, rgba(0,212,255,1) 100%);
                }
                .total {
                    text-align: right;
                    display:inline-block;
                    width:calc(100%-30px);
                    float:right;
                    color:#33395c;
                    font-weight:bold;
                    font-size:30px;
                }
                .btn-reset {
                    display:inline-block;
                    width:70px;
                    padding:5px;
                    margin:5px;
                    border-radius:5px;
                    font-size:15px;
                    font-weight:bold;
                    background-color:#ddd;
                    cursor: pointer;
                    border-color: #fff;
                }
                .btn-reset:hover {
                    background-color: #fff;
                }
                .container-result {
                    border-top: 2px solid #ddd
                }`
                }
            </style>
        </>
    )
}

export default Basket

// footer olayının sticky olması düzenlenecek.(Sayfayı ortalaması ve tamamını kaplamamasını istiyorum.)
// Kart içerisinde ekle/çıkar tekrara göz at.