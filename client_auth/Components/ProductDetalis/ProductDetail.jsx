import React from "react";
import LeftComponent from "./ProductLeft/LeftComponent";
import RightComponent from "./ProductRight/RightComponent";
import { Button} from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import ProductSlider from '../Home/ProductSlider/Productslider.jsx'

function ProductDetail() {
   const HandelAddtoCart = () =>{
    alert(`product added`,)
    
  }
  return (
    <>
    <div className="lg:mt-5 bg-white">
      <div className="container bg-white lg:pl-3 lg:flex  gap-1">
        <div className="leftContainer  lg:w-[40%] w-full  ">
          <LeftComponent /> 
          <div className="btns flex justify-center gap-1 items-center lg:mr-5">
            <Button  onClick={HandelAddtoCart} className=" sm:h-[50px] md:w-[30%] lg:w-[47%] w-[50%] !p-3 sm:!text-[14px] !text-[11px] !mt-[10px] !bg-[#ff9f00]" variant="contained">
              <Cart />
              Add to Cart
            </Button>

            <Button className="!bg-[#fb541b]  sm:h-[50px] md:w-[30%] lg:w-[47%]  w-[50%] !p-3 sm:!text-[14px] !text-[11px] !mt-[10px] " variant="contained">
              <Flash />
              Buy Now
            </Button>
          </div>
        </div>

        <div className="rightContainer w-full lg:w-[60%]   my-3 ">
          <RightComponent />
        </div>
      </div>
    </div>
    <ProductSlider title='Related Products' />
    </>
  );
}

export default ProductDetail;
