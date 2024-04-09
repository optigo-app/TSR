import React from 'react'
import './ShopByCategory.css'
import { BsBag } from "react-icons/bs";

import shop1 from '../../../assets/TSR/fue1.jpg'
import shop2 from '../../../assets/TSR/fue2.jpg'
import shop3 from '../../../assets/TSR/fue3.jpg'
import shop4 from '../../../assets/TSR/fue4.jpg'
import layer1 from '../../../assets/TSR/layer1.jpg'
import layer2 from '../../../assets/TSR/layer2.jpg'
import layer3 from '../../../assets/TSR/layer3.jpg'
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
              <img src={shop1} className='gorFutureBox1Images' />
              <p className='gorFutureBoxDesc'>Birthstones</p>
            </div>
            <div className='gorFetureBox1Sub'>
              <img src={shop2} className='gorFutureBox1Images' />
              <p className='gorFutureBoxDesc'>Chain Links</p>
            </div>
          </div>
          <div className='gorFetureBox2'>
            <div>
              <img src={shop3} className='gorFetureBox2Images' />
              <p className='gorFutureBoxDesc'>Holiday Party Layers</p>
            </div>
            <div className='gorFetureBox2Sub'>
              <img src={shop4} className='gorFetureBox2Images' />
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
              <img src={layer1} className='GorMansoryBox1Img' />
              <div className='gorShopLookBtnMain'>
                <button className='gorShopLookBtn'>Shop The Look</button>
                <BsBag style={{ backgroundColor: '#ffffffbf' }} />
              </div>
            </div>
            <div className='GorMansoryBox1ImageMain' style={{ marginTop: '40px' }}>
              <img src={layer2} className='GorMansoryBox1Img' />
              <div className='gorShopLookBtnMain'>
                <button className='gorShopLookBtn'>Shop The Look</button>
                <BsBag style={{ backgroundColor: '#ffffffbf' }} />
              </div>
            </div>
          </div>
          <div className='GorMansoryBox2'>
            <div className='GorMansoryBox2ImageMain'>
              <img src={layer3} className='GorMansoryBox2Img' />
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
