import React, { useCallback, useEffect, useRef, useState } from "react";
import Footer from "../home/Footer/Footer";
import SmilingRock from "../home/smiling_Rock/SmilingRock";
import "./product.css";
import { json, useFetcher, useLocation, useNavigate } from "react-router-dom";
import prodListData from "../../jsonFile/Productlist_4_95oztttesi0o50vr.json";
// import prodListData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_Original.json";
import filterData from "../../jsonFile/M_4_95oztttesi0o50vr.json";
import PriceData from "../../jsonFile/Productlist_4_95oztttesi0o50vr_8.json";
// import PriceData from "../../jsonFile/testingFile/Productlist_4_95oztttesi0o50vr_8_Original.json";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Checkbox, CircularProgress, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, Slider, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CommonAPI } from "../../../Utils/API/CommonAPI";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartListCounts, HeaderData, HeaderData2, WishListCounts, colorstoneQualityColorG, diamondQualityColorG, metalTypeG, newMenuData, priceData, productDataNew, searchData, isB2CFlag, loginState } from "../../../../../Recoil/atom";
import { GetCount } from "../../../Utils/API/GetCount";
import notFound from "../../assets/image-not-found.png";
import { Category } from "@mui/icons-material";
import { toast } from "react-toastify";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import GridViewIcon from '@mui/icons-material/GridView';
import AppsIcon from '@mui/icons-material/Apps';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import CloseIcon from '@mui/icons-material/Close';
import { IoGrid } from "react-icons/io5";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;


