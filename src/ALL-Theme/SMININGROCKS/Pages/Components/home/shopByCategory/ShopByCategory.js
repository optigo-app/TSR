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
              <img src='https://www.gorjana.com/cdn/shop/files/Featured-GiftWrap.jpg?v=1711723795&width=1000&em-format=avif&em-width=1000' className='gorFutureBox1Images' />
              <p className='gorFutureBoxDesc'>Birthstones</p>
            </div>
            <div className='gorFetureBox1Sub'>
              <img src='https://www.gorjana.com/cdn/shop/files/Featured_collection_-_1.jpg?v=1711729486&width=1000&em-format=avif&em-width=1000' className='gorFutureBox1Images' />
              <p className='gorFutureBoxDesc'>Chain Links</p>
            </div>
          </div>
          <div className='gorFetureBox2'>
            <div>
              <img src='https://www.gorjana.com/cdn/shop/files/Featured_collection_7-_Birthstones_1.jpg?v=1711663660&width=1000&em-format=avif&em-width=1000' className='gorFetureBox2Images' />
              <p className='gorFutureBoxDesc'>Holiday Party Layers</p>
            </div>
            <div className='gorFetureBox2Sub'>
              <img src='https://www.gorjana.com/cdn/shop/files/Featured_collection_8-_New_Diamonds_1.jpg?v=1711663687&width=1000&em-format=avif&em-width=1000' className='gorFetureBox2Images' />
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
              <img src='https://www.gorjana.com/cdn/shop/files/Masonry_Grid_STL_1-_Retail_look_2_1.jpg?v=1711663865&width=1000&em-format=avif&em-width=1000' className='GorMansoryBox1Img' />
              <div className='gorShopLookBtnMain'>
                <button className='gorShopLookBtn'>Shop The Look</button>
                <BsBag style={{ backgroundColor: '#ffffffbf' }} />
              </div>
            </div>
            <div className='GorMansoryBox1ImageMain' style={{ marginTop: '40px' }}>
              <img src='https://www.gorjana.com/cdn/shop/files/Masonry_Grid_STL_1-_Retail_look_3_1.jpg?v=1711663861&width=1000&em-format=avif&em-width=1000' className='GorMansoryBox1Img' />
              <div className='gorShopLookBtnMain'>
                <button className='gorShopLookBtn'>Shop The Look</button>
                <BsBag style={{ backgroundColor: '#ffffffbf' }} />
              </div>
            </div>
          </div>
          <div className='GorMansoryBox2'>
            <div className='GorMansoryBox2ImageMain'>
              <img src='https://www.gorjana.com/cdn/shop/files/Masonry_Grid_STL_1-_Retail_look_1_1.jpg?v=1711663868&width=1000&em-format=avif&em-width=1000' className='GorMansoryBox2Img' />
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
