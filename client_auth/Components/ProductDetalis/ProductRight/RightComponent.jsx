import React from "react";
import Rating from "@mui/material/Rating";
import { Typography, Box, styled } from "@mui/material";
import LocalOffer from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  font-size: 13px;
  vartical-align: baseline;
  & > p {
    font-size: 13px;
    margin-top: 5px;
  }
`;

const StyledBedge = styled(LocalOffer)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 11px;
`;
function RightComponent() {
  return (
    <div className="productContent ">
      <h1 className="text-[20px] font-[600] mb-1 ">
        Red Velvet Fresh Cream Cake Half kg
      </h1>

      <div className="flex items-center  gap-3">
        <span className="text-gray-400 text-[12px]">
          Brands :
          <span className="font-[400] text-[12px] text-gray-600  pl-1">
            BirthDay Cake
          </span>
        </span>
        <Rating name="sixe-small" defaultValue={4} sixe="small" readOnliy />
        <span className="text-[13px]  cursor-pointer">Review {5}</span>
      </div>

      <div className="flex items-center gap-4 mt-1">
        <span className="price text-black text-[20px] font-[600]">₹900</span>
        <span className="oldPricce line-through text-grat-500 text-[13px] font-[500]">
          ₹1500
        </span>
      </div>

      <div className="productdetail mt-3">
        <p className="text-[15px] font-[600] text-gray-500">Product Details</p>
        <ul className="text-[13px] px-4 p-1 list-disc">
          <li className="pt-1">Cake Flavour- Red Velvet</li>
          <li className="pt-1">Type of Cake - Cream</li>
          <li className="pt-1">Shape- Round</li>
          <li className="pt-1">Weight: 500 gm</li>
          <li className="pt-1">Net Quantity: 1 Cake</li>
          <li className="pt-1">Diameter: 7.5 inch</li>
          <li className="pt-1">Serves: 4-6 People</li>
        </ul>
        <p className="text-[15px] font-[600] mt-1 text-gray-500">Ingredients:</p>
        <ul className="text-[14px] px-4 p-2 list-disc">
          <li>
            Red Velvet Premix, Refined oil, Breakfast Sugar, Whip Cream, Cream
            Cheese, Tamato red colour, Red Velvet Sponge crumble
          </li>
        </ul>
      </div>

      <div className="offers ">
        <Typography style={{fontSize:15}}>Available Offers</Typography>
        <SmallText>
          <Typography>
            <StyledBedge />
            Bank Offer : 10% off up to ₹749 on HDFC Bank Credit Card
            Transactions.T&C
          </Typography>
          <Typography>
            <StyledBedge />
            Bank Offer : 5% Unlimited Cashback on Flipkart Axis Bank Credit
            CardT&C
          </Typography>
          <Typography>
            <StyledBedge />
            Bank Offer : 10% off up to ₹1,250 on HDFC Bank Credit Card
            Transactions. Min Txn Value: ₹7,499T&C
          </Typography>
          <Typography>
            <StyledBedge />
            Special Price : Get extra 88% off (price inclusive of
            cashback/coupon)T&C
          </Typography>
        </SmallText>
      </div>
    </div>
  );
}

export default RightComponent;
