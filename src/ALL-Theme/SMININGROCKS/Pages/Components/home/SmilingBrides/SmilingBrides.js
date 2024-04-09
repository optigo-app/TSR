import React, { useRef } from 'react'
import './SmilingBrides.css'
import bridesImage from '../../../assets/smilingBrides/brides1.webp'
import { Colors } from '../../../../lib/consts/Colors'
import { useDraggable } from 'react-use-draggable-scroll';
import recom1 from '../../../assets/TSR/recom1.jpg'
import recom2 from '../../../assets/TSR/recom2.jpg'
import recom3 from '../../../assets/TSR/recom3.jpg'
import recom4 from '../../../assets/TSR/recom4.jpg'
import recom5 from '../../../assets/TSR/recom5.jpg'
import recom6 from '../../../assets/TSR/recom6.jpg'


export default function SmilingBrides() {


    const ref = useRef();
    const { events } = useDraggable(ref);


    let demoJSON = [
        {
            prodImg: recom1,
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$68',
            more: 'More Options'
        },
        {
            prodImg: recom2,
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$568',
            more: 'More Options'

        },
        {
            prodImg: recom3,
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$108',
            more: 'More Options'

        },
        {
            prodImg: recom4,
            prodtitle: 'Bespoke Wilder Tag Bracelet',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: recom5,
            prodtitle: 'Serena',
            price: '$68',
            more: 'More Options'

        },
        {
            prodImg: recom6,
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
