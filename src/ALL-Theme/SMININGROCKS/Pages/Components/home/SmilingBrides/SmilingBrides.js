import React, { useRef } from 'react'
import './SmilingBrides.css'
import bridesImage from '../../../assets/smilingBrides/brides1.webp'
import { Colors } from '../../../../lib/consts/Colors'
import { useDraggable } from 'react-use-draggable-scroll';


export default function SmilingBrides() {


    const ref = useRef();
    const { events } = useDraggable(ref);


    let demoJSON = [
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/Diamond_Alph_Necklace_Varient_90f9c966-5629-4838-86da-3f9754cdb5b2.jpg?v=1699847789&width=832&height=1109&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$68',
            more: 'More Options'
        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/products/2111-101a-G_1_029af065-8af7-4994-b011-bdd31bb887e2.jpg?v=1711938312&width=832&height=1109&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$568',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/GJ-0422-028_e29a490e-dc3d-4c0b-9c5e-b55422628d18.jpg?v=1689187260&width=832&height=1109&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$108',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/COR24_PRO_1811-014-02-GS_01.jpg?v=1701879069&width=832&height=1109&crop=center',
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/COR24_PRO_GS-2110-008-GS_01.jpg?v=1701879112&width=832&height=1109&crop=center',
            prodtitle: 'Serena',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: 'https://cdn.shopify.com/s/files/1/0015/3849/0427/files/WilderAlphabetBracelet_Collection_Shot.jpg?v=1700675714&width=1080&height=1440&crop=center',
            prodtitle: 'Gloriole',
            more: 'More Options',
            price: '$68'

        },
    ]

    return (
        <div>
            <p style={{
                textAlign: 'center',
                fontSize: '35px',
                fontFamily: 'PT Sans, sans-serif',
                margin: '0px'
            }}>Recommended For You</p>
            <div className='gorReccommMain' style={{
                display: 'flex',
                justifyContent: 'center',
                marginInline: '265px'
            }}>
                <div className="gor-scrollable-container"  >
                    <div className="gor-image-scroll-content" {...events} ref={ref}>
                        {demoJSON?.map((data, index) => (
                            <div key={index} className="gor-image-wrapper">
                                <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                    <img src={data.prodImg} alt={`Image ${index + 1}`} />
                                    <div>
                                        <p style={{ margin: '0px', fontFamily: 'PT Sans, sans-serif' }}>{data.prodtitle}</p>
                                        <p style={{ margin: '0px' ,fontFamily: 'PT Sans, sans-serif' }}>{data.price}</p>
                                        <p style={{fontFamily: 'PT Sans, sans-serif'}}>{data.more}</p>
                                        <div className='gorRecommDiv' >
                                            <button className='gorRecommBtn'>Add To Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
