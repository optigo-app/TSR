import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { TfiYoutube } from "react-icons/tfi";

export default function Footer() {

    const navigation = useNavigate();

    return (
        <div>
            <div className='TSRFooterMain'>
                <div className='TSRFooterPart1'>
                    <div style={{ paddingBlock: '70px' }}>
                        <img src='https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/Mezzo_White.png?v=1652288798&width=230' className='trsFoooterImg' />
                        <div className='TSRFooterPart1Sub1'>
                            <div className='TSRFooterPart1Sub1-1'>
                                <p className='TSRFooterPart1Sub1menuTitle'>COLLECTIONS</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>Fringe</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>Shoreside</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>Wayfarer</p>
                            </div>
                            <div className='TSRFooterPart1Sub1-2'>
                                <p className='TSRFooterPart1Sub1menuTitle'>HELPFUL LINKS</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>About Us</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>Our Locations</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>Mezzo News</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>Contact Us</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>Theme features</p>
                            </div>
                            <div className='TSRFooterPart1Sub1-2'>
                                <p className='TSRFooterPart1Sub1menuTitle'>THIS IS A DEMO</p>
                                <p className='TSRFooterPart1Sub1menuDesc'>This store is a demo of the Pipeline theme. The products from this store are from the catalog of Brochu Walker</p>
                            </div>
                        </div>
                    </div>

                    <div className='TSRFooterPart1Sub2'>
                        <p style={{ fontSize: '40px', color: 'white', marginBlock: '50px' , fontFamily: 'Tenor Sans, sans-serif'}}>STAY IN TOUCH.</p>
                        <div style={{ display: 'flex' }}>
                            <FaTwitter style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                            <FaFacebookF style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                            <FaInstagram style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                            <TfiYoutube style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                        </div>
                    </div>
                </div>
                <div className='TSRFooterPart2'>
                    <img src='https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/210128_BW_PF21_S219059.jpg?v=1671215731&width=768' className='TSRFooterPart2Img' />
                    
                    <p style={{color: 'white', fontSize: '20px', marginTop: '40px'}}>OUR WEEKLY NEWSLETTER</p>
                    <p>SKIP TO THE DETAILS</p>
                    <p>Join to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                </div>
            </div>
            <div className='footerMoreTextNew'>
                <div>
                    <select>
                        <option>Heloo</option>
                        <option>Heloo</option>
                        <option>Heloo</option>
                        <option>Heloo</option>
                    </select>
                </div>
                <div>
                    <p style={{ color: 'rgba(223, 223, 223, 0.9)', fontSize: '14px' }}>© PIPELINE CLEAN 2024
                        FRINGE
                        SHORESIDE
                        WAYFARER
                        POWERED BY SHOPIFY</p>
                </div>
            </div>
        </div>
    )
}
