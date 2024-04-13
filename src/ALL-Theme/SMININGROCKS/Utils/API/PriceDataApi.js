import { CommonAPI } from "./CommonAPI";

export const getDesignPriceList = async () => {
    const storeInit = JSON.parse(localStorage.getItem("storeInit"))
    const loginUserDetail = JSON.parse(localStorage.getItem("loginUserDetail"));
    const currencyCombo = JSON.parse(localStorage.getItem("CURRENCYCOMBO"));
    const currencyData = JSON.parse(localStorage.getItem("currencyData"));
    const UserEmail = localStorage.getItem("registerEmail");
    let loginUserStatus = localStorage.getItem("LoginUser") ?? false

    const GetPriceReq = {
      "CurrencyRate": `${currencyCombo?.CurrencyRate}`,
      "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
      "Customerid": `${loginUserDetail?.id}`,
      "Laboursetid": `${storeInit?.PolicyApplyOnName === "Customer Wise Policy" ? loginUserDetail?._pricemanagement_laboursetid : loginUserDetail?.pricemanagement_laboursetid}`,
      "diamondpricelistname": `${loginUserDetail?._diamondpricelistname}`,
      "colorstonepricelistname": `${loginUserDetail?._colorstonepricelistname}`,
      "SettingPriceUniqueNo": `${storeInit?.PolicyApplyOnName === "Customer Wise Policy" ? loginUserDetail?._SettingPriceUniqueNo : loginUserDetail?.SettingPriceUniqueNo }`,
      "DesignNo": ""
    }

    const GetB2CPriceReq = {
      "CurrencyRate": `${currencyData?.CurrencyRate}`,
      "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`,
      "Customerid": `${loginUserDetail?.id ?? 0}`,
      "Laboursetid": `${storeInit?.pricemanagement_laboursetid}`,
      "diamondpricelistname": `${storeInit?.diamondpricelistname}`,
      "colorstonepricelistname": `${storeInit?.colorstonepricelistname}`,
      "SettingPriceUniqueNo": `${storeInit?.SettingPriceUniqueNo}`,
      "DesignNo": ""
    }

    const encodedCombinedValue = btoa(JSON.stringify(GetPriceReq));
    const encodedB2CCombinedValue = btoa(JSON.stringify(GetB2CPriceReq));
    let payload = loginUserStatus == 'false' && storeInit?.IsB2BWebsite == 0 ? encodedB2CCombinedValue : encodedCombinedValue 

    let body = {
      "con": `{\"id\":\"Store\",\"mode\":\"getdesignpricelist\",\"appuserid\":\"${UserEmail ?? ''}\"}`,
      "f": "onloadFirstTime (getdesignpricelist)",
      "p": payload
    }

    await CommonAPI(body).then((res) => {
      localStorage.setItem("getPriceData",JSON.stringify(res?.Data))
    //   setpriceDataApi(res?.Data)
    })

  }