const ProductList = () => {
  const dropdownRef = useRef(null);
  const ProductData2 = [];
  const [imageUrl, setImageUrl] = useState('https://cdnfs.optigoapps.com/content-global3/gstoreTHO8349NSI2EA6VQP/Design_Image/4EECAB68AEMDAwMzg4NQ==/Red_Medium/0003885_04012024185657737.png');
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [ProductApiData, setProductApiData] = useState([])
  const [ProductApiData2, setProductApiData2] = useState([])
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false)
  const [filterChecked, setFilterChecked] = useState({})
  const [wishFlag, setWishFlag] = useState(false)
  const [cartFlag, setCartFlag] = useState(false)
  const [cartData, setCartData] = useState([])
  const [WishData, setWishData] = useState([])
  const [cartRemoveData, setCartRemoveData] = useState("")
  const [wishListRemoveData, setWishListRemoveData] = useState("")
  const [newProData, setNewProData] = useState(ProductApiData2)
  // const [priceDataApi, setpriceDataApi] = useRecoilState(priceData)
  const [priceDataApi, setpriceDataApi] = useState([])
  const [currencySym, setCurrencySym] = useState()

  const [metalRdPrice, setMetalRdPrice] = useState([])
  const [diaRd1Price, setDiaRd1Price] = useState([])
  const [csRd2Price, setCsRd2Price] = useState([])

  const setCartCount = useSetRecoilState(CartListCounts)
  const setWishCount = useSetRecoilState(WishListCounts)
  const getHeaderData = useRecoilValue(HeaderData)
  const getHeaderData2 = useRecoilValue(HeaderData2)
  const getnewMenuData = useRecoilValue(newMenuData)


  // console.log("getnewMenuData",getnewMenuData)  
  // console.log("ProductApiData2",ProductApiData2.filter((pd)=>pd?.CollectionName === "Shred"))


  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minNetwt, setMinNetwt] = useState(null);
  const [maxNetwt, setMaxNetwt] = useState(null);
  const [minGrosswt, setMinGrossWt] = useState(null);
  const [maxGrosswt, setMaxGrossWtt] = useState(null);
  const [minDiamondWt, setMinDiamondWt] = useState(null);
  const [maxDiamondWt, setMaxDiamondWt] = useState(null);

  const [hoverProductImageShow, setHoverProductImageShow] = useState(false);
  const [isColorWiseImageShow, setIsColorWiseImage] = useState('');
  const [isShowfilter, setIsShowFilter] = useState(true);

  const navigate = useNavigate();

  const getPdData = useRecoilValue(productDataNew)
  const getSearchData = useRecoilValue(searchData)
  const mtName = useRecoilValue(metalTypeG)
  const dqcName = useRecoilValue(diamondQualityColorG)
  const csqcName = useRecoilValue(colorstoneQualityColorG)
  // console.log(mtName, dqcName, csqcName);
  //RANGE FILTERS

  const [value1, setValue1] = useState([minPrice, maxPrice]);
  const [value2, setValue2] = useState([minNetwt, maxNetwt]);
  const [value3, setValue3] = useState([minGrosswt, maxGrosswt]);
  const [value4, setValue4] = useState([minDiamondWt, maxDiamondWt]);

  const [ismetalWShow, setIsMeatlWShow] = useState('');
  const [isGrossWShow, setIsGrossShow] = useState('');
  const [isDaaimongWShow, setIsDaaimongWShow] = useState('');
  const [isDaaimonPShow, setIsDaaimonPShow] = useState('');
  const [isStoneWShow, setIsStoneWShow] = useState('');
  const [isStonePShow, setIsStonePShow] = useState('');
  const [isMetalTCShow, setIsMetalTCShow] = useState('');
  const [isPriceShow, setIsPriceShow] = useState('');
  const [updatedColorImage, setUpdateColorImage] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [globImagePath, setGlobImagepath] = useState();
  const [IsProdLoading, setIsProdLoading] = useState(false);
  const [currData, setCurrData] = useState()

  const handelCurrencyData = () => {

    let currencyData = JSON.parse(localStorage.getItem('CURRENCYCOMBO'));
    let loginData = JSON.parse(localStorage.getItem('loginUserDetail'));
    console.log("param", loginData);

    if (currencyData && loginData) {
      const filterData = currencyData?.filter((cd) => cd?.Currencyid === loginData?.CurrencyCodeid)[0]
      console.log("currencyData", filterData);
      setCurrData(filterData)
    }
  }

  useEffect(() => {
    handelCurrencyData();
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (getSearchData) {
        setNewProData(getSearchData);
      }
    }, 100);
  }, [getSearchData]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allproductlist"));
    setProductApiData2(data)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("getPriceData"));
    setpriceDataApi(data)
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {

  //     const data = JSON.parse(localStorage.getItem("allproductlist"));
  //     const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));

  //     const updatedData = await Promise?.all(data?.map(async (product) => {
  //       const newPriceData = priceDataApi?.rd?.find(
  //         (pda) =>
  //           pda.A === product.autocode &&
  //           pda.B === product.designno &&
  //           pda.D === loginUserDetail?.cmboMetalType
  //       );

  //       const newPriceData1 = priceDataApi?.rd1?.find(
  //         (pda) =>
  //           pda.A === product.autocode &&
  //           pda.B === product.designno &&
  //           pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
  //           pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
  //       );


  //       const newPriceData2 = priceDataApi?.rd2?.find(
  //         (pda) =>
  //           pda.A === product.autocode &&
  //           pda.B === product.designno &&
  //           pda.H === loginUserDetail?.cmboCSQualityColor?.split('#@#')[0].toUpperCase() &&
  //           pda.J === loginUserDetail?.cmboCSQualityColor?.split('#@#')[1].toUpperCase()
  //       );

  //       let price = 0;
  //       let isLoading = true;
  //       let markup = 0;
  //       let metalrd = 0;
  //       let diard1 = 0;
  //       let csrd2 = 0;

  //       if (newPriceData || newPriceData1 || newPriceData2) {
  //         price = (newPriceData?.Z ?? 0) + (newPriceData1?.S ?? 0) + (newPriceData2?.S ?? 0);
  //         metalrd = newPriceData?.Z
  //         diard1 = newPriceData1?.S
  //         csrd2 = newPriceData2?.S ?? 0
  //         markup = newPriceData?.AB
  //         isLoading = false;
  //       }
  //       else {
  //         isLoading = false;
  //       }

  //       return { ...product, price, isLoading, markup, metalrd, diard1, csrd2 };
  //     }));

  //     localStorage.setItem("allproductlist", JSON.stringify(updatedData));
  //     setProductApiData2(updatedData);
  //   };

  //   fetchData();
  // }, [priceDataApi]);

  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(localStorage.getItem("allproductlist"));
      const loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail'));
      const storeInit = JSON.parse(localStorage.getItem('storeInit'));

      // let newRd = [];
      const updatedData = await Promise?.all(data?.map(async (product) => {
        const newPriceData = priceDataApi?.rd?.find(
          (pda) =>
            storeInit?.IsMetalCustomization === 1
              ?
              pda.A === product.autocode &&
              pda.B === product.designno &&
              pda.D === loginUserDetail?.cmboMetalType
              :
              pda.A === product.autocode &&
              pda.B === product.designno
        );

        const newPriceData1 = priceDataApi?.rd1?.filter(
          (pda) =>

            storeInit?.IsDiamondCustomization === 1
              ?
              pda.A === product.autocode &&
              pda.B === product.designno &&
              pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
              pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
              :
              pda.A === product.autocode &&
              pda.B === product.designno

        ).reduce((acc, obj) => acc + obj.S, 0)

        // const newPriceData11 = priceDataApi?.rd1?.filter(
        //   (pda) =>
        //     pda.A === product.autocode &&
        //     pda.B === product.designno &&
        //     pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
        //     pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
        // )
        // if(newPriceData1){
        //   newRd.push(newPriceData1);
        // }

        // console.log("newPriceData11",newPriceData11)



        const newPriceData2 = priceDataApi?.rd2?.filter(
          (pda) =>

            storeInit?.IsCsCustomization === 1
              ?
              pda.A === product.autocode &&
              pda.B === product.designno &&
              pda.H === loginUserDetail?.cmboCSQualityColor?.split('#@#')[0].toUpperCase() &&
              pda.J === loginUserDetail?.cmboCSQualityColor?.split('#@#')[1].toUpperCase()
              :
              pda.A === product.autocode &&
              pda.B === product.designno

        ).reduce((acc, obj) => acc + obj.S, 0)

        let price = 0;
        let markup = 0;
        let metalrd = 0;
        let diard1 = 0;
        let csrd2 = 0;

        if (newPriceData || newPriceData1 || newPriceData2) {
          price = (((newPriceData?.V ?? 0) / currData?.CurrencyRate ?? 0) + newPriceData?.W ?? 0) + (newPriceData1 ?? 0) + (newPriceData2 ?? 0);
          metalrd = (((newPriceData?.V ?? 0) / currData?.CurrencyRate ?? 0) + newPriceData?.W ?? 0)
          diard1 = newPriceData1 ?? 0
          csrd2 = newPriceData2 ?? 0
          markup = newPriceData?.AB
        }

        return { ...product, price, markup, metalrd, diard1, csrd2 }
      }));

      // console.log("newRd",newRd);

      localStorage.setItem("allproductlist", JSON.stringify(updatedData));
      setProductApiData2(updatedData);
    };

    fetchData();
  }, [priceDataApi]);

  const toggleDeatilList = () => {
    setIsOpenDetail(!isOpenDetail)
  };

  const getCountFunc = async () => {
    await GetCount().then((res) => {
      if (res) {
        setCartCount(res.CountCart)
        setWishCount(res.WishCount)
      }
    })

  }

  function paramnameSetting(paramVal) {
    if (paramVal === 'param0') {
      return getnewMenuData?.data?.param0name
    }
    if (paramVal === 'param1') {
      return getnewMenuData?.data?.param1name
    }
    if (paramVal === 'param2') {
      return getnewMenuData?.data?.param2name
    }
  }

  function paramdataSetting(paramVal) {
    if (paramVal === 'param0') {
      return getnewMenuData?.data?.param0dataname
    }
    if (paramVal === 'param1') {
      return getnewMenuData?.data?.param1dataname
    }
    if (paramVal === 'param2') {
      return getnewMenuData?.data?.param2dataname
    }
  }

  useEffect(() => {
    if (paramnameSetting(getnewMenuData.label) === "brand") {
      const data = ProductApiData2.filter((pd) => pd && pd.BrandName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }

    if (paramnameSetting(getnewMenuData.label) === "collection") {
      const data = ProductApiData2.filter((pd) => pd && pd.CollectionName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }

    if (paramnameSetting(getnewMenuData.label) === "category") {
      const data = ProductApiData2.filter((pd) => pd && pd.CategoryName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }

    if (paramnameSetting(getnewMenuData.label) === "gender") {
      const data = ProductApiData2.filter((pd) => pd && pd.GenderName === paramdataSetting(getnewMenuData.label))
      if (data) {
        setNewProData(data)
      }
    }
  }, [getnewMenuData, ProductApiData2])

  const fetchFile = async () => {

    let storeinit = JSON.parse(localStorage.getItem("storeInit"))
    let loginInfo = JSON.parse(localStorage.getItem("loginUserDetail"))
    setIsColorWiseImage(storeinit.IsColorWiseImages);
    setIsMeatlWShow(storeinit.IsMetalWeight);
    setIsGrossShow(storeinit.IsGrossWeight);
    setIsDaaimongWShow(storeinit.IsDiamondWeight);
    setIsDaaimonPShow(storeinit.IsDiamondPcs);
    setIsStoneWShow(storeinit.IsStoneWeight);
    setIsStonePShow(storeinit.IsStonePcs);
    setIsMetalTCShow(storeinit.IsMetalTypeWithColor);
    setIsPriceShow(storeinit.IsPriceShow);

    await axios.get(
      `https://${storeinit?.domain}/assets/${storeinit?.FrontEnd_RegNo}/Store_Data/Productlist/Productlist_${loginInfo?.PackageId}_${storeinit?.FrontEnd_RegNo}.txt`
    ).then(
      (res) => {
        setProductApiData(res?.data)
      })
      .catch((err) => console.log("err", err))
  };

  useEffect(() => {

    let Symbol = JSON.parse(localStorage.getItem('CURRENCYCOMBO'))
    setCurrencySym(Symbol)

    fetchFile()
  }, [])

  const toggleDrawerOverlay = () => {
    setDrawerShowOverlay(!drawerShowOverlay);
  };

  let productData = [];

  if (ProductApiData?.data?.[0]) {
    ProductApiData.data[0]?.map((ele) => {
      let obj = {};
      Object.entries(prodListData?.ProductsList)?.map((objele) => {
        obj[objele[0]] = ele[objele[1]];
      });
      productData.push(obj);
    });
  }

  useEffect(() => {
    const element = document.getElementById("top")
    element.scrollIntoView()
  }, []);

  // function updateProductsWithMetalColorName() {
  //   productData?.forEach((product) => {
  //     const metalColor = filterData?.MetalColorList?.find(
  //       (color) => color.MetalColorid === product.MetalColorid
  //     );
  //     const categoryName = filterData?.CategoryList?.find(
  //       (cate) => cate.Categoryid === product.Categoryid
  //     );
  //     const collectionName = filterData?.CollectionList?.find(
  //       (coll) => coll.Collectionid === product.Collectionid
  //     );
  //     const mtpurity = filterData?.MetalPurityList?.find(
  //       (mtp) => mtp.MetalPurityid === product.MetalPurityid
  //     );
  //     const prodtype = filterData?.ProductTypeList?.find(
  //       (pt) => pt.Producttypeid === product.Producttypeid
  //     );
  //     const gendertype = filterData?.GenderList?.find(
  //       (gen) => gen.Genderid === product.Genderid
  //     );
  //     const Berandtype = filterData?.BrandList?.find(
  //       (brand) => brand.Brandid === product.Brandid
  //     )
  //     const MetalType = filterData?.MetalTypeList?.find(
  //       (mt) => mt.MetalTypeid === product.MetalTypeid
  //     )
  //     const OcassionType = filterData?.OcassionList?.find(
  //       (ocs) => ocs.Ocassionid === product.Ocassionid
  //     )
  //     const SubCategoryType = filterData?.SubCategoryList?.find(
  //       (sct) => sct.SubCategoryid === product.SubCategoryid
  //     )
  //     const ThemeType = filterData?.ThemeList?.find(
  //       (tl) => tl.Themeid === product.Themeid
  //     )

  //     if (metalColor) {
  //       product.MetalColorName = metalColor.MetalColorName;
  //     }
  //     if (categoryName) {
  //       product.CategoryName = categoryName.CategoryName;
  //     }
  //     if (collectionName) {
  //       product.CollectionName = collectionName.CollectionName;
  //     }
  //     if (mtpurity) {
  //       product.MetalPurity = mtpurity.MetalPurity;
  //     }
  //     if (prodtype) {
  //       product.ProducttypeName = prodtype.ProducttypeName;
  //     }
  //     if (gendertype) {
  //       product.GenderName = gendertype.GenderName;
  //     }
  //     if (Berandtype) {
  //       product.BrandName = Berandtype.BrandName
  //     }
  //     if (MetalType) {
  //       product.MetalTypeName = MetalType.MetalTypeName
  //     }
  //     if (OcassionType) {
  //       product.OcassionName = OcassionType.OcassionName
  //     }
  //     if (SubCategoryType) {
  //       product.SubCategoryName = SubCategoryType.SubCategoryName
  //     }
  //     if (ThemeType) {
  //       product.ThemeName = ThemeType.ThemeName
  //     }
  //   });

  //   return productData;
  // }


  // const diffCartData = useCallback(() => {

  //   // let pdata;

  //   ProductApiData2.forEach((pd) => {
  //     const pdata = cartData?.find((cd) => pd.designno === cd.DesignNo)



  //     if (pdata && !pd?.checkFlag) {
  //       pd.checkFlag = true
  //     }
  //     else {
  //       pd.checkFlag = false
  //     }
  //   })


  //   return ProductApiData2

  // }, [ProductApiData2, cartData])

  // diffCartData()

  // const diffWishData = useCallback(() => {

  //   ProductApiData2.forEach((pd) => {
  //     const pdata = WishData.find((cd) => pd.designno === cd.DesignNo)


  //     if (pdata && !pd?.wishCheck) {
  //       pd.wishCheck = true
  //     }
  //     else {
  //       pd.wishCheck = false
  //     }
  //   })

  //   return ProductApiData2

  // }, [ProductApiData2, WishData])


  // diffWishData()

  // const removefromCart = () => {
  //   ProductApiData2.map((pd) => {


  //     if (cartRemoveData && pd.designno === cartRemoveData) {
  //       pd.checkFlag = false
  //     }

  //     if (wishListRemoveData && pd.designno === wishListRemoveData) {
  //       pd.wishCheck = false
  //     }

  //   })


  //   return ProductApiData2
  //   // // console.log("prodddd",product);
  //   // let prodD;
  //   // productData.forEach((pd)=>{

  //   //   // let prodD = productData.find((p)=>p?.designno === product?.designno && p?.checkFlag === true)

  //   //   // if(prodD){
  //   //   //   pd.checkFlag = false
  //   //   // }

  //   // if(pd?.designno===product?.designno){
  //   //    prodD = pd
  //   // }
  //   // if(prodD){
  //   //   pd.checkFlag = false
  //   // }

  //   // })

  //   // console.log("prodD",prodD);
  //   // return productData
  // }

  // removefromCart()

  // ProductApiData2?.map((product) => {
  //     console.log("product",product);

  //    let loginUserDetail = JSON.parse(localStorage.getItem('loginUserDetail')) 

  //   const newPriceData = priceDataApi.rd?.find(
  //     (pda) => 
  //       pda.A === product.autocode && 
  //       pda.B === product.designno &&
  //       pda.D === loginUserDetail?.cmboMetalType 
  //   )

  //   const newPriceData1 = priceDataApi.rd1?.find(
  //     (pda) => 
  //       pda.A === product.autocode && 
  //       pda.B === product.designno && 
  //       pda.H === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[0] &&
  //       pda.J === loginUserDetail?.cmboDiaQualityColor?.split('#@#')[1]
  //   )

  //   const newPriceData2 = priceDataApi.rd2?.find(
  //     (pda) => 
  //       pda.A === product.autocode && 
  //       pda.B === product.designno && 
  //       pda.H === loginUserDetail?.cmboCSQualityColor?.split('#@#')[0] &&
  //       pda.J === loginUserDetail?.cmboCSQualityColor?.split('#@#')[1]

  //   )



  //   if (newPriceData || newPriceData1 || newPriceData2) {
  //     product['price'] = (newPriceData?.Z ?? 0) + (newPriceData1?.S ?? 0) + (newPriceData2?.S ?? 0)
  //   } else {
  //     product['price'] = "Not Availabel";
  //   }



  // });

  //     localStorage.setItem("allproductlist",JSON?.stringify(product))
  //     setProductApiData2(product)

  useEffect(() => {
    let newWishCheckData = (ProductApiData2 || []).map((pd) => {
      const newWish = WishData?.find((cd) => pd.designno === cd.DesignNo && pd.autocode === cd.autocode);
      let wishCheck = !!newWish;
      return { ...pd, wishCheck };
    });

    try {
      localStorage.setItem("allproductlist", JSON.stringify(newWishCheckData));
      if (JSON.stringify(newWishCheckData) !== JSON.stringify(ProductApiData2)) {
        setProductApiData2(newWishCheckData);
      }
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  }, [WishData, ProductApiData2])

  //let cartlistUpdate = async () => {
  // let newCartCheckData = (ProductApiData2)?.map((pd) => {

  //   let newWish = cartData?.find((cd) => pd.designno === cd.DesignNo && pd.autocode === cd.autocode)


  //   let checkFlag = false
  //   if (newWish) {
  //     checkFlag = true
  //   } else {
  //     checkFlag = false
  //   }
  //   return { ...pd, checkFlag }
  // })
  // setProductApiData2(newCartCheckData)
  // if(newCartCheckData){
  //   localStorage.setItem("allproductlist",JSON.stringify(newCartCheckData))
  // }
  //}

  useEffect(() => {
    let newCartCheckData = (ProductApiData2 || []).map((pd) => {
      const newWish = cartData?.find((cd) => pd.designno === cd.DesignNo && pd.autocode === cd.autocode);
      let checkFlag = !!newWish;
      return { ...pd, checkFlag };
    });

    try {
      localStorage.setItem("allproductlist", JSON.stringify(newCartCheckData));
      if (JSON.stringify(newCartCheckData) !== JSON.stringify(ProductApiData2)) {
        setProductApiData2(newCartCheckData);
      }
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  }, [cartData, ProductApiData2])


  const handelProductSubmit = (product) => {
    localStorage.setItem("srProductsData", JSON.stringify(product));
    navigate("/productdetail");
  };

  const NewFilterData = () => {
    const newFilter = [];
    filterData?.SideMenuList?.forEach((ele) => {
      if (ele.Fno === '1') {
        newFilter.push({ label: "CATEGORY", filterList: filterData.CategoryList?.map((ele) => { return ele.CategoryName }), listType: 'CategoryName' });
      } else if (ele.Fno === '2') {
        newFilter.push({ label: "PRODUCT TYPE", filterList: filterData.ProductTypeList?.map((ele) => { return ele.ProducttypeName }), listType: 'ProducttypeName' });
      } else if (ele.Fno === '8') {
        newFilter.push({ label: "GENDER", filterList: filterData.GenderList?.map((ele) => { return ele.GenderName }), listType: 'GenderName' });
      } else if (ele.Fno === '12') {
        // newFilter.push({ label: "PRICE", filterList: [] });
      } else if (ele.Fno === '15') {
        newFilter.push({ label: "COLLECTION", filterList: filterData.CollectionList?.map((ele) => { return ele.CollectionName }), listType: 'CollectionName' });
      } else if (ele.Fno === '18') {

        newFilter.push({ label: "PRICE", filterList: [] });
        newFilter.push({ label: "NETWT", filterList: [] });
        newFilter.push({ label: "GROSSWT", filterList: [] });
        newFilter.push({ label: "DIAMONDWT", filterList: [] });
      }
    });

    return newFilter;
  }

  const handleCheckboxChange = (e, ele, flist) => {
    const { name, checked, value } = e.target;

    setFilterChecked((prev) => ({
      ...prev,
      [name]: { checked, value: flist, type: ele.listType }
    }));
  }


  // useEffect(() => {
  //   let FilterDataVar = [];
  //   let NewFilterArr = Object?.values(filterChecked).filter((ele) => ele?.checked === true)
  //   NewFilterArr.map((ele) => {
  //     let fd = ProductApiData2.filter((pd) => pd[ele?.type] === ele?.value)
  //     if (fd) {
  //       FilterDataVar.push(fd)
  //     }
  //   })

  //   console.log("filterDataVar",NewFilterArr)

  //   if (FilterDataVar.length && FilterDataVar) {
  //     let reverseData = FilterDataVar.reverse()
  //     const mergedArray = [].concat(...reverseData);
  //     setNewProData(mergedArray)
  //     // console.log("FilterDataVar", mergedArray)
  //   } else {
  //     setNewProData(ProductApiData2)
  //   }

  // }, [filterChecked])

  useEffect(() => {
    let filteredData = ProductApiData2;

    const activeFilters = Object.values(filterChecked).filter(ele => ele.checked);

    if (activeFilters.length > 0) {
      filteredData = filteredData.filter(product => {
        // Group filters by type
        const filtersByType = activeFilters.reduce((acc, filter) => {
          acc[filter.type] = acc[filter.type] || [];
          acc[filter.type].push(filter);
          return acc;
        }, {});

        // console.log("filtersByType",Object.values(filtersByType).every)


        // return Object.values(filtersByType).every(filters => {
        //     return filters.some(filter => product[filter.type] === filter.value);
        // });

        return Object.values(filtersByType).every(filters => {
          const filterResults = filters.map(filter => product[filter.type] === filter.value);
          return filterResults.some(result => result);
        });
      });
    }

    setNewProData(filteredData);
  }, [filterChecked]);


  const getCartAndWishListData = async () => {

    const UserEmail = localStorage.getItem("registerEmail")
    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

    let EncodeData = { FrontEnd_RegNo: `${storeInit?.FrontEnd_RegNo}`, Customerid: `${Customer_id?.id ?? 0}` }

    const encodedCombinedValue = btoa(JSON.stringify(EncodeData));

    const body = {
      "con": `{\"id\":\"Store\",\"mode\":\"getdesignnolist\",\"appuserid\":\"${UserEmail ?? ''}\"}`,
      "f": " useEffect_login ( getdataofcartandwishlist )",
      "p": encodedCombinedValue
    }

    await CommonAPI(body).then((res) => {
      if (res?.Message === "Success") {

        setCartData(res?.Data?.rd)
        setWishData(res?.Data?.rd1)

      }
    })

  }

  useEffect(() => {

    getCartAndWishListData()
    // getCountApi()
    getCountFunc()

  }, [])
  const isLoginStatus = useRecoilValue(loginState);
  const isB2CFlags = useRecoilValue(isB2CFlag);
  const handelWishList = async (event, prod) => {
    if (isLoginStatus == "false" && isB2CFlags == 0) {
      navigate('/LoginOption');
    }
    try {
      setWishFlag(event.target.checked)

      if (event.target.checked === true) {

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        const product = prod

        const finalJSON = {
          "stockweb_event": "",
          "Mastermanagement_CategorySize": "",
          "sizeamountpersentage": "",
          "stockno": "",
          "is_show_stock_website": "0",
          "cmboDiaQualityColor": "C-VS#@#FG",
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
          "BrandName": `${product?.BrandName ?? ""}`,
          "Brandid": 5,
          "CategoryName": `${product?.CategoryName}`,
          "Categoryid": Number(`${product?.Categoryid}`),
          "CenterStoneId": Number(`${product?.CenterStoneId}`),
          "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
          "CollectionName": `${product?.CollectionName}`,
          "Collectionid": Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName": `${product?.DefaultImageName}`,
          "DisplayOrder": Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName": `${product?.GenderName}`,
          "Genderid": Number(`${product?.Genderid}`),
          "Grossweight": Number(`${product?.Grossweight}`),
          "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller": Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists": `${product?.ColorWiseRollOverImageName ?? ""}`,
          "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
          "IsNewArrival": `${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists ?? ""}`,
          "IsTrending": Number(`${product?.IsTrending}`),
          "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
          "MasterManagement_labname": "",
          "MetalColorName": `${product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName": `${product?.MetalTypeName ?? ""}`,
          "MetalTypeid": Number(`${product?.IsInReadyStock}`),
          "MetalWeight": Number(`${product?.MetalWeight}`),
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": Number(`${product?.Ocassionid}`),
          "ProducttypeName": `${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName": `${product?.RollOverImageName}`,
          "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
          "SubCategoryid": Number(`${product?.SubCategoryid ?? ""}`),
          "ThemeName": `${product?.ThemeName ?? ""}`,
          "Themeid": Number(`${product?.Themeid}`),
          "TitleLine": `${product?.TitleLine}`,
          "UnitCost": `${product?.price === "Not Available" ? 0 : product?.price}`,
          "UnitCostWithmarkup": (`${(product?.price === "Not Available" ? 0 : product?.price) + (product?.markup ?? 0)}`),
          "autocode": `${product?.autocode}`,
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "designno": `${product?.designno}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs": Number(`${product?.diamondpcs}`),
          "diamondquality": `${product?.diamondquality?.split(",")[0]}`,
          "diamondsetting": `${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno": `${product?.encrypted_designno ?? ""}`,
          "hashtagid": `${product?.Hashtagid ?? ""}`,
          "hashtagname": `${product?.Hashtagname ?? ""}`,
          "imagepath": `${product?.imagepath}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "mediumimage": `${product?.MediumImagePath ?? ""}`,
          "originalimage": `${product?.OriginalImagePath}`,
          "storyline_html": `${product?.storyline_html ?? ""}`,
          "storyline_video": `${product?.storyline_video ?? ""}`,
          "thumbimage": `${product?.ThumbImagePath}`,
          "totaladditionalvalueweight": 0,
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.UpdateDate}`,
          "videoname": `${product?.videoname ?? ""}`,
          "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "DQuality": `${product?.diamondquality?.split(",")[0]}`,
          "DColor": `${product?.diamondcolorname}`,
          "UploadLogicalPath": `${product?.UploadLogicalPath ?? ""}`,
          "ukey": `${storeInit?.ukey}`
        }


        const encodedCombinedValue = btoa(JSON.stringify(finalJSON));

        const body = {
          con: `{\"id\":\"\",\"mode\":\"addwishlist\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToWishListIconClick (addwishlist)",
          p: encodedCombinedValue,
        };

        await CommonAPI(body).then(async (res) => {

          if (res?.Data?.rd[0]?.msg === "success") {

            await getCartAndWishListData()
            getCountFunc()
          }
        })
      }
      else {
        // {"designlist":"'MCJ10'","isselectall":"0","FrontEnd_RegNo":"95oztttesi0o50vr","Customerid":"856"}

        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        setWishListRemoveData(prod.designno)

        let Data = { "designlist": `'${prod?.designno}'`, "isselectall": "0", "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromWishList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromWishlistIconClick (removeFromWishList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            // removefromCart()
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // removefromCart(prod)
          }
        })

      }
    }
    catch (error) {
      console.log("error", error);
    }
    // console.log("productsWish",prod)
    // prod["checkFlag"] = event.target.checked
  }

  const handelCartList = async (event, prod) => {
    if (isLoginStatus == "false" && isB2CFlags == 0) {
      navigate('/LoginOption');
    }
    try {
      setCartFlag(event.target.checked)

      if (event.target.checked === true) {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const UserEmail = localStorage.getItem("registerEmail")
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));

        const product = prod

        let isWishHasCartData = WishData?.filter((pd) => product.autocode === pd.autocode)
        // console.log("isWishHasCartData", isWishHasCartData)

        let wishToCartEncData = { "autocodelist": `${isWishHasCartData[0]?.autocode}`, "ischeckall": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}` }



        const finalJSON = {
          "stockweb_event": "",
          "designno": `${product?.designno}`,
          "autocode": `${product?.autocode}`,
          "imgrandomno": `${product?.imgrandomno}`,
          "producttypeid": `${product?.Producttypeid}`,
          "metaltypeid": `${product?.MetalTypeid}`,
          "metalcolorid": `${product?.MetalColorid}`,
          "stockno": "",
          "DQuality": `${product?.diamondquality?.split(",")[0]}`,
          "DColor": `${product?.diamondcolorname}`,
          "cmboMetalType": `${product?.MetalTypeName} ${product?.MetalPurity}`,
          "AdditionalValWt": Number(`${product?.AdditionalValWt}`),
          "BrandName": `${product?.BrandName ?? ""}`,
          "Brandid": Number(`${product?.Brandid}`),
          "CategoryName": `${product?.CategoryName}`,
          "Categoryid": Number(`${product?.Categoryid}`),
          "CenterStoneId": Number(`${product?.CenterStoneId}`),
          "CenterStonePieces": Number(`${product?.CenterStonePieces}`),
          "CollectionName": `${product?.CollectionName}`,
          "Collectionid": Number(`${product?.Collectionid}`),
          "ColorWiseRollOverImageName": `${product?.ColorWiseRollOverImageName}`,
          "DefaultImageName": `${product?.DefaultImageName}`,
          "DisplayOrder": Number(`${product?.DisplayOrder}`),
          "FrontEnd_OrderCnt": Number(`${product?.FrontEnd_OrderCnt}`),
          "GenderName": `${product?.GenderName}`,
          "Genderid": Number(`${product?.Genderid}`),
          "Grossweight": Number(`${product?.Grossweight}`),
          "InReadyStockCnt": Number(`${product?.InReadyStockCnt}`),
          "IsBestSeller": Number(`${product?.IsBestSeller}`),
          "IsColorWiseImageExists": `${product?.IsColorWiseImageExists ?? 0}`,
          "IsInReadyStock": Number(`${product?.IsInReadyStock}`),
          "IsNewArrival": `${product?.IsNewArrival}`,
          "IsRollOverColorWiseImageExists": `${product?.IsRollOverColorWiseImageExists ?? ""}`,
          "IsTrending": Number(`${product?.IsTrending}`),
          "MasterManagement_labid": Number(`${product?.MasterManagement_labid}`),
          "MasterManagement_labname": "",
          "MetalColorName": `${product?.MetalColorName}`,
          "MetalColorid": Number(`${product?.MetalColorid}`),
          "MetalPurity": `${product?.MetalPurity}`,
          "MetalPurityid": Number(`${product?.MetalTypeid}`),
          "MetalTypeName": `${product?.MetalTypeName}`,
          "MetalTypeid": Number(`${product?.IsInReadyStock}`),
          "MetalWeight": Number(`${product?.MetalWeight}`),
          "OcassionName": `${product?.OcassionName ?? ""}`,
          "Ocassionid": Number(`${product?.Ocassionid}`),
          "ProducttypeName": `${product?.ProducttypeName}`,
          "Producttypeid": Number(`${product?.Producttypeid}`),
          "RollOverImageName": `${product?.RollOverImageName}`,
          "SubCategoryName": `${product?.SubCategoryName ?? ""}`,
          "SubCategoryid": Number(`${product?.SubCategoryid}`),
          "ThemeName": `${product?.ThemeName ?? ""}`,
          "Themeid": Number(`${product?.Themeid}`),
          "TitleLine": `${product?.TitleLine}`,
          "UnitCost": `${product?.price === "Not Available" ? 0 : product?.price}`,
          "UnitCostWithmarkup": (`${(product?.price === "Not Available" ? 0 : product?.price) + (product?.markup ?? 0)}`),
          "colorstonecolorname": `${product?.colorstonecolorname}`,
          "colorstonequality": `${product?.colorstonequality}`,
          "diamondcolorname": `${product?.diamondcolorname}`,
          "diamondpcs": Number(`${product?.diamondpcs}`),
          "diamondquality": `${product?.diamondquality?.split(",")[0]}`,
          "diamondsetting": `${product?.diamondsetting}`,
          "diamondshape": `${product?.diamondshape}`,
          "diamondweight": Number(`${product?.diamondweight}`),
          "encrypted_designno": `${product?.encrypted_designno ?? ""}`,
          "hashtagid": `${product?.Hashtagid ?? ""}`,
          "hashtagname": `${product?.Hashtagname ?? ""}`,
          "imagepath": `${product?.imagepath}`,
          "mediumimage": `${product?.MediumImagePath ?? ""}`,
          "originalimage": `${product?.OriginalImagePath}`,
          "storyline_html": `${product?.storyline_html ?? ""}`,
          "storyline_video": `${product?.storyline_video ?? ""}`,
          "thumbimage": `${product?.ThumbImagePath}`,
          "totaladditionalvalueweight": Number(`${product?.totaladditionalvalueweight}`),
          "totalcolorstoneweight": Number(`${product?.totalcolorstoneweight}`),
          "totaldiamondweight": Number(`${product?.totaldiamondweight}`),
          "updatedate": `${product?.UpdateDate}`,
          "videoname": `${product?.videoname ?? ""}`,
          "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
          "Customerid": `${Customer_id?.id}`,
          "PriceMastersetid": `${product?.PriceMastersetid ?? ""}`,
          "quantity": `${product?.quantity ?? "1"}`,
          "CurrencyRate": `${product?.CurrencyRate ?? ""}`,
          "remarks_design": `${product?.remarks_design ?? ""}`,
          "diamondcolorid": `${product?.diamondcolorid ?? ""}`,
          "diamondqualityid": `${product?.diamondqualityid ?? ""}`,
          "detail_ringsize": `${product?.detail_ringsize ?? ""}`,
          "ProjMode": `${product?.ProjMode ?? ""}`,
          "AlbumMasterid": `${product?.AlbumMasterid ?? ""}`,
          "AlbumMastername": `${product?.AlbumMastername ?? ""}`,
          "Albumcode": `${product?.Albumcode ?? ""}`,
          "Designid": `${product?.Designid ?? ""}`
        }

        const encodedCombinedValue = btoa(JSON.stringify(finalJSON));
        const wishToCartEncData1 = btoa(JSON.stringify(wishToCartEncData));

        const body = {
          con: `{\"id\":\"\",\"mode\":\"ADDTOCART\",\"appuserid\":\"${UserEmail}\"}`,
          f: "AddToCartIconClick (addcartlist)",
          p: encodedCombinedValue,
        };

        let body1 = {
          con: `{\"id\":\"Store\",\"mode\":\"addwishlisttocart\",\"appuserid\":\"${UserEmail}\"}`,
          f: "iconclick (addwishlisttocart)",
          p: wishToCartEncData1
        }




        await CommonAPI(isWishHasCartData.length ? body1 : body).then(async (res) => {
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if (!isWishHasCartData.length && res?.Data?.rd[0]?.msg === "success") {
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // prod.checkFlag=false
          }

          if (isWishHasCartData.length && res?.Data?.rd[0]?.stat_msg === "success") {
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
          }
        })



      }
      else {
        const storeInit = JSON.parse(localStorage.getItem("storeInit"))
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail"));
        const UserEmail = localStorage.getItem("registerEmail")

        setCartRemoveData(prod.designno)

        let Data = { "designno": `${prod?.designno}`, "autocode": `${prod?.autocode}`, "metalcolorid": 0, "isSolStockNo": 0, "is_show_stock_website": "0", "isdelete_all": 0, "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id}`, "cartidlist": "" }

        let encodedCombinedValue = btoa(JSON.stringify(Data))
        const body = {
          con: `{\"id\":\"\",\"mode\":\"removeFromCartList\",\"appuserid\":\"${UserEmail}\"}`,
          f: "RemoveFromCartIconClick (removeFromCartList)",
          p: encodedCombinedValue,
        }

        await CommonAPI(body).then(async (res) => {
          // console.log("responsePlist",res?.Data?.rd[0]?.msg === "success");
          if (res?.Data?.rd[0]?.stat_msg === "success") {
            // removefromCart()
            await getCartAndWishListData()
            // await getCountApi()
            getCountFunc()
            // removefromCart(prod)
          }
        })

      }

    }
    catch (error) {
      console.log("error", error);
    }

  }

  // useEffect(() => {
  //   let flag = localStorage.getItem('productDataShow') ?? 'true';
  //   if (newProData.length === 0 && flag === 'true') {
  //     let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
  //     setNewProData(data);
  //     setTimeout(() => {
  //       localStorage.setItem('productDataShow', 'false')
  //     }, 100)
  //   }
  // }, [getHeaderData, newProData])


  useEffect(() => {
    //level1 filter
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "collection") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.CollectionName === getHeaderData2?.value2)
      setNewProData(data)
    }
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "category") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.CategoryName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "gender") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.GenderName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "collection" && getHeaderData2?.label2 === "brand") {
      let data = productData.filter((pd) => pd && pd.CollectionName === getHeaderData2?.value1 && pd.BrandName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "brand") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.BrandName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "collection") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.CollectionName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "category") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.CategoryName === getHeaderData2?.value2)
      setNewProData(data);

    }
    if (getHeaderData2?.label1 === "brand" && getHeaderData2?.label2 === "gender") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData2?.value1 && pd.GenderName === getHeaderData2?.value2)
      setNewProData(data);

    }

    // level2 filter
    if (getHeaderData?.label1 === "collection") {
      let data = productData?.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
      setNewProData(data)

    }
    if (getHeaderData?.label1 === "brand") {
      let data = productData?.filter((pd) => pd && pd.BrandName === getHeaderData?.value1)
      setNewProData(data)

    }
    if (getHeaderData?.label1 === "category") {
      let data = productData?.filter((pd) => pd && pd.CategoryName === getHeaderData?.value1)
      setNewProData(data)

    }
    if (getHeaderData?.label1 === "gender") {
      let data = productData?.filter((pd) => pd && pd.GenderName === getHeaderData?.value1)
      setNewProData(data)

    }

  }, [getHeaderData2, getHeaderData])

  const newMenuProdData = () => {
    let data = productData?.filter((pd) => pd && pd.CollectionName === getHeaderData?.value1)
    setNewProData(data)
  }
  useEffect(() => {
    if (getHeaderData && getHeaderData.value1 && productData) {
      newMenuProdData()
    }
  }, [getHeaderData])

  // const getDesignPriceList = async () => {

  //   const storeInit = JSON.parse(localStorage.getItem("storeInit"))
  //   const loginUserDetail = JSON.parse(localStorage.getItem("loginUserDetail"));
  //   const currencyCombo = JSON.parse(localStorage.getItem("CURRENCYCOMBO"));
  //   const UserEmail = localStorage.getItem("registerEmail")

  //   const GetPriceReq = {
  //     "CurrencyRate": `${currencyCombo?.CurrencyRate}`,
  //     "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
  //     "Customerid": `${loginUserDetail?.id}`,
  //     "Laboursetid": `${storeInit.PolicyApplyOnName === "Customer Wise Policy" ? loginUserDetail?._pricemanagement_laboursetid : loginUserDetail?.pricemanagement_laboursetid}`,
  //     "diamondpricelistname": `${loginUserDetail?._diamondpricelistname}`,
  //     "colorstonepricelistname": `${loginUserDetail?._colorstonepricelistname}`,
  //     "SettingPriceUniqueNo": `${loginUserDetail?.SettingPriceUniqueNo}`,
  //     "DesignNo": ""
  //   }

  //   const encodedCombinedValue = btoa(JSON.stringify(GetPriceReq));

  //   let body = {
  //     "con": `{\"id\":\"Store\",\"mode\":\"getdesignpricelist\",\"appuserid\":\"${UserEmail}\"}`,
  //     "f": "onloadFirstTime (getdesignpricelist)",
  //     "p": encodedCombinedValue
  //   }

  //   await CommonAPI(body).then((res) => {
  //     localStorage.setItem("getPriceData",JSON.stringify(res?.Data))
  //     setpriceDataApi(res?.Data)
  //   })

  // }

  const handleChange1 = () => {

  }

  // useEffect(() => {
  //   getDesignPriceList()
  // }, [])

  //for price range
  useEffect(() => {
    const priceOnly = ProductApiData2?.filter((item) => item?.price !== 'Not Available')?.map((item) => item.price)?.sort((a, b) => a - b);
    setMinPrice(priceOnly[0]);
    setMaxPrice(priceOnly[priceOnly?.length - 1]);
    setValue1([priceOnly[0], priceOnly[priceOnly?.length - 1]])
    const netWtOnly = ProductApiData2?.map((item) => item?.netwt).sort((a, b) => a - b);
    setMinNetwt(netWtOnly[0]);
    setMaxNetwt(netWtOnly[netWtOnly?.length - 1]);
    setValue2([netWtOnly[0], netWtOnly[netWtOnly?.length - 1]])
    const grossWtOnly = ProductApiData2?.map((item) => item?.Grossweight).sort((a, b) => a - b);
    setMinGrossWt(grossWtOnly[0]);
    setMaxGrossWtt(grossWtOnly[grossWtOnly?.length - 1]);
    setValue3([grossWtOnly[0], grossWtOnly[grossWtOnly?.length - 1]])
    const diamondWtOnly = ProductApiData2?.map((item) => item?.diamondweight).sort((a, b) => a - b);
    setMinDiamondWt(diamondWtOnly[0]);
    setMaxDiamondWt(diamondWtOnly[diamondWtOnly?.length - 1]);
    setValue4([diamondWtOnly[0], diamondWtOnly[diamondWtOnly?.length - 1]])

  }, [ProductApiData2]);

  const handlePriceChange = (event, newValue, activeThumb) => {
    setValue1(newValue);
    filterDatasfunc(newValue, value2, value3, value4);
  };

  const handleNetWtChange = (event, newValue, activeThumb) => {
    setValue2(newValue);
    filterDatasfunc(value1, newValue, value3, value4);
  };

  const handlegrossWtChange = (event, newValue, activeThumb) => {
    setValue3(newValue);
    filterDatasfunc(value1, value2, newValue, value4);
  };

  const handleDiamondChange = (event, newValue, activeThumb) => {
    setValue4(newValue);
    filterDatasfunc(value1, value2, value3, newValue);
  };

  const filterDatasfunc = (priceRange, netWtRange, grossWtRange, diamondWtRange) => {

    const filteredData = ProductApiData2?.filter((item) => {

      const priceInRange = item?.price >= priceRange[0] && item?.price <= priceRange[1];
      const netWtInRange = item.netwt >= netWtRange[0] && item.netwt <= netWtRange[1];
      const grossWtInRange = item.Grossweight >= grossWtRange[0] && item.Grossweight <= grossWtRange[1];
      const diamondWtInRange = item.diamondweight >= diamondWtRange[0] && item.diamondweight <= diamondWtRange[1];
      return priceInRange && netWtInRange && grossWtInRange && diamondWtInRange;

    });
    setNewProData(filteredData);
  };

  const handlePageReload = () => {
    setNewProData(ProductApiData2);
    setMinPrice(0)
    setMaxPrice(maxPrice)
    setValue1([minPrice, maxPrice])
    setMinNetwt(0)
    setMaxNetwt(maxNetwt)
    setValue2([0, maxNetwt])
    setMinGrossWt(0)
    setMaxGrossWtt(maxGrosswt)
    setValue3([0, maxGrosswt])
    setMinDiamondWt(0)
    setMaxDiamondWt(maxDiamondWt)
    setValue4([0, maxDiamondWt])
  }

  const [hoveredImageUrls, setHoveredImageUrls] = useState({});

  const handleHoverImageShow = (url, index, rollPath, imagepath) => {
    // isColorWiseImageShow

    let updatedFilename = rollPath.replace(/\s/g, '_');
    let newPath = url.replace(/\/([^/]+)$/, '/' + updatedFilename);
    let path = imagepath + newPath;

    if (rollPath.length !== 0) {
      setHoveredImageUrls(prevHoveredImageUrls => {
        return { ...prevHoveredImageUrls, [index]: path };
      });
    }

  };

  const handleMouseLeave = (index) => {
    setHoveredImageUrls(prevState => {
      const newState = { ...prevState };
      delete newState[index];
      return newState;
    });
  };


  function convertPath(path) {
    return path.replace(/\\/g, '/');
  }

  function checkImageAvailability(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageUrl;
    });
  }

  const handleColorSelection = async (product, index, color) => {
    const uploadPath = localStorage.getItem('UploadLogicalPath');
    const storedDataAll = localStorage.getItem('storeInit');
    const data = JSON.parse(storedDataAll);
    const colorWiseImageData = JSON.parse(localStorage.getItem('colorDataImages'));
    const productAutoCode = product?.autocode;
    const productColorName = color;
    console.log("color--", productColorName);

    if (!colorWiseImageData) {
      return [];
    }

    if (data.IsColorWiseImages === 1) {
      const matchingData = colorWiseImageData.filter(imageDataItem => (
        productAutoCode === imageDataItem.autocode && productColorName === imageDataItem.colorname
      ));

      const checkAvailabilityPromises = matchingData.map(async (imageDataItem) => {
        const imagePath = uploadPath + '/' + data.ukey + convertPath(imageDataItem.imagepath);
        const isAvailable = await checkImageAvailability(imagePath);
        console.log('isAvailable---', isAvailable);
        return { imagePath: imagePath.replace(/ /g, "%20"), isAvailable };
      });

      const imageData = await Promise.all(checkAvailabilityPromises);
      const availableImage = imageData.find(image => image.isAvailable);

      if (availableImage) {
        const formedImgData = { [index]: availableImage.imagePath };
        setUpdateColorImage(formedImgData);
        return availableImage;
      } else {
        console.log('No available image found');
        return [];
      }
    } else {
      setUpdateColorImage({});
      return [];
    }
  };
  // console.log('updated image---', updatedColorImage);


  const handleFilterShow = () => {
    setIsShowFilter(!isShowfilter)
  }


  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDetailDrawer = () => {
    setIsOpenDetail(!isOpenDetail);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, transition: 'width .2s ease-in-out',
        overflowX: 'hidden',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {isOpenDetail &&
        <div>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '5px', borderBottom: '1px solid #c7c8c9' }}>
            <Typography className="drawerFilterTitle" sx={{ margin: '8px 15px 5px 15px' }}>Filter</Typography>
            <CloseIcon sx={{ margin: '8px 15px 5px 15px' }} onClick={toggleDetailDrawer} />
          </Box>
          {NewFilterData().map((ele, index) => (
            <>
              <Accordion
                elevation={0}
                className="filterAccordian"
                sx={{
                  borderBottom: "1px solid #c7c8c9",
                  borderRadius: 0,
                  margin: "0px 25px",
                  '&.Mui-expanded': {
                    margin: '0px',
                  },
                  "&.MuiPaper-root.MuiAccordion-root:last-of-type": {
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                  },
                  "&.MuiPaper-root.MuiAccordion-root:before": {
                    background: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ width: "20px" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    color: "#7f7d85",
                    borderRadius: 0,

                    "&.MuiAccordionSummary-root": {
                      padding: 0,
                    },
                  }}
                >
                  <span
                    className="filtercategoryLable"
                  // style={{
                  //   fontFamily: "Harmonia, sans-serif",
                  //   fontSize: "13px",
                  //   fontWeight:'500px',
                  //   color:'#424242'
                  // }}
                  >
                    {ele.label}
                  </span>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                  className="filterListData"
                >
                  {ele.label === "PRICE" &&
                    <div>
                      <Slider
                        className='netWtSecSlider'
                        getAriaLabel={() => 'Minimum distance'}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                      />
                    </div>}

                  {ele.label === "CENTERSTONE" &&
                    <div>
                      <Slider
                        className='netWtSecSlider'
                        getAriaLabel={() => 'Minimum distance'}
                        value={value1}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                      />
                    </div>
                  }

                  {ele?.filterList?.map((flist, i) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                      key={i}
                    >
                      <small className="sidebarfilterText" >
                        {flist}
                      </small>
                      <Checkbox
                        name={`checkbox${index + 1}${i + 1}`}
                        checked={
                          filterChecked[`checkbox${index + 1}${i + 1}`]
                            ?.checked
                        }
                        onClick={(e) =>
                          handleCheckboxChange(e, ele, flist)
                        }
                        size="small"
                      />
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            </>
          ))}
        </div>}
    </Box>
  );

  const [selectedSortOption, setSelectedSortOption] = useState('None');
  const [selectedOptionData, setSelectedOptionData] = useState(null);
  const options = [
    { label: 'Recommended' },
    { label: 'New' },
    { label: 'In stock' },
    { label: 'PRICE LOW TO HIGH' },
    { label: 'PRICE HIGH TO LOW' },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleSortChange = (option) => {
    const selectedOption = option?.label;
    setSelectedOptionData(option?.label);
    setIsActive(false);
    setSelectedSortOption(option?.label);
    let sortedData = [...ProductApiData2];

    if (selectedOption === 'PRICE HIGH TO LOW') {
      sortedData.sort((a, b) => ((b?.UnitCost ?? 0) + (b?.price ?? 0) + (b?.markup ?? 0)) - ((a?.UnitCost ?? 0) + (a?.price ?? 0) + (a?.markup ?? 0)));
    } else if (selectedOption === 'PRICE LOW TO HIGH') {
      sortedData.sort((a, b) => ((a?.UnitCost ?? 0) + (a?.price ?? 0) + (a?.markup ?? 0)) - ((b?.UnitCost ?? 0) + (b?.price ?? 0) + (b?.markup ?? 0)));
    } else {
      setNewProData(ProductApiData2);
    }
    setNewProData(sortedData);
  };



  const [show2ImagesView, setShow2ImageView] = useState(false);
  const [show3ImagesView, setShow3ImageView] = useState(false);
  const [show4ImagesView, setShow4ImageView] = useState(false);
  const handle2ImageShow = () => {
    setShow4ImageView(false)
    setShow3ImageView(false)
    setShow2ImageView(true)

  }

  const handle3ImageShow = () => {
    setShow4ImageView(false)
    setShow2ImageView(false)
    setShow3ImageView(true)
  }

  const handle4ImageShow = () => {
    setShow2ImageView(false)
    setShow3ImageView(false)
    setShow4ImageView(true)
  }

  useEffect(() => {
    if ((newProData?.length || ProductApiData2?.length)) {
      setIsProdLoading(true)
    } else {
      setIsProdLoading(false)
    }
  }, [newProData, ProductApiData2])

  const decodeEntities = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div id="top">
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {(!IsProdLoading && <div className="loader-overlay">
          <CircularProgress className="loadingBarManage" />
        </div>)}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: '160px',
            marginInline: '13%'
          }}
          className='paddingTopMobileSet'
        >
          <div style={{ width: '100%' }}>
            <div class="bg-image">
              <div class="overlay"></div>
              <div class="text-container">
                <h1>All</h1>
              </div>
            </div>
            <div className="filterDivcontainer">
              <div className="part" style={{ flex: '20%' }}>
                <div className="part-content" onClick={handleFilterShow}>
                  {isShowfilter ? "Hide Filter" : "Show Filter"}
                  <FilterListIcon />
                </div>
              </div>
              <div className="divider"></div>
              <div className="part" style={{ flex: '20%' }}>
                <div className="part-content">
                  <div className={`custom-select ${isActive ? 'active' : ''}`}>
                    <button
                      ref={dropdownRef}
                      className="select-button"
                      onClick={toggleDropdown}
                      aria-haspopup="listbox"
                      aria-expanded={isActive}
                    >
                      <span className="selected-value">{selectedOptionData ? selectedOptionData : 'Featured'}
                        <SortIcon />
                      </span>
                    </button>
                    {isActive && (
                      <ul className="select-dropdown">
                        {options.map((option, index) => (
                          <li key={index} role="option" onClick={() => handleSortChange(option)}>
                            <label htmlFor={`option-${index}`}>{option.label}</label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div className="part" style={{ flex: '60%', justifyContent: 'end' }}>
                <div className="part-content">
                  <IoGrid style={{ height: '18px', width: '18px', opacity: 0.7, color: '#7b7b7b' }} onClick={() => handle2ImageShow()} />
                  <AppsIcon style={{ height: '22px', width: '22px', opacity: 0.8, color: '#1f1919' }} onClick={() => handle3ImageShow()} />
                  <TfiLayoutGrid4Alt style={{ height: '17px', width: '17px', opacity: 0.6 }} onClick={() => handle4ImageShow()} />
                </div>
              </div>
            </div>
            <div className="smilingProductMain" id="smilingProductMain">
              <div
                className="smilingProductSubMain"
                style={{ width: "100%", display: "flex", position: "relative" }}
              >
                {/* {isShowfilter && ( */}
                <div className="smilingWebProductListSideBar" style={{ transition: "1s ease", width: `19%`, left: `${isShowfilter ? "0" : "-500%"}` }}>
                  <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0px 20px 0px 0px' }}>
                    <li className="finejwelery me-4" id="finejwelery">Filters</li>
                    <li className="finejwelery" id="finejwelery" onClick={() => handlePageReload()}>All Jwelery</li>
                  </ul>
                  <div>
                    {NewFilterData().map((ele, index) => (
                      <>
                        <Accordion
                          elevation={0}
                          sx={{
                            borderBottom: "1px solid #ededed",
                            borderRadius: 0,
                            marginRight: '20px',
                            "&.MuiPaper-root.MuiAccordion-root:last-of-type": {
                              borderBottomLeftRadius: "0px",
                              borderBottomRightRadius: "0px",
                            },
                            "&.MuiPaper-root.MuiAccordion-root:before": {
                              background: "none",
                            },
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ width: "20px" }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                              color: "#7f7d85",
                              borderRadius: 0,

                              "&.MuiAccordionSummary-root": {
                                padding: 0,
                              },
                            }}
                          >
                            <span
                              className="filtercategoryLable"
                            // style={{
                            //   fontFamily: "Harmonia, sans-serif",
                            //   fontSize: "13px",
                            //   fontWeight:'500px',
                            //   color:'#424242'
                            // }}
                            >
                              {ele.label}
                            </span>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                            }}
                            className="filterListData"
                          >
                            {ele.label === "PRICE" &&
                              <div>
                                <Slider
                                  className='netWtSecSlider'
                                  getAriaLabel={() => 'Minimum distance'}
                                  value={value1}
                                  min={minPrice}
                                  max={maxPrice}
                                  size="small"
                                  onChange={handlePriceChange}
                                  valueLabelDisplay="auto"
                                  getAriaValueText={valuetext}
                                  disableSwap
                                />
                                <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                  <input value={value1[0]} className="minmaxvalpl" disabled />
                                  <input value={value1[1]} className="minmaxvalpl" disabled />
                                </div>
                              </div>}

                            {ele.label === "NETWT" &&
                              <div>
                                <Slider
                                  className='netWtSecSlider'
                                  getAriaLabel={() => 'Minimum distance'}
                                  value={value2}
                                  min={minNetwt}
                                  max={maxNetwt}
                                  size="small"
                                  onChange={handleNetWtChange}
                                  valueLabelDisplay="auto"
                                  getAriaValueText={valuetext}
                                  disableSwap
                                />
                                <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                  <input value={value2[0]} className="minmaxvalpl" disabled />
                                  <input value={value2[1]} className="minmaxvalpl" disabled />
                                </div>
                              </div>
                            }

                            {ele.label === "GROSSWT" &&
                              <div>
                                <Slider
                                  className='netWtSecSlider'
                                  getAriaLabel={() => 'Minimum distance'}
                                  value={value3}
                                  min={minGrosswt}
                                  max={maxGrosswt}
                                  size="small"
                                  onChange={handlegrossWtChange}
                                  valueLabelDisplay="auto"
                                  getAriaValueText={valuetext}
                                  disableSwap
                                />
                                <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                  <input value={value3[0]} className="minmaxvalpl" disabled />
                                  <input value={value3[1]} className="minmaxvalpl" disabled />
                                </div>
                              </div>
                            }

                            {ele.label === "DIAMONDWT" &&
                              <div>
                                <Slider
                                  className='netWtSecSlider'
                                  getAriaLabel={() => 'Minimum distance'}
                                  value={value4}
                                  min={minDiamondWt}
                                  max={maxDiamondWt}
                                  size="small"
                                  onChange={handleDiamondChange}
                                  valueLabelDisplay="auto"
                                  getAriaValueText={valuetext}
                                  disableSwap
                                />
                                <div className="d-flex w-100 justify-content-between align-items-center mt-1">
                                  <input value={value4[0]} className="minmaxvalpl" disabled />
                                  <input value={value4[1]} className="minmaxvalpl" disabled />
                                </div>
                              </div>
                            }

                            {ele.filterList.map((flist, i) => (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  gap: "12px",
                                }}
                                key={i}
                              >
                                <small
                                  className="sidebarfilterText"
                                // style={{
                                //   fontFamily: "TT Commons, sans-serif",
                                //   color: "#7f7d85",
                                //   textTransform: "lowercase",
                                // }}
                                >
                                  {flist}
                                </small>
                                <Checkbox
                                  name={`checkbox${index + 1}${i + 1}`}
                                  checked={
                                    filterChecked[`checkbox${index + 1}${i + 1}`]
                                      ?.checked
                                  }
                                  // style={{
                                  //   color: "#7f7d85",
                                  //   padding: 0,
                                  //   width: "10px",
                                  // }}
                                  className="filterCheckBox"
                                  onClick={(e) =>
                                    handleCheckboxChange(e, ele, flist)
                                  }
                                  size="small"
                                />
                              </div>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      </>
                    ))}
                  </div>
                </div>
                {/* )} */}
                {/* for mobile */}
                <div className="smilingMobileProductListSideBar">
                  <div className="filterListMobileData" style={{ display: "flex", marginInline: "15px" }}>
                    <div style={{ width: "100%" }} onClick={toggleDrawerOverlay}>
                      <Drawer
                        anchor="left"
                        open={isOpenDetail}
                        onClose={toggleDetailDrawer}
                      >
                        {list("left")}
                      </Drawer>
                      <div className="filterMobileDivcontainer">
                        <div className="part firstfilteDiv" style={{ flex: '20%' }}>
                          <div className="part-content" onClick={toggleDetailDrawer}>
                            Filter
                            <FilterListIcon />
                          </div>
                        </div>
                        {/* <div className="divider"></div>/ */}
                        <div className="part secondfilteDiv" style={{ flex: '20%' }}>
                          <div className="part-content">
                            <div className={`custom-select ${isActive ? 'active' : ''}`}>
                              <button
                                className="select-button"
                                onClick={toggleDropdown}
                                aria-haspopup="listbox"
                                aria-expanded={isActive}
                              >
                                <span className="selected-value">{selectedOptionData ? selectedOptionData : 'Featured'}
                                  <SortIcon />
                                </span>
                              </button>
                              <ul className="select-dropdown">
                                {options.map((option, index) => (
                                  <li key={index} role="option" onClick={() => handleSortChange(option)}>
                                    <label htmlFor={`option-${index}`}>{option.label}</label>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <div className="divider"></div> */}
                        <div className="part thirdfilteDiv" style={{ flex: '60%', justifyContent: 'end' }}>
                          <div className="part-content">
                            <GridViewIcon onClick={() => handle2ImageShow()} />
                            <AppsIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    // width: isShowfilter ? "80%" : "100%",
                    width: isShowfilter ? "80%" : "100%",
                    display: "flex",
                    flexDirection: 'column',
                    transition: "1s ease"
                    // margin: "40px 0px 0px 0px",
                  }}
                  className="smilingProductImageMain"
                  id="smilingProductImageMain"
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: '10px'
                    }}
                    className="smilingFilterweb"
                  >
                    <select
                      size="small"
                      onChange={handleSortChange}
                      value={selectedSortOption}
                      displayEmpty
                    >
                      <option value="None">Recommended</option>
                      <option value="None">New</option>
                      <option value="None">In stock</option>
                      <option value="PRICE HIGH TO LOW">PRICE HIGH TO LOW</option>
                      <option value="PRICE LOW TO HIGH">PRICE LOW TO HIGH</option>
                    </select>
                  </div>
                  <div className={`smilingAllProductDataMainMobile
                                    ${show2ImagesView ? "smilingAllProductDataMainMobileShow2Image" : ""}
                                    ${show4ImagesView ? "smilingAllProductDataMainMobileShow4Image" : ""}`}>
                    {/* RollOverImageName */}
                    {/* {(newProData.length ? newProData : finalDataOfDisplaying())?.map((products, i) => ( */}
                    {(newProData?.length ? newProData : ProductApiData2)?.map((products, i) => (

                      <div className={`main-ProdcutListConatiner
                                  ${show2ImagesView ? "main-ProdcutListConatiner2ImageShow" : ""}
                                  ${show4ImagesView ? "main-ProdcutListConatiner4ImageShow" : ""}`}
                      >
                        <div className={`listing-card
                                      ${show2ImagesView ? "listing-cardShow2Image" : ""}
                                      ${show4ImagesView ? "listing-cardShow4Image" : ""}`} >
                          <div className="listing-image">
                            <div
                              onClick={() => handelProductSubmit(products)}
                              className={show2ImagesView ? 'background-2image-container' : "background-image-container"}
                              style={{
                                backgroundImage: `url(${hoveredImageUrls[i] ? hoveredImageUrls[i] : updatedColorImage[i] ? updatedColorImage[i] :

                                  (products?.MediumImagePath ?
                                    (products?.imagepath + products?.MediumImagePath?.split(",")[0]) :
                                    notFound
                                  )
                                  })`
                              }}
                              onMouseEnter={() => handleHoverImageShow(products?.MediumImagePath?.split(",")[0], i, products?.RollOverImageName, products?.imagepath)}
                              //onMouseEnter={() => handleHoverImageShow(products?.MediumImagePath?.split(",")[0], i, isColorWiseImageShow === 1 ? products?.ColorWiseRollOverImageName : products?.RollOverImageName, products?.imagepath)}
                              onMouseLeave={() => handleMouseLeave(i)}
                            ></div>
                            <div className="cart-icon">
                              <Checkbox
                                icon={
                                  <LocalMallOutlinedIcon
                                    sx={{ fontSize: "22px", color: "#1f1919", opacity: '.7' }}
                                  />
                                }
                                checkedIcon={
                                  <LocalMallIcon
                                    sx={{ fontSize: "22px", color: "#f0d85e" }}
                                  />
                                }
                                disableRipple={true}
                                sx={{ padding: "5px" }}

                                checked={products?.checkFlag}
                                onChange={(e) => handelCartList(e, products)}
                              />
                            </div>
                            <div className="wishlist-icon">
                              <Checkbox
                                icon={
                                  <FavoriteBorderIcon
                                    sx={{ fontSize: "22px", color: "#1f1919", opacity: '.7' }}
                                  />
                                }
                                checkedIcon={
                                  <FavoriteIcon
                                    sx={{ fontSize: "22px", color: "#e31b23" }}
                                  />
                                }
                                disableRipple={true}
                                sx={{ padding: "5px" }}

                                checked={products?.wishCheck}
                                onChange={(e) => handelWishList(e, products)}
                              />
                            </div>
                          </div>
                          <div className={show4ImagesView ? 'listing4-details' : "listing-details"} onClick={() => handelProductSubmit(products)}>
                            <p className={show4ImagesView ? "productDetails property4-type" : "productDetails property-type"}>
                              {products?.TitleLine}
                            </p>
                            <div>
                              {/* {isPriceShow === 1 &&
                                <p className={show4ImagesView ? "productDetails price4" : "productDetails price"}>{currencySym?.Currencysymbol}
                                  {((products?.UnitCost ?? 0) + (products?.price ?? 0) + (products?.markup ?? 0)).toFixed(2)}</p>
                              }
                              <span className={show4ImagesView ? "productDesignDetails4" : "productDesignDetails"}>
                                <p className="productDetails address">{products?.designno}</p>
                                <Divider
                                  className="dividerLine"
                                  orientation="vertical"
                                  variant="middle"
                                  flexItem
                                />
                                <p className="productDetails address"> {isMetalTCShow === 1 && products?.MetalTypeName}-{products?.MetalColorName}{products?.MetalPurity}</p>
                              </span> */}
                            </div>
                          </div>
                          <div className={show4ImagesView ? "listing-features4" : "listing-features"} >
                            <div>
                              {ismetalWShow === 1 &&
                                <div className={show4ImagesView ? "feature4" : 'feature'}>
                                  <p>
                                    <span className="feature-count">NWT : </span> {products?.netwt}
                                  </p>
                                </div>
                              }
                              {isGrossWShow === 1 &&
                                <div className={show4ImagesView ? "feature4" : 'feature'}>
                                  <p>
                                    <span className="feature-count">GWT : </span> {products?.Grossweight}
                                  </p>
                                </div>
                              }
                              {/* {((isDaaimongWShow || isDaaimongWShow) === 1 && (products?.diamondweight !== 0 || products?.diamondpcs !== 0)) &&
                                <div className={show4ImagesView ? "feature4" : 'feature'}>
                                  <p>
                                    <span className="feature-count">DWT : </span> {(isDaaimongWShow === 1 && products?.diamondweight !== 0) && products?.diamondweight + '/'}  {(isDaaimonPShow === 1 && products?.diamondpcs !== 0) && products?.diamondpcs}
                                  </p>
                                </div>
                              } */}
                            </div>
                            <div>

                              {/* <div className={show4ImagesView ? "feature4" : 'feature'}>
                                <p>
                                  <span className="feature-count">{products?.designno}</span>
                                </p>
                              </div>
                              {isPriceShow === 1 &&
                                <div className={show4ImagesView ? "feature4" : 'feature'}>
                                  <p>
                                  <span className="feature-count">{currencySym?.Currencysymbol}
                                    {((products?.UnitCost ?? 0) + (products?.price ?? 0) + (products?.markup ?? 0)).toFixed(2)}</span>
                                    </p>
                                </div>
                              } */}
                              <div className={show4ImagesView ? "feature4" : 'feature'}>
                                <p>
                                  <span className="feature-count">{products?.designno}</span>
                                </p>
                              </div>
                              {isPriceShow === 1 &&
                                <div className={show4ImagesView ? "feature4" : 'feature'}>
                                  <p>
                                    <span className="feature-count" style={{ display: 'flex' }}>
                                      <div className="currencyFont" dangerouslySetInnerHTML={{ __html: decodeEntities(currData?.Currencysymbol) }} />
                                      {((products?.UnitCost ?? 0) + (products?.price ?? 0) + (products?.markup ?? 0)).toFixed(2)}</span>
                                  </p>
                                </div>
                              }
                            </div>
                          </div>
                          {isColorWiseImageShow == 1 && (
                            <div
                              style={{
                                display: "flex",
                                gap: "8px",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "9px",
                                  height: "9px",
                                  backgroundColor: "#c8c8c8",
                                  borderRadius: "50%",
                                  cursor: 'pointer'
                                }}
                                onClick={() => handleColorSelection(products, i, 'White Gold')}
                              ></div>
                              <div
                                style={{
                                  width: "9px",
                                  height: "9px",
                                  backgroundColor: "#ffcfbc",
                                  borderRadius: "50%",
                                  cursor: 'pointer'
                                }}
                                onClick={(e) => handleColorSelection(products, i, 'Rose Gold')}
                              ></div>
                              <div
                                style={{
                                  width: "9px",
                                  height: "9px",
                                  backgroundColor: "#e0be77",
                                  borderRadius: "50%",
                                  cursor: 'pointer'
                                }}
                                onClick={(e) => handleColorSelection(products, i, 'Yellow Gold')}
                              >
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default ProductList;