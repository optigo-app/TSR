// import React, { useRef, useState } from 'react'
// import './ShopOurInstagram.css'
// import { IoClose } from "react-icons/io5";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// export default function ShopOurInstagram() {

//     const [showOverlay, setShowOverlay] = useState(false);
//     const inputRef = useRef(null);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // arrows: false,
//         // prevArrow: false, 
//         // nextArrow: false,
//     };


//     const toggleOverlay = () => {
//         // setShowOverlay(!showOverlay);
//     };



//     return (
//         <div>
//             {showOverlay && (
//                 <>
//                     <div className="shopInstaoverlay">
//                         <div className="searchClose">
//                             <IoClose style={{ height: '50px', width: '50px', color: 'white' }} onClick={toggleOverlay} />
//                         </div>
//                         <div style={{ width: '1000px', height: '500px' }}>
//                             <Slider {...settings}>
//                                 <div className='overlyBox1'>
//                                     <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18048267676371955.jpg' style={{ height: '500px' }} />
//                                     <div className='overlyBox1Content'>
//                                         <div style={{
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             paddingInline: '100px'
//                                         }}>
//                                             NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
//                                             "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
//                                             <span class="hashtag">#SmilingRocksCo</span>
//                                             <span class="hashtag">#labgrowndiamonds</span>
//                                             <span class="hashtag">#jewelry</span>
//                                             <span class="hashtag">#finejewelry</span>
//                                             <span class="hashtag">#fashionjewelry</span>
//                                             <span class="hashtag">#Flow</span>
//                                             <span class="hashtag">#hoops</span>
//                                             <span class="hashtag">#earrings</span>
//                                             <span class="hashtag">#rings</span>
//                                             <span class="hashtag">#bracelets</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='overlyBox1'>
//                                     <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17947561016152002.jpg' style={{ height: '500px' }} />
//                                     <div className='overlyBox1Content'>
//                                         <div style={{
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             paddingInline: '100px'
//                                         }}>
//                                             NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
//                                             "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
//                                             <span class="hashtag">#SmilingRocksCo</span>
//                                             <span class="hashtag">#labgrowndiamonds</span>
//                                             <span class="hashtag">#jewelry</span>
//                                             <span class="hashtag">#finejewelry</span>
//                                             <span class="hashtag">#fashionjewelry</span>
//                                             <span class="hashtag">#Flow</span>
//                                             <span class="hashtag">#hoops</span>
//                                             <span class="hashtag">#earrings</span>
//                                             <span class="hashtag">#rings</span>
//                                             <span class="hashtag">#bracelets</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='overlyBox1'>
//                                     <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18222140416080296.jpg' style={{ height: '500px' }} />
//                                     <div className='overlyBox1Content'>
//                                         <div style={{
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             paddingInline: '100px'
//                                         }}>
//                                             NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
//                                             "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
//                                             <span class="hashtag">#SmilingRocksCo</span>
//                                             <span class="hashtag">#labgrowndiamonds</span>
//                                             <span class="hashtag">#jewelry</span>
//                                             <span class="hashtag">#finejewelry</span>
//                                             <span class="hashtag">#fashionjewelry</span>
//                                             <span class="hashtag">#Flow</span>
//                                             <span class="hashtag">#hoops</span>
//                                             <span class="hashtag">#earrings</span>
//                                             <span class="hashtag">#rings</span>
//                                             <span class="hashtag">#bracelets</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='overlyBox1'>
//                                     <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17886020417717199.jpg' style={{ height: '500px' }} />
//                                     <div className='overlyBox1Content'>
//                                         <div style={{
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             paddingInline: '100px'
//                                         }}>
//                                             NEW COLLECTION LAUNCH! FLOW with the movement within you. <br /><br />
//                                             "Being in the FLOW means being aware that the river of life is flowing to us at every moment."<br /><br />Discover more at www.smilingrocks.com<br /><br />
//                                             <span class="hashtag">#SmilingRocksCo</span>
//                                             <span class="hashtag">#labgrowndiamonds</span>
//                                             <span class="hashtag">#jewelry</span>
//                                             <span class="hashtag">#finejewelry</span>
//                                             <span class="hashtag">#fashionjewelry</span>
//                                             <span class="hashtag">#Flow</span>
//                                             <span class="hashtag">#hoops</span>
//                                             <span class="hashtag">#earrings</span>
//                                             <span class="hashtag">#rings</span>
//                                             <span class="hashtag">#bracelets</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Slider>
//                         </div>
//                     </div>
//                 </>
//             )
//             }
//             <div className='ShopInstagrtamMain'>
//                 <p className='shopinstaMainTitle'>Shop Our Instagram</p>
//                 <p className='shopinstaMainDesc'>Follow @smilingrocksco and get inspired with photos of our lab-grown diamond jewelry, customized and styled for you!</p>

