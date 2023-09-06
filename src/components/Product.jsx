import React, { useEffect } from 'react'

function Product({ product, basket, setBasket, total, money }) {


    const basketItem = basket.find(item => item.id === product.id); //tıkladığım item'In id'si ile ürünlerin id'sini karşılaştırıyor.


    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
            //ürünü tekrar yüklemek yerine Amount(miktar) arttırmak.
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter((item) => item.id !== product.id)
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }



        return (
        <>
            <div className="product">
                <img src={product.img} style={{width:"250px", height:"300px"}}/>
                <h3>{product.title}</h3>
                    <div className="price">${product.price}</div>
                <div className="product-detail">
                    <div className="actions">
                        <button className='btn-shopping' disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
                        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                        <button className='btn-shopping' disabled={total + product.price > money} onClick={addBasket}>Ekle</button>
                    </div>
                </div>

                <style>{`
                .product{
                    padding:10px;
                    background:#fff;
                    border: 1px solid #ddd;
                    height:400px;
                    margin : 0 auto;
                    width:200px
                    display:flex;
                    flex-wrap:wrap;
                    align-items: center;
                    justify-content:center;
                }
                .product h3 {
                    height:10px;
                }
                .product-detail {
                    flex-wrap:wrap;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;  
                }
                .btn-shopping[disabled] {
                    cursor: not-allowed
                }
                .actions span {
                    padding:15px;
                }
                .actions {
                    border: 1px solid #ddd
                }   
                .actions button {
                    height :30px;
                    width:60px;
                    cursor: pointer;
                }
                
                `}
                </style>
            </div>
        </>
    )
}

export default Product