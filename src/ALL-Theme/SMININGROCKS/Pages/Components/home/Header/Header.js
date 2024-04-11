import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'
import Tooltip from '@mui/material/Tooltip';
import { Badge, Dialog, Divider, Drawer, SwipeableDrawer, TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { PiBagThin, PiMapPinLight, PiStarThin } from "react-icons/pi";
import { IoMenuOutline, IoSearch, IoSearchOutline } from "react-icons/io5";
import { ABOUT_US, ACCOUNT, BLOG, CELEBRITY, CUSTERM_SERVICES, ETERNITY_BANDS, FINE_JEWELLERY_GIFTS, FOR_HIM, FREE_INTERNATIONAL_SHIPPING, IMPACT, LAB_GROWN, LIFETIME_WARRANTY, LOGIN, LOGOUT_MESSAGE, LOOK_BOOK, MONEY_BACK_GUARANTEE, PRESS, SHOP } from "../../../../lib/consts/Strings";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiStarFourThin } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartListCounts, HeaderData, HeaderData2, WishListCounts, loginState, newMenuData, openSignInModal, searchData } from "../../../../../../Recoil/atom";
import { CommonAPI } from "../../../../Utils/API/CommonAPI";
import Cart from "./Cart";
import titleImg from "../../../assets/title/sonasons.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import menu1Img from '../../../assets/45.jpg'
import menu2Img from '../../../assets/456.jpg'
import { FaChevronRight } from "react-icons/fa";

