
import Search from "./Search";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { Button, Divider } from "@mui/material";
// import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import React, { useContext ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/Appcontext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navigation() {
  const navigate = useNavigate()
  const { userData, backendurl, setUserdata, setIsLoggedin } = useContext(AppContext)

  const sendVerifyingotp = async ()=>{
      try {
          axios.defaults.withCredentials = true
          const {data} = await axios.post(backendurl + '/api/auth/send-verify-otp')

          if(data.success) {
              navigate('/email-verify')
              toast.success(data.message)
          }
          else{
              toast.error(data.message)
          }

      } catch (error) {
          toast.error(error.message)  
      }
  }

  const logout = async ()=>{
      try {
          axios.defaults.withCredentials = true
          const {data} = await axios.post(backendurl + '/api/auth/logout')
          data.success && setIsLoggedin(false)
          data.success && setUserdata(false)
          navigate('/')
      } catch (error) {
          toast.error(error.message)
      }
  }
  
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  
  return (
    <>
      <nav className="navigation lg:py-2 border-gray-300 border-b-[1px]">
        <div className="container lg:gap-4 grid lg:grid-cols-12 m-auto">
          <div className="col1 lg:col-span-2  p-1">
            <Link to="/">
              <h1
                className="text-center text-[#7d0492] text-[25px] font-[600] sm:text-2xl"
                style={{ fontStyle: "italic" }}
              >
                GiftNGifts
              </h1>
            </Link>
          </div>

          <div className="col2 lg:col-span-7 p-1">
            <Search />
          </div>

          <div className="col3 lg:col-span-3 pt-1 ml-5">
            <ul className="flex items-center justify-center  xl:gap-3  w-full">
              {/* <li className="">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ textTransform: "unset", fontWeight: 600 }} className="text-[16px]">
                  Singup|Signin
                 <MdOutlineArrowDropDown/>
                </Button>
               
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }} className="!text-center">
                  <MenuItem onClick={handleClose} className="!text-[14px] !pr-10 " ><FaRegUserCircle className="text-[#7d0492] text-[16px]"/>&nbsp;&nbsp;My Profile</MenuItem>
                  <Divider/>
                  <MenuItem onClick={handleClose} className="!text-[14px]  !pr-10 ">SignUp</MenuItem>
                  <MenuItem onClick={handleClose} className="!text-[14px] !pr-10  ">SignIn</MenuItem>
                  <MenuItem onClick={handleClose} className="!text-[14px] !pr-10  ">SignOut</MenuItem>
                </Menu>
              </li> */}

              <li>
                {userData ? (
                  <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group">
                    
                    {userData.name[0].toUpperCase()}
                    <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-10">
                      
                      <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
                        {!userData.isAccountVerify && (
                          <li
                            onClick={sendVerifyingotp}
                            className="py-2 px-1 hover:bg-gray-200 cursor-pointer"
                          >
                            
                          </li>
                        )}

                        <li
                          onClick={logout}
                          className="py-2 px-1 hover:bg-gray-200 cursor-pointer pl-10"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (

                 
                  <Button
                    onClick={() => navigate("/login")}
                    className=" flex  px-5 !py-2  text-gray-800  transition-all gap-2"
                  >
                    <FaRegUserCircle className="!text-[24px] hover:text-black " />
                    Login
                  </Button>
                )}
              </li>

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare className=" md:text-[25px] text-[20px]" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="WhishList">
                  <IconButton aria-label="like">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FiHeart className="md:text-[25px] text-[20px]" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart className="md:text-[25px] text-[20px]" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