//                 <div className='ShopInstagrtamImages'>
//                     <div className='shopInimage'>
//                         <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18048267676371955.jpg' className='shopInimage1' onClick={toggleOverlay} />
//                     </div>
//                     <div className='shopInimage'>
//                         <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17947561016152002.jpg' className='shopInimage2' />
//                     </div>
//                     <div className='shopInimage'>
//                         <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18222140416080296.jpg' className='shopInimage3' />
//                     </div>
//                     <div className='shopInimage'>
//                         <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17886020417717199.jpg' className='shopInimage4' />
//                     </div>
//                 </div>

//                 <div className='ShopInstagrtamImage-mobile'>
//                     <div style={{ display: 'flex' }}>
//                         <div className='shopInimage'>
//                             <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18048267676371955.jpg' className='shopInimage1' onClick={toggleOverlay} />
//                         </div>
//                         <div className='shopInimage'>
//                             <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17947561016152002.jpg' className='shopInimage2' />
//                         </div>
//                     </div>

//                     <div style={{ display: 'flex' }}>
//                         <div className='shopInimage'>
//                             <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/18222140416080296.jpg' className='shopInimage3' />
//                         </div>
//                         <div className='shopInimage'>
//                             <img src='https://cdn.showcasegalleries.io/media/instagram/public-showcase-media.sfo3.digitaloceanspaces.com/17886020417717199.jpg' className='shopInimage4' />
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div >
//     )
// }




import React, { useState } from 'react'
import './ShopOurInstagram.css'

