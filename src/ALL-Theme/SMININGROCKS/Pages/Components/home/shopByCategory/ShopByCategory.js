import React from 'react'
import './ShopByCategory.css'
import { BsBag } from "react-icons/bs";

import shop1 from '../../../assets/Ring.jpg'
import shop2 from '../../../assets/shopByCategory/shopByCategory2.jpg'
import shop3 from '../../../assets/shopByCategory/shopByCategory3.webp'
import shop4 from '../../../assets/shopByCategory/shopByCategory4.jpg'
import { Colors } from '../../../../lib/consts/Colors'

export default function ShopByCategory() {
  return (
    // <div>
    //   <div>
    //     <p className='shopbycategoryTitle'>Shop By Category</p>
    //     <div className='shopbycategoryDesc'>
    //       <p style={{
    //         color: 'rgb(125, 127, 133)',
    //         fontSize: '13px',
    //         width: '240px',
    //         textAlign: 'center'

    //       }}>Discover Sonasons Fine Jewelry! Brilliant and Better!</p>
    //     </div>
    //     <div style={{
    //       display: 'flex',
    //       justifyContent: 'center',
    //       flexWrap: 'wrap'
    //     }} className='smilingSopCateMain'>
    //       <div className='shopByCategoryBox1Main'>
    //         <div className='shopByCategoryBox'>
    //           <img src='https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg?auto=compress&cs=tinysrgb&w=600' className='shopByCategoryBoxImg' />
    //           <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>RINGS</p>
    //         </div>
    //         <div className='shopByCategoryBox'>
    //           <img src="https://t3.ftcdn.net/jpg/05/73/04/02/240_F_573040288_qlf74CxChEtpChVqHxVRFAUh9Xx7e284.jpg" className='shopByCategoryBoxImg' />
    //           <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>EARRINGS</p>
    //         </div>
    //       </div>
    //       <div className='shopByCategoryBox2Main'>
    //         <div className='shopByCategoryBox'>
    //           <img src="https://t3.ftcdn.net/jpg/00/61/20/78/240_F_61207817_eVLm60K8BAHEkIpL9odBurd3Kp7CeLx8.jpg" className='shopByCategoryBoxImg' />
    //           <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>NACKLACES</p>
    //         </div >
    //         <div className='shopByCategoryBox'>
    //           <img src="https://t4.ftcdn.net/jpg/00/61/20/81/240_F_61208174_Rq7r0NljUzxpso4UfRqZQK1EvHNKMSje.jpg" className='shopByCategoryBoxImg' />
    //           <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>BRACELETS</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div>
        <p className='gorFutureMainTitleMobile'>Featured</p>
        <div className='gorFetureMain'>
          <div className='gorFetureBox1'>
            <div>
              <p className='gorFutureMainTitleWeb'>Featured</p>
              <img src='https://www.gorjana.com/cdn/shop/files/OffMonth-MasonryGrid-Birthstones.jpg?v=1701379789&%3Bwidth=1200&em-format=avif' className='gorFutureBox1Images' />
              <p className='gorFutureBoxDesc'>Birthstones</p>
            </div>
            <div className='gorFetureBox1Sub'>
              <img src='https://www.gorjana.com/cdn/shop/files/Feature-Zoey_1.jpg?v=1700154326&%3Bwidth=700&em-format=avif' className='gorFutureBox1Images' />
              <p className='gorFutureBoxDesc'>Chain Links</p>
            </div>
          </div>
          <div className='gorFetureBox2'>
            <div>
              <img src='https://www.gorjana.com/cdn/shop/files/MasonryGrid-GiftsThatGlitter_1.jpg?v=1701383338&%3Bwidth=1200&em-format=avif' className='gorFetureBox2Images' />
              <p className='gorFutureBoxDesc'>Holiday Party Layers</p>
            </div>
            <div className='gorFetureBox2Sub'>
              <img src='https://www.gorjana.com/cdn/shop/files/OffMonth-MasonryGrid-Layered-Sets.jpg?v=1701379896&%3Bwidth=1200&em-format=avif' className='gorFetureBox2Images' />
              <p className='gorFutureBoxDesc'>Layered Sets</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className='gorMasonryMainTitle'>New Layers We Love</p>

        <div className='GorMansoryMain'>
          <div className='GorMansoryBox1'>
            <div className='GorMansoryBox1ImageMain'>
              <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-1.jpg?v=1699488381&%3Bwidth=1180&em-format=avif' className='GorMansoryBox1Img' />
              <div className='gorShopLookBtnMain'>
                <button className='gorShopLookBtn'>Shop The Look</button>
                <BsBag style={{ backgroundColor: '#ffffffbf' }} />
              </div>
            </div>
            <div className='GorMansoryBox1ImageMain' style={{ marginTop: '40px' }}>
              <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-2_1.jpg?v=1699639359&%3Bwidth=1180&em-format=avif' className='GorMansoryBox1Img' />
              <div className='gorShopLookBtnMain'>
                <button className='gorShopLookBtn'>Shop The Look</button>
                <BsBag style={{ backgroundColor: '#ffffffbf' }} />
              </div>
            </div>
          </div>
          <div className='GorMansoryBox2'>
            <div className='GorMansoryBox2ImageMain'>
              <img src='https://www.gorjana.com/cdn/shop/files/NOV13-Site_Looks-3.jpg?v=1699488426&%3Bwidth=1180&em-format=avif' className='GorMansoryBox2Img' />
              <div className='gorShopLookBtnMain'>
                <button className='gorShopLookBtn'>Shop The Look</button>
                <BsBag style={{ backgroundColor: '#ffffffbf' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='MasonryBtnMain' style={{ display: 'flex', justifyContent: 'center', marginBlock: '80px' }}>
          <button className='GorMansoryBtn'>SEE ALL THE LOOKS</button>
        </div>
      </div>
    </div>
  )
}
