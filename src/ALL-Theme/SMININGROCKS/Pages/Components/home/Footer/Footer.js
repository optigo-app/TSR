import React, { useState } from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { TfiYoutube } from "react-icons/tfi";

export default function Footer() {

    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);


    const toggleList = () => {
        setIsOpen(!isOpen);
        setIsOpen1(false);
        setIsOpen2(false);
    };

    const toggleList1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen(false);
        setIsOpen2(false);
    };

    const toggleList2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
        setIsOpen(false);
    };

    return (
        <div>
            <div className='TSRFooterMain'>
                <div className='TSRFooterPart1'>
                    <div className='TSRFooterPart1Sub'>
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

                        <div className='TSRFooterPart1Sub1Mobile'>
                            <div className='TSRFooterPart1Sub1-1'>
                                <p className='TSRFooterPart1Sub1menuTitle' onClick={toggleList}>COLLECTIONS</p>
                                <ul className={`my-list ${isOpen ? 'open' : ''}`}>
                                    <p className='TSRFooterPart1Sub1menuDesc'>Fringe</p>
                                    <p className='TSRFooterPart1Sub1menuDesc'>Shoreside</p>
                                    <p className='TSRFooterPart1Sub1menuDesc'>Wayfarer</p>
                                </ul>
                            </div>
                            <div className='TSRFooterPart1Sub1-2'>
                                <p className='TSRFooterPart1Sub1menuTitle' onClick={toggleList1}>HELPFUL LINKS</p>
                                <ul className={`my-list ${isOpen1 ? 'open' : ''}`}>
                                    <p className='TSRFooterPart1Sub1menuDesc'>About Us</p>
                                    <p className='TSRFooterPart1Sub1menuDesc'>Our Locations</p>
                                    <p className='TSRFooterPart1Sub1menuDesc'>Mezzo News</p>
                                    <p className='TSRFooterPart1Sub1menuDesc'>Contact Us</p>
                                    <p className='TSRFooterPart1Sub1menuDesc'>Theme features</p>
                                </ul>
                            </div>
                            <div className='TSRFooterPart1Sub1-2'>
                                <p className='TSRFooterPart1Sub1menuTitle' onClick={toggleList2}>THIS IS A DEMO</p>
                                <ul className={`my-list ${isOpen2 ? 'open' : ''}`}>
                                    <p className='TSRFooterPart1Sub1menuDesc'>This store is a demo of the Pipeline theme. The products from this store are from the catalog of Brochu Walker</p>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className='TSRFooterPart1Sub2'>
                        <p className='StayIntouce' style={{ fontSize: '35px', color: 'white', marginBlock: '60px', fontFamily: 'Tenor Sans, sans-serif' }}>STAY IN TOUCH.</p>
                        <div className='footerIconeMain' style={{ display: 'flex' }}>
                            <FaTwitter style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                            <FaFacebookF style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                            <FaInstagram style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                            <TfiYoutube style={{ margin: '5px', cursor: 'pointer', color: 'white' }} />
                        </div>
                    </div>
                </div>
                <div className='TSRFooterPart2'>
                    <img src='https://pipeline-theme-fashion.myshopify.com/cdn/shop/files/210128_BW_PF21_S219059.jpg?v=1671215731&width=768' className='TSRFooterPart2Img' />
                    <div className='TSRFooterPart2SubMain' style={{ padding: '60px 0px 0px 60px' }}>
                        <p className='TSRFooterPart2Desc1' style={{ color: 'white', fontFamily: 'Harmonia', fontSize: '13px', letterSpacing: '1px', margin: '40px 0px 0px 0px' }}>OUR WEEKLY NEWSLETTER</p>
                        <p className='TSRFooterPart2Desc2'>SKIP TO THE DETAILS</p>
                        <p className='TSRFooterPart2Desc3' style={{ fontFamily: 'Harmonia', margin: '0px', color: 'white' }}>Join to get special offers, free giveaways, and once-in-a-lifetime deals.</p>

                        <input type='text' placeholder="your-email@gxample.com" className='TSRFooterPart2Input' />
                    </div>
                </div>
            </div>
            <div className='footerMoreTextNew'>
                <div style={{width: '100%'}}>
                    <select className='forrterSelectionMain'>
                        <option>UNITED STATES (US $)</option>
                        <option>UNITED KINGDOM (GB £)</option>
                        <option>CANADA (CA $)</option>
                    </select>
                </div>
                <div style={{width: '100%'}}>
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
