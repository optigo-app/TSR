import React, { useEffect, useState } from 'react'
import './index.css';
import SmilingRock from './smiling_Rock/SmilingRock';
import FestiveFinds from './FestiveFind/FestiveFinds';
import DaimondEveyone from './DaimondsEveryone/DaimondEveyone';
import Header from './Header/Header';
import ShopByCategory from './shopByCategory/ShopByCategory';
import SmilingBrides from './SmilingBrides/SmilingBrides';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import ShopifySection from './shopifySection/ShopifySection';
import SustainAbility from '../sustainAbility/SustainAbility';
import ShopOurInstagram from './shopOurInstagram/ShopOurInstagram';
import Footer from './Footer/Footer';
import axios from 'axios';
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import TopBanner from './topBanner/TopBanner';
import { designSet, isB2CFlag, isB2bFlag, loginState, productDataNew } from '../../../../../Recoil/atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productListApiCall } from '../../../Utils/API/ProductListAPI';
import { IoIosLogIn } from 'react-icons/io';
import { getDesignPriceList } from '../../../Utils/API/PriceDataApi';
import { DesignSet } from '../../../Utils/API/DesignSet';

export default function Home() {
  const setPdData = useSetRecoilState(productDataNew);
  const setDesignList = useSetRecoilState(designSet);
  const [isStoreInitData, setIsStoreInitData] = useState(false);
  const islogin = useRecoilValue(loginState);
  const [isB2bFlags, setIsB2BFlag] = useRecoilState(isB2bFlag);
  const [isB2CFlags, setIsB2CFlag] = useRecoilState(isB2CFlag);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      // const APIURL = 'http://zen/api/';
      const APIURL = 'https://api.optigoapps.com/test/store.aspx';

      const header = {
        Authorization: 'Bearer optigo_json_api',
        domain: 'gstore.orail.co.in',
        version: 'V4',
        sp: "1"
        // domain: 'zen',
      };
      // const header = {
      //   Authorization: 'Bearer optigo_json_api',
      //   YearCode:'',
      //   version: '',
      //   domain: 'zen',
      //   // domain: 'zen',
      // };

      try {
        const body = {
          "con": "{\"id\":\"\",\"mode\":\"store_init\"}",
          "p": "",
          "f": "formname (init)",
        };
        const response = await axios.post(APIURL, body, { headers: header });
        if (response.status === 200) {
          localStorage.setItem('UploadLogicalPath', response.data.Data.rd[0].UploadLogicalPath);
          localStorage.setItem('storeInit', JSON.stringify(response.data.Data.rd[0]));
          localStorage.setItem('myAccountFlags', JSON.stringify(response.data.Data.rd1));
          const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
          const IsB2BWebsite = storeInit?.IsB2BWebsite;
          setIsB2BFlag(IsB2BWebsite);
          setIsB2CFlag(IsB2BWebsite);
          setIsStoreInitData(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }


    const getMetalTypeData = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';
        const storedCustomerId = localStorage.getItem('LogdinCustomerId') || '0';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        // {"FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${storedCustomerId ?? 0}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"METALTYPECOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "Account (changePassword)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('MetalTypeData', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const getQualityColor = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid ?? 0}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"DIAQUALITYCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "header (getQualityColor)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('QualityColor', data)
        }

      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }


    const getColorStoneQualityData = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;
        // {"FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid ?? 0}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"CSQUALITYCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "indexPage (getColorStoneQualityData)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('ColorStoneQualityColor', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const getMetalColor = async () => {
      try {
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const { FrontEnd_RegNo } = storeInit;

        const storedData = localStorage.getItem('loginUserDetail') || '0';
        const data = JSON.parse(storedData);
        const customerid = data?.id;

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: `${customerid ?? 0}`
        });
        const encodedCombinedValue = btoa(combinedValue);
        const body = {
          "con": `{\"id\":\"\",\"mode\":\"METALCOLORCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "index (getSizeData)",
          "p": encodedCombinedValue
        }
        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('MetalColorData', data)
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        // setIsLoading(false);
      }
    }

    const currencyCombo = async () => {

      try {
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));

        const combinedValue = JSON.stringify({
          FrontEnd_RegNo: `${storeInit?.FrontEnd_RegNo}`, Customerid: `${loginUserDetail?.id ?? 0}`
        });
        const encodedCombinedValue = btoa(combinedValue);

        let body = {
          "con": `{\"id\":\"Store\",\"mode\":\"CURRENCYCOMBO\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "on-index(home)-call (CURRENCYCOMBO)",
          "p": encodedCombinedValue
        }

        await CommonAPI(body).then((res) => {
          if (res.Data.rd) {
            localStorage.setItem("CURRENCYCOMBO", JSON.stringify(res.Data.rd))
          }
          // console.log("res",res)
        })

      }
      catch (error) {
        console.log("error", error)
      }

    }


    const getColorImgData = async () => {

      try {
        const storeInit = JSON.parse(localStorage.getItem('storeInit'));
        const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));
        const storedEmail = localStorage.getItem('registerEmail') || '';

        const combinedValue = JSON.stringify({
          autocode: "", FrontEnd_RegNo: `${storeInit?.FrontEnd_RegNo}`, Customerid: `${loginUserDetail?.id ?? 0}`
        });
        const encodedCombinedValue = btoa(combinedValue);

        let body = {
          "con": `{\"id\":\"Store\",\"mode\":\"COLORIMAGELIST\",\"appuserid\":\"${storedEmail}\"}`,
          "f": "mainIndex.js (getTheAllColorData)",
          "p": encodedCombinedValue
        }

        const response = await CommonAPI(body);
        if (response.Data?.rd) {
          let data = JSON.stringify(response.Data?.rd)
          localStorage.setItem('colorDataImages', data)
        }

      }
      catch (error) {
        console.log("error", error)
      }

    }



    fetchData();
    getColorImgData();
    getMetalTypeData();
    getQualityColor();
    getColorStoneQualityData();
    getMetalColor();
    currencyCombo();
  }, [isStoreInitData]);

  useEffect(() => {
    const handelCurrencyData = (param) => {
      let currencyData = JSON.parse(localStorage.getItem('CURRENCYCOMBO'));

      let filterData = currencyData?.filter((cd) => cd?.Currencyid === param?.CurrencyCodeid)
      const DefaultCurrData = currencyData?.filter(item => item.IsDefault == 1);
      console.log("isDefaultCurr--", DefaultCurrData);

      if (filterData && filterData?.length > 0) {
        localStorage.setItem("currencyData", JSON.stringify(filterData[0]))
      }else if(DefaultCurrData && DefaultCurrData?.length > 0){
        localStorage.setItem("currencyData", JSON.stringify(DefaultCurrData[0]))
      } else {
        let DefaultObj = {
          "Currencyid": 42,
          "Currencycode": "INR",
          "Currencyname": "Rupees",
          "Currencysymbol": "₹",
          "CurrencyRate": 1.00000,
          "IsDefault": 1
        }
        localStorage.setItem("currencyData", JSON.stringify(DefaultObj))
      }
    }

    let pdDataCalling = async () => {
      await productListApiCall().then((res) => {
        setPdData(res)
      })
    }
    let designDataCall = async () => {
      await DesignSet().then((res) => {
          setDesignList(res)
      })
  }

    setTimeout(() => {
      handelCurrencyData();
      designDataCall();
      pdDataCalling();
      getDesignPriceList()
    }, 1000);

  }, [isStoreInitData])

  return (
    <div>
      <div className='homeMain'>
        <TopBanner />
        <FestiveFinds />
        <ShopByCategory />
        <SmilingBrides />
        <ShopOurInstagram />
        <Footer />
      </div>
    </div>
  )
}