export default function Header() {
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState(1);
  const [serachsShowOverlay, setSerachShowOverlay] = useState(false);
  const [drawerShowOverlay, setDrawerShowOverlay] = useState(false);
  const [searchText, setSearchText] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCollection, setIsOpenCollection] = useState(false);
  const [isOpenBouti, setIsOpenBouti] = useState(false);
  const [finalData, setFinalData] = useState([]);
  const [menu1Index, setMenu1Index] = useState(null);
  const [menu2Index, setMenu2Index] = useState(null);
  const [menu1Data, setMenu1Data] = useState()
  const [menu2Data, setMenu2Data] = useState()

  const getCartListCount = useRecoilValue(CartListCounts)
  const getWishListCount = useRecoilValue(WishListCounts)
  const setHeaderData = useSetRecoilState(HeaderData)
  const setHeaderData2 = useSetRecoilState(HeaderData2)

  const [menul0data, setMenul0data] = useState([])
  const [menul1data, setMenul1data] = useState([])
  const [menul2data, setMenul2data] = useState([])

  const setNewMenuData = useSetRecoilState(newMenuData)
  const [searchedProducts, setSearchedProducts] = useState([]);
  const setGSearch = useSetRecoilState(searchData);


  // function searchDataFucn(e) {
  //   if (e.key === 'Enter') {
  //     let ProductApiData2 = JSON.parse(localStorage.getItem("allproductlist"))
  //     if (ProductApiData2) {
  //       let data = ProductApiData2.filter((pd) => pd?.CollectionName.toString().toLowerCase().includes(searchText))
  //       if (data) {
  //         setGSearch(data);
  //         navigation('/productpage')
  //         toggleOverlay();
  //       }
  //     } else {
  //       setGSearch([]);
  //     }
  //   }
  // }

  function searchDataFucn(e) {
    if (e.key === 'Enter') {
      let ProductApiData2 = JSON.parse(localStorage.getItem("allproductlist"));
      if (ProductApiData2) {
        let searchText = e.target.value.toLowerCase();
        let data = ProductApiData2.filter((pd) => {
          for (const key in pd) {
            if (pd.hasOwnProperty(key) && pd[key]?.toString().toLowerCase().includes(searchText)) {
              return true;
            }
          }
          return false;
        });
        if (data.length > 0) {
          setGSearch(data);
          navigation('/productpage');
          toggleOverlay();
        } else {
          setGSearch([]);
        }
      } else {
        setGSearch([]);
      }
    }
  }


  const separateData = (menuData) => {

    let tempMenu0data = Array.from(new Set(menuData?.map(item => JSON.stringify({
      menuname: item.menuname,
      param0dataname: item.param0dataname,
      param0dataid: item.param0dataid,
      param0name: item.param0name,
      param0id: item.param0id
    }))))?.map(item => JSON.parse(item));

    let tempMenu1data = Array.from(new Set(menuData?.map(item => JSON.stringify({
      param1id: item.param1id,
      param1name: item.param1name,
      param1dataid: item.param1dataid,
      param1dataname: item.param1dataname
    }))))?.map(item => JSON.parse(item));

    let tempMenu2data = Array.from(new Set(menuData?.map(item => JSON.stringify({
      param2id: item.param2id,
      param2name: item.param2name,
      param2dataid: item.param2dataid,
      param2dataname: item.param2dataname
    }))))?.map(item => JSON.parse(item));

    // Update states
    setMenul0data(tempMenu0data)
    setMenul1data(tempMenu1data)
    setMenul2data(tempMenu2data)
  };

  const handelNewMenuData = (param) => {
    console.log('prama....', param);
    setNewMenuData(param)
    setIsDropdownOpen(false)
    setDrawerShowOverlay(false)
    navigation("/productpage")
    setDrawerOpen(false);
  }


  useEffect(() => {
    separateData();
  }, []);

  const transformData = (data) => {
    const transformedData = data?.reduce((acc, item) => {
      const existingItem = acc.find(i => i.levelid === item.levelid);
      if (existingItem) {
        const existingParam1 = existingItem.param1.find(p => p.param1dataid === item.param1dataid);
        if (existingParam1) {
          if (item.param2id) {
            const existingParam2 = existingParam1.param2.find(p => p.param2dataid === item.param2dataid);
            if (!existingParam2) {
              existingParam1.param2.push({
                param2id: item.param2id,
                param2name: item.param2name,
                param2dataid: item.param2dataid,
                param2dataname: item.param2dataname
              });
            }
          }
        } else {
          const newParam1 = {
            param1id: item.param1id,
            param1name: item.param1name,
            param1dataid: item.param1dataid,
            param1dataname: item.param1dataname,
            menuname: item.menuname, // Include menuname here
            param2: []
          };
          if (item.param2id) {
            newParam1.param2.push({
              param2id: item.param2id,
              param2name: item.param2name,
              param2dataid: item.param2dataid,
              param2dataname: item.param2dataname
            });
          }
          existingItem.param1.push(newParam1);
        }
      } else {
        const newItem = {
          levelid: item.levelid,
          menuname: item.menuname,
          param0dataname: item.param0dataname,
          param0dataid: item.param0dataid,
          param0name: item.param0name,
          param0id: item.param0id,
          param1: []
        };
        if (item.param1id) {
          const newParam1 = {
            param1id: item.param1id,
            param1name: item.param1name,
            param1dataid: item.param1dataid,
            param1dataname: item.param1dataname,
            menuname: item.menuname, // Include menuname here
            param2: []
          };
          if (item.param2id) {
            newParam1.param2.push({
              param2id: item.param2id,
              param2name: item.param2name,
              param2dataid: item.param2dataid,
              param2dataname: item.param2dataname
            });
          }
          newItem.param1.push(newParam1);
        }
        acc.push(newItem);
      }
      return acc;
    }, []);

    setFinalData(transformedData);
  };

  const [islogin, setislogin] = useRecoilState(loginState);
  const [isB2bFlag, setIsB2BFlag] = useState('');
  const fetchData = () => {
    const value = localStorage.getItem('LoginUser');
    const val = (value === 'true' ? 'true' : 'false')
    setislogin(val);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
    const { IsB2BWebsite } = storeInit;
    setIsB2BFlag(1);
    // setIsB2BFlag(IsB2BWebsite);
  }, [])

  const getMenuApi = async () => {

    const storeInit = JSON.parse(localStorage.getItem("storeInit")) ?? ""
    const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail")) ?? ""
    // if (storeInit && Customer_id) {
    let pData = JSON.stringify({ "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id ?? 0}` })

    let pEnc = btoa(pData)

    const body = {
      con: "{\"id\":\"\",\"mode\":\"GETMENU\",\"appuserid\":\"nimesh@ymail.in\"}",
      f: "onload (GETMENU)",
      p: pEnc
    }

    await CommonAPI(body).then((res) => {
      // console.log("getmenuData",res?.Data?.rd)
      transformData(res?.Data?.rd)
      separateData(res?.Data?.rd)
    })
    // }
  }

  useEffect(() => {
    if (islogin === 'true') {
      getMenuApi()
      const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
      const { IsB2BWebsite } = storeInit;
      setIsB2BFlag(1);
      // setIsB2BFlag(IsB2BWebsite);
    }
  }, [islogin])




  const toggleOverlay = () => {
    setSearchText('');
    setSerachShowOverlay(!serachsShowOverlay);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
    setMenu1Index(null)
    setMenu2Index(null)
  };

  const [openCart, setOpenCart] = useState(false);
  const toggleCartDrawer = (isOpen) => (event) => {
    // if (isB2bFlag === 1) {
    navigation('/CartPage');
    // } else {
    // if (
    //   event.type === 'keydown' &&
    //   (event.key === 'Tab' || event.key === 'Shift')
    // ) {
    //   return;
    // }
    // setOpenCart(isOpen);
    // }
  };

  const handleEnterPress = () => {
    const savedProductList = localStorage.getItem('allproductlist');
    if (savedProductList) {
      const productList = JSON.parse(savedProductList);
      const searchValue = searchText;
      const filteredProducts = productList.filter(product => product.designno === searchValue || product.id === parseInt(searchValue) || product.ProducttypeName === parseInt(searchValue) || product.MetalColorName === parseInt(searchValue) || product.MetalTypeName === parseInt(searchValue) || product.OcassionName === parseInt(searchValue) || product.GenderName === parseInt(searchValue) || product.BrandName === parseInt(searchValue) || product.CategoryName === parseInt(searchValue) || product.CollectionName === parseInt(searchValue) || product.autocode === parseInt(searchValue));
      setSearchedProducts(filteredProducts);
    }
    navigation('/productpage');
  };

  useEffect(() => {
    setGSearch(searchedProducts);
  }, [searchedProducts])


  function capitalizeText(text) {
    return text?.toLowerCase()?.split(' ').map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }



  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  const [openYourBagDrawer, setOpenYourBagDrawer] = useState(false);
  const setIsLoginState = useSetRecoilState(loginState)


  const handleLogout = () => {
    setIsLoginState('false')
    localStorage.setItem('LoginUser', 'false');
    localStorage.removeItem('storeInit');
    localStorage.removeItem('loginUserDetail');
    localStorage.removeItem('remarks');
    localStorage.removeItem('selectedAddressId');
    localStorage.removeItem('orderNumber');
    localStorage.removeItem('registerEmail');
    localStorage.removeItem('UploadLogicalPath');
    localStorage.removeItem('remarks');
    localStorage.removeItem('registerMobile');
    navigation('/')
    window.location.reload();
  }


  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {serachsShowOverlay && (
        <>
          <div className="smlingSearchoverlayNew  fixed">
            <div className="smlingTopSerachOver-Fixed">
              <IoSearchOutline style={{ height: "15px", width: "15px", marginRight: "10px" }} />
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                autoFocus
                onChange={(e) => {
                  setSearchText(e.target.value)

                }}
                className="serachinputBoxOverly"
                onKeyDown={searchDataFucn}
              />
              <IoClose
                style={{
                  height: "30px",
                  width: "30px",
                  color: "#7d7f85",
                  cursor: "pointer",
                }}
                onClick={toggleOverlay}
              />
            </div>
          </div>
        </>
      )}

      <Drawer
        open={openSearchDrawer}
        onClose={() => {
          setOpenSearchDrawer(false);
        }}
        anchor="right"
        elevation={0}
        className="searchCustomDrawer"
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 111,
        }}
      >
        <div style={{ paddingTop: '150px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1
              className="FontFamilySet"
              style={{ color: 'black', marginLeft: '40%', fontWeight: 400 }}>Search</h1>
            <CloseRoundedIcon
              style={{ fontSize: "32px", marginLeft: '30%', cursor: 'pointer' }}
              onClick={() => {
                setOpenSearchDrawer(false);
              }}
            />
          </div>
          <div className="gorHeaderSearchBoxDiv">
            <input type="text" placeholder="Search" className="gorHeaderSearchBox" />
          </div>
          <div>
            <p style={{ fontSize: '20px', margin: '20px 50px' }}>Popular searches</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Necklace</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Earrings</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Parker</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Rings</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Huggies</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Pearl</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Bracelet</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Silver</p>
            <p style={{ fontSize: '20px', margin: '15px 60px' }}>Opal</p>
          </div>
        </div>
      </Drawer>

      <Drawer
        open={openYourBagDrawer}
        onClose={() => {
          setOpenYourBagDrawer(false);
        }}
        anchor="right"
        elevation={0}
        className="searchCustomDrawer"
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "transparent" },
          zIndex: 111,
        }}
      >
        <div style={{ paddingTop: '150px' }}>
          <div className="gorYourBagTopHeader">
            <h1
              className="FontFamilySet"
              style={{ color: 'black', marginLeft: '30%', fontWeight: 400 }}>Your Bag (1)</h1>
            <CloseRoundedIcon
              style={{ fontSize: "32px", marginLeft: '30%', cursor: 'pointer' }}
              onClick={() => {
                setOpenYourBagDrawer(false);
              }}
            />
          </div>
          <div style={{ marginTop: '70px', paddingBottom: '150px' }}>
            <div style={{ display: 'flex', marginInline: '30px' }}>
              <img alt="" src="https://cdn.shopify.com/s/files/1/0015/3849/0427/files/RE-1811-202-G_1_641d250d-bdec-4856-9232-5c453e35e89c.jpg?v=1700605683&width=832&height=1109&crop=center" className="gorBagimge" />
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p className="FontFamilySet" style={{ margin: '0px', fontSize: '17px', }}>Bespoke Plate Adjustable Bracelet (gold)</p>
                  <p className="FontFamilySet" style={{ margin: '0px', fontSize: '15px' }}>$150</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p style={{ margin: '0px', fontSize: '13px', fontStyle: 'italic' }}>Gold Plated</p>
                  <p>Remove</p>
                </div>
                <div style={{ marginTop: '40px' }}>
                  <p style={{ fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}>Remove</p>
                </div>
              </div>
            </div>

            <div>
              <p className="FontFamilySet" style={{ fontSize: '32px', marginTop: '50px', textAlign: 'center' }}>Don't Forget These</p>
              <div style={{ display: 'flex' }}>
                <div style={{ marginInline: '20px' }}>
                  <div style={{ position: 'relative', zIndex: '-1', width: 'fit-content' }}>
                    {/* <img alt="" src={enterMouceimg1 ? "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_4.jpg?v=1690277975&width=832&height=1109&crop=center" : "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_1.jpg?v=1690277975&width=832&height=1109&crop=center"} className="gorBagForgetimage" onMouseEnter={() => setEnterMouceimg1(true)} onMouseLeave={() => setEnterMouceimg1(false)} /> */}
                    <div className="gorForgotIconeDiv">
                      <PiBagThin style={{ height: '35px', width: '35px' }} />
                    </div>
                  </div>
                  <p style={{ width: '180px' }}>Tatum Bracelet Layering Set</p>
                  <p>999</p>
                </div>
                <div>
                  <div style={{ position: 'relative', zIndex: '-1', width: 'fit-content' }}>
                    {/* <img alt="" src={enterMouceimg1 ? "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_4.jpg?v=1690277975&width=832&height=1109&crop=center" : "https://cdn.shopify.com/s/files/1/0015/3849/0427/products/GS-229-200-G_1.jpg?v=1690277975&width=832&height=1109&crop=center"} className="gorBagForgetimage" onMouseEnter={() => setEnterMouceimg1(true)} onMouseLeave={() => setEnterMouceimg1(false)} /> */}
                    <div className="gorForgotIconeDiv">
                      <PiBagThin style={{ height: '35px', width: '35px' }} />
                    </div>
                  </div>
                  <p style={{ width: '180px' }}>Tatum Bracelet Layering sdfsdfsdfSet</p>
                  <p>999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gorYourBagBottom">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingBlock: '20px' }}>
              <p style={{ fontSize: '15px', fontWeight: 500 }}>Subtotal <br /><span style={{ fontWeight: 400, fontSize: '13px' }}>Shipping, gift cards and promo codes applied at checkout.</span></p>
              <p>$150</p>
            </div>
            <button className="gorbagChecoutBtn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </Drawer>

      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        className="tsrMobileDrawerMain"
      >
        <div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
              <IoClose
                style={{
                  height: "30px",
                  width: "30px",
                  cursor: "pointer",
                }}
                onClick={toggleDrawer}
              />

              <div>
                {islogin === "true" ? (
                  <div style={{ display: 'flex' }}>


                    <li
                      className="gorjana-Menu-item"
                      style={{ cursor: "pointer", fontWeight: 600 }}
                      onClick={() => { navigation("/account"); toggleDrawer(); }}
                    >
                      {ACCOUNT}
                    </li>


                  </div>
                ) : (
                  <li
                    className="gorjana-Menu-item"
                    style={{ cursor: "pointer", marginInline: '10px', fontWeight: 600 }}
                    onClick={() => { navigation('/LoginOption'); toggleDrawer(); }}
                  >
                    {LOGIN}
                  </li>
                )}
              </div>
            </div>
          </div>
          <div>

            <div className="tsrmobileDraweMenuItem" style={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
              <li
                className="gorjana-Menu-item"
                style={{ cursor: "pointer", height: 'auto', width: '100%' }}
                onClick={toggleList}
              >
                <p style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginInline: '20px' }}>Fine Jewellery<span>{isOpen ? "-" : "+"}</span></p>
              </li>
              <ul className={`my-list-fineJewe ${isOpen ? "open" : ""}`} style={{ margin: isOpen && '-15px 0px 30px 40px', width: '100%' }}>
                <li style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                  {
                    menul0data?.map((md) => (
                      <span className="FontFamilySet" style={{ fontSize: '12.5px', letterSpacing: 0.4, cursor: 'pointer' }}
                        onClick={() => handelNewMenuData({ "label": "param0", "data": md })}
                      >
                        {capitalizeText(md?.menuname)}
                      </span>
                    ))
                  }
                </li>
              </ul>
            </div>

            <div className="tsrmobileDraweMenuItem">
              <li
                className="gorjana-Menu-item"
                style={{ cursor: "pointer" }}
                onClick={() => { navigation("/impact"); toggleDrawer(); }}
              >
                {IMPACT}
              </li>
              <FaChevronRight style={{ margin: '10px', opacity: '0.5' }} onClick={() => { navigation("/impact"); toggleDrawer(); }} />
            </div>

            <div className="tsrmobileDraweMenuItem">
              <li
                style={{ cursor: "pointer" }}
                className="gorjana-Menu-item"
                onClick={() => { navigation("/aboutUs"); toggleDrawer(); }}
              >
                {ABOUT_US}
              </li>
              <FaChevronRight style={{ margin: '10px', opacity: '0.5' }} onClick={() => { navigation("/aboutUs"); toggleDrawer(); }} />
            </div>



            {islogin === "true" &&
              <>

                <div className="tsrmobileDraweMenuItem">
                  <li
                    style={{ cursor: "pointer" }}
                    className="gorjana-Menu-item"
                    onClick={() => { navigation("/myWishList"); toggleDrawer(); }}
                  >
                    WishList
                  </li>
                  <FaChevronRight style={{ margin: '10px', opacity: '0.5' }} onClick={() => { navigation("/myWishList"); toggleDrawer(); }} />
                </div>

                <div className="tsrmobileDraweMenuItem">
                  <li
                    style={{ cursor: "pointer" }}
                    className="gorjana-Menu-item"
                    onClick={() => { toggleCartDrawer(true); toggleDrawer(); }}
                  >
                    Cart
                  </li>
                  <FaChevronRight style={{ margin: '10px', opacity: '0.5' }} onClick={() => { toggleCartDrawer(true); toggleDrawer(); }} />
                </div>


                <div className="tsrmobileDraweMenuItem" style={{ display: 'flex', justifyContent: 'center' }}>
                  <li
                    style={{ cursor: "pointer" }}
                    className="gorjana-Menu-item"
                    onClick={() => { handleLogout(); toggleDrawer(); }}
                  >
                    Log Out
                  </li>
                </div>

              </>
            }
          </div>
        </div>
      </Drawer>

      <div className="gorjanaHeader">
        <div className="gorjanaTopHeader">
          <PiMapPinLight style={{ height: "20px", width: "40px" }} />
          <a href="/pages/store-locator" className="FontFamilySet" style={{ fontSize: "12px", color: 'black' }}>
            Find a Store Near You
          </a>
        </div>
        <div className="gorajanaBottomHeaderMain">
          <img
            alt=""
            src={titleImg}
            width="172px"
            className="gorjanaHederImage"
            onClick={() => navigation("/")}
          />
          <div className="gorjanaHeaderSubMenuMain">
            <ul className="gorjanaHeaderMenu">
              {islogin === "true" &&
                <li
                  className="gorjana-Menu-item  FontFamilySet"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                    height: '70px'
                  }}
                >
                  Shop
                  <RiArrowDropDownLine
                    style={{ width: "20px", height: "20px" }}
                  />
                </li>}


              <li
                className="gorjana-Menu-item"
                style={{ cursor: "pointer" }}
                onClick={() => navigation("/impact")}
              >
                {IMPACT}
              </li>

              <li
                style={{ cursor: "pointer" }}
                className="gorjana-Menu-item"
                onClick={() => navigation("/aboutUs")}
              >
                {ABOUT_US}
              </li>
            </ul>


            <div className="gorjanaHeaderMenuIconeWeb">
              <ul className="gorjanaHeaderMenu">

                {islogin === "true" ? (
                  <>
                    <li
                      className="gorjana-Menu-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigation("/account")}
                    >
                      {ACCOUNT}
                    </li>

                    <li
                      className="gorjana-Menu-item"
                      style={{ cursor: "pointer" }}
                      onClick={handleLogout}
                    >
                      Log Out
                    </li>
                  </>
                ) : (
                  <li
                    className="gorjana-Menu-item"
                    style={{ cursor: "pointer", marginInline: '10px' }}
                    onClick={() => navigation('/LoginOption')}

                  >
                    {LOGIN}
                  </li>
                )}

                {islogin === "true" &&
                  <>
                    <Badge
                      badgeContent={getWishListCount}
                      overlap={"rectangular"}
                      color="secondary"
                      className="gorjana-Menu-item badge12"
                    >
                      <Tooltip title="WishList">
                        <li
                          onClick={() => navigation("/myWishList")}>
                          <PiStarThin
                            style={{
                              height: "20px",
                              cursor: "pointer",
                              width: "20px",
                            }}
                          />
                        </li>
                      </Tooltip>
                    </Badge>
                    <li
                      className="gorjana-Menu-item"
                      onClick={toggleOverlay} style={{}}>
                      <IoSearchOutline
                        style={{ height: "20px", cursor: "pointer", width: "20px" }}
                      />
                    </li>

                    <Badge
                      badgeContent={getCartListCount}
                      overlap={"rectangular"}
                      color="secondary"
                      className="gorjana-Menu-item badge12"
                    >
                      <Tooltip title="Cart">
                        <li
                          onClick={toggleCartDrawer(true)}
                          style={{
                            cursor: "pointer",
                            listStyle: 'none',
                          }}
                        >
                          <HiOutlineShoppingBag
                            style={{
                              height: "25px",
                              cursor: "pointer",
                              width: "25px",
                            }}
                          // onClick={() => { setOpenYourBagDrawer(true); setOpenSearchDrawer(false); }}
                          />
                        </li>
                      </Tooltip>
                    </Badge>
                  </>
                }
              </ul>

            </div>


            <div className="gorjanaHeaderMenuIconeMobile">
              {islogin === "true" ? (
                <div style={{ display: 'flex' }}>
                  <IoSearch onClick={toggleOverlay} className="gorHeaderMobileIcoen" />
                  <Badge
                    badgeContent={getCartListCount}
                    overlap={"rectangular"}
                    color="secondary"
                    className="gorHeaderMobileIcoen badge12"
                  >
                    <Tooltip title="Cart">
                      <li
                        onClick={toggleCartDrawer(true)}
                        style={{
                          cursor: "pointer",
                          listStyle: 'none',
                        }}
                      >
                        <HiOutlineShoppingBag className="gorHeaderMobileIcoenCart" />
                      </li>
                    </Tooltip>
                  </Badge>
                </div>
              ) : (
                <li
                  className="gorjana-Menu-item"
                  style={{ cursor: "pointer", marginInline: '10px', fontWeight: 600 }}
                  onClick={() => navigation('/LoginOption')}
                >
                  {LOGIN}
                </li>
              )}

              <IoMenuOutline className="gorHeaderMobileIcoen" onClick={toggleDrawer} />
            </div>
          </div>
        </div>
      </div >

      <div
        onMouseEnter={handleDropdownOpen}
        onMouseLeave={handleDropdownClose}
        className={`shop-dropdown ${isDropdownOpen ? "open" : ""}  fixed`}
      >
        <div
          style={{
            padding: "50px",
            color: "#7d7f85",
            backgroundColor: "white",
          }}
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '200%' }}>
              <span
                className="FontFamilySet"
                style={{ fontSize: '13px', height: '25px', letterSpacing: 1, color: '#4d4d4d', fontWeight: 600, borderBottom: '1px solid #e1e1e1' }}>FINE JEWELRY</span>
              <span style={{ display: 'flex', flexDirection: 'column', marginTop: '12px', gap: '5px' }}>
                {
                  menul0data?.map((md) => (
                    <span
                      className="FontFamilySet"
                      style={{ fontSize: '12.5px', letterSpacing: 0.4, cursor: 'pointer', color: '#4d4d4d' }}
                      onClick={() => handelNewMenuData({ "label": "param0", "data": md })}
                    >
                      {capitalizeText(md?.menuname)}
                    </span>
                  ))
                }
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px', width: '200%' }}>
              <span
                className="FontFamilySet"
                style={{ fontSize: '13px', height: '25px', letterSpacing: 1, fontWeight: 600, color: '#4d4d4d', borderBottom: '1px solid #e1e1e1' }}>COLLECTIONS</span>
              <span style={{ display: 'flex', flexDirection: 'column', marginTop: '12px', gap: '5px' }}>
                {
                  menul1data?.map((md) => (
                    <span
                      className="FontFamilySet"
                      style={{ fontSize: '12.5px', letterSpacing: 0.4, cursor: 'pointer', color: '#4d4d4d' }}
                      onClick={() => handelNewMenuData({ "label": "param1", "data": md })}
                    >
                      {capitalizeText(md?.param1dataname)}
                    </span>
                  ))
                }
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '30px', width: '200%' }}>
              <span
                className="FontFamilySet"
                style={{ fontSize: '13px', height: '25px', letterSpacing: 1, fontWeight: 600, color: '#4d4d4d', borderBottom: '1px solid #e1e1e1' }}>BOUTIQUE</span>
              <span style={{ display: 'flex', flexDirection: 'column', marginTop: '12px', gap: '5px', height: '350px', flexWrap: 'wrap' }}>
                {
                  menul2data?.map((md) => (
                    <span
                      className="FontFamilySet"
                      style={{
                        fontSize: '12.5px', letterSpacing: 0.4, cursor: 'pointer', color: '#4d4d4d'
                      }}
                      onClick={() => handelNewMenuData({ "label": "param2", "data": md })}
                    >
                      {capitalizeText(md?.param2dataname)}
                    </span>
                  ))
                }
              </span>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <img src={menu2Img} className="showShopByDataImg1" alt="#" style={{ height: '250px', width: '300px', objectFit: 'cover' }} />
              <img src={menu1Img} className="showShopByDataImg2" alt="#" style={{ height: '250px', width: '300px', objectFit: 'cover' }} />
            </div>
          </div>


        </div>
      </div>

      <Cart open={openCart} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
}
