import React from 'react'
import './FestiveFinds.css'
import { useNavigate } from 'react-router-dom'
import banner1 from '../../../assets/banner1.jpg'
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState } from '../../../../../../Recoil/atom';
import img1 from '../../../assets/TSR/gift1.jpg'
import img2 from '../../../assets/TSR/gift2.jpg'
import img3 from '../../../assets/TSR/gift3.jpg'
import img4 from '../../../assets/TSR/gift4.jpg'
import img5 from '../../../assets/TSR/lookbook1.jpg'
import img6 from '../../../assets/TSR/banner3.jpg'

export default function FestiveFinds() {

    const navigation = useNavigate();
    const islogin = useRecoilValue(loginState);


    const handleNaviagtion = () => {
        islogin === 'true' && navigation('/productpage');
    }

    return (
        // <div>
        //     <div className='FestiveMainImage'>
        //         <img src={banner1} style={{ width: '100%' }} />
        //         {islogin === 'true' && <div className='festiveBox'>
        //             <p className='smilingFestiMainTitle1' style={{ color: 'gray' }}>LAB GROWN DIAMONDS</p>
        //             <p className='smilingFestiMainTitle2' style={{ color: 'gray', fontSize: '40px', margin: '0px' }}>Festive Finds!</p>
        //             <p className='smilingFestiMainTitle3' style={{ color: 'gray', margin: '0px', fontSize: '13px' }}>
        //                 Explore your jewelry for upcoming holiday!
        //             </p>
        //             <div>
        //                 <button className='DiscoverBtn' onClick={handleNaviagtion}>DISCOVER MORE</button>
        //             </div>
        //         </div>}
        //     </div>
        // </div>

        <div>
            <p className='gorGiftBoxMainTitleMobile'>Gifting Made Easy</p>
            <div className='gorGiftMain'>
                <div className='gorGiftBox1'>
                    <div>
                        <p className='gorGiftBoxMainTitleWeb'>Gifting Made Easy</p>
                        <img src={img1} className='gorGiftBox1Images' />
                        <p className='gorGiftBoxDesc'>Top Gifts</p>
                    </div>
                    <div className='gorGiftBox1Sub1'>
                        <img src={img2} className='gorGiftBox1Images' />
                        <p className='gorGiftBoxDesc'>Personalized Gifts</p>
                    </div>
                </div>
                <div className='gorGiftBox2'>
                    <div>
                        <img src={img3} className='gorGiftBox2Images' />
                        <p className='gorGiftBoxDesc'>Gifts Under $150</p>
                    </div>
                    <div className='gorGiftBox2Sub1' >
                        <img src={img4} className='gorGiftBox2Images' />
                        <p className='gorGiftBoxDesc'>Splurge Worthy Gifts</p>
                    </div>
                </div>
            </div>

            <div className='gorLookBookMain' style={{
                display: 'flex',
                marginTop: '70px'
            }}>
                <div className='gorViewLookBookimg'>
                    <img src={img5} className='gorViewLookBookImage' />
                </div>
                <div className='gorViewLookBookDesc'>
                    <p style={{ fontSize: '30px', margin: '0px', fontFamily: 'Freight Big Pro,serif' }}>The Holiday Lookbook is Here</p>
                    <p style={{ fontSize: '13px', fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>View Lookbook</p>
                </div>
            </div>


            <div style={{marginTop: '100px'}}>
                <div className='gorjanaTrade1Web'>
                    <img src={img6} className='gorjanaFaveImage' />
                    <div className='gorjanaTrideBox'>
                        <p style={{
                            fontFamily: 'Freight Big Pro,serif',
                            fontSize: '60px',
                            color: 'white',
                            fontWeight: 400
                        }}>Tried and True </p>
                        <p style={{
                            fontFamily: 'Freight Big Pro,serif',
                            fontSize: '21px',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: '-30px',
                            fontWeight: 300
                        }}>Easy-to-style layers you'll love. </p>
                        <p className='gorjanaFavBoxLink'>Shop File Jewelry</p>
                    </div>
                </div>

                <div className='gorjanaTrade1Mobile'>
                    <img src='https://www.gorjana.com/cdn/shop/files/Hero_M-2_17.jpg?v=1701993404&width=750' className='gorjanaFaveImage' />
                    <div className='gorjanaTrideBoxMobile'>
                        <p style={{
                            fontFamily: 'Freight Big Pro,serif',
                            fontSize: '60px',
                            color: 'white',
                            fontWeight: 400
                        }}>Tried and True </p>
                        <p style={{
                            fontFamily: 'Freight Big Pro,serif',
                            fontSize: '18px',
                            color: 'white',
                            marginTop: '-20px',
                            fontWeight: 300
                        }}>Easy-to-style layers you'll love. </p>
                        <p className='gorjanaFavBoxLinkMobile'>Shop File Jewelry</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
