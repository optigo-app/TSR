import React, { useEffect, useState } from 'react'
import './Confirmation.css'
import Footer from '../home/Footer/Footer'
import { useNavigate } from 'react-router-dom';

export default function Confirmation() {

    const [orderNumber, setOrderNumber] = useState('');
    const navigation = useNavigate();

    useEffect(() => {
        let orderNum = localStorage.getItem('orderNumber');
        setOrderNumber(orderNum);
    }, [])

    return (
        <div className='paddingTopMobileSet' style={{ paddingTop: '110px' }}>
            <div className='simlimgCofirmationMain'>
                <div className='confritmSubmain'>
                    <img src='https://gstore.orail.co.in/assets/newfolder/images/account/thankyou.svg' className='SmilingthanksImg' />
                    <p style={{ marginTop: '-30px', textAlign: 'center' , fontFamily: 'PT Sans, sans-serif' }}>Your Order number is <span style={{ fontWeight: 500 }}>{orderNumber}</span></p>
                    <button className='contiShopiBtn' onClick={() => navigation('/productpage')}>Continue Shopping</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