import { FaInstagram } from "react-icons/fa";
import { Box, Modal } from '@mui/material';
import { IoMdClose } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export default function ShopOurInstagram() {

    const InstaImages = [
        {
            id: 1,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a735/828d0220-99df-11ee-a3a6-7b12bc7e3933.jpg?format=webp'
        },
        {
            id: 2,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede3f56d8214b0aae1fb/8462ac80-99df-11ee-8d11-b3ff59c6302f.jpg?format=webp'
        },
        {
            id: 3,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a736/84801f90-99df-11ee-a4a8-0bb3a85f5541.jpg?format=webp'
        },
        {
            id: 4,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a737/84654490-99df-11ee-b0ce-b78cd6615212.jpg?format=webp'
        },
        {
            id: 5,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6578e9d47892d5abf60635de/7fa9bbc0-9944-11ee-a79b-53ded4dd0460.jpg?format=webp'
        },
        
        {
            id: 6,
            iamge: 'https://www.gorjana.com/cdn/shop/files/Feature-Zoey_1.jpg?v=1700154326&%3Bwidth=700&em-format=avif'
        },
        {
            id: 7,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede364a945a463e6a735/828d0220-99df-11ee-a3a6-7b12bc7e3933.jpg?format=webp'
        },
        {
            id: 8,
            iamge: 'https://media-library.stackla.com/10/shopify-1538490427/2023-12/6579ede3f56d8214b0aae1fc/84877290-99df-11ee-af96-eb84dfa3004e.jpg?format=webp'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        // prevArrow: false, 
        // nextArrow: false,
    };

    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState('https://media-library.stackla.com/10/shopify-1538490427/2023-12/6578e9d47892d5abf60635de/7fa9bbc0-9944-11ee-a79b-53ded4dd0460.jpg?format=webp')
    const handleOpen = (image) => {
        setOpenImage(image)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div style={{ filter: open && 'blur(10px)' }}>
            <div className='TsrInstaMain' style={{ marginBlock: '100px' }}>
                <p className='gorInstaTitle'>@sonason</p>
                <div className='gorInstaMain'>
                    {
                        InstaImages.map((data, index) =>
                            <>
                                <div key={index} className='groInstaImagesMain'>
                                    <div className='groInstaImagesMainSub'>
                                        <img src={data.iamge} className='groInstaImages' onClick={() => handleOpen(data.iamge)} />
                                        <div className='gorInstaIconeMain'>
                                            <FaInstagram style={{ color: 'white', height: '25px', width: '25px' }} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{
                    outline: 'none',
                    border: 'none',
                    '& .custom-modal': { // Use a more specific selector for the modal and its children
                        border: 'none',
                    },
                }}
                className="custom-modal"
            >
                <Box component={'div'} className='gorInstagramPopup'>
                    <div className='mobilePopupTopFixed'>
                        <p className='mobilePopupTopFixedFont' onClick={handleClose}>Back</p>
                    </div>
                    <div className='gorinstapopupMain'>
                        <div className='gorInstagramPopupImage'>
                            <img src={openImage} className='gorinstapopupImg' />
                        </div>
                        <div className='gorInstagramPopupDesc'>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='closeIconeMain'>
                                <IoMdClose onClick={handleClose} style={{ height: '40px', borderRadius: '40px', color: 'white', backgroundColor: '#4d5469', padding: '7px', width: '40px', marginTop: '-15px', marginRight: '-15px', cursor: 'pointer' }} />
                            </div>

                            <div className='TsrpopupImagesTop' style={{ height: '15.5rem', borderBottom: '1px solid #e4e6ec', marginInline: '20px' }}>
                                <img data-v-42173558="" src="https://content-cdn.stackla.com/3704/6579ede364a945a463e6a736/avatar?width=52&amp;height=52&amp;crop=center" width="52" height="52" />@sonason
                                <p style={{ marginTop: '10px' }}>13G</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginInline: '20px' }}>
                                <p>Paseo Shimmer Cuff</p>
                                <p>$110.00</p>
                            </div>
                            <div style={{ marginInline: '10px' }}>
                                <Slider {...settings} >

                                    <div className='gorInstaSliderImageMain'>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/files/1611-3025-02-G_1_large.jpg?v=1699552645' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='	https://cdn.shopify.com/s/files/1/0015/3849/0427/files/226-3005-G_1_large.jpg?v=1698767137' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/files/227-001-G_1_9c7c56d7-a2be-4398-874e-761282984bc9_large.jpg?v=1690277944' className='gorInstaSliderImage' />
                                        </div>
                                    </div>

                                    <div className='gorInstaSliderImageMain'>

                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/files/2311-100-61-G_1_ac6ba43d-3865-4d62-af92-0d956aac6e7a_large.jpg?v=1699244864' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/products/COR23-PROopt02211-103-G-001_large.jpg?v=1692914964' className='gorInstaSliderImage' />
                                        </div>
                                        <div className='gorInstaSliderImageBox'>
                                            <img src='https://cdn.shopify.com/s/files/1/0015/3849/0427/products/2211-203-G_1_large.jpg?v=1690277926' className='gorInstaSliderImage' />
                                        </div>
                                    </div>
                                </Slider>

                                <button style={{
                                    border: 'none',
                                    backgroundColor: '#4d5469',
                                    color: 'white',
                                    height: '50px',
                                    width: '95%',
                                    marginInline: '10px',
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    marginTop: '50px'
                                }}>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </Box>
             
            </Modal>
        </div>
    )
}

