import Container from './Container'
import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import Dropdown from './Dropdown'
import Images from './Images'
import {LiaBarsSolid} from 'react-icons/lia'
import Listitem from './Listitem'
import List from './List'
import Search from './Search'
import {FiSearch} from 'react-icons/fi'
import {FaUserAlt,FaShoppingCart} from 'react-icons/fa'
import {RxTriangleDown} from 'react-icons/rx'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'


const Header = () => {

  let [catagoryDropDownShow,setCatagoryDropDownShow] = useState(false);
  let [userDropDownShow,setUserDropDownShow] = useState(false);
  let [userCartDropDownShow,setCartDropDownShow] = useState(false);
  let catagoryDropDownRef = useRef()
  let userDropDownRef = useRef()
  let cartDropDownRef = useRef()

  useEffect(()=>{
    document.body.addEventListener("click", (e)=>{
      if(catagoryDropDownRef.current.contains(e.target)){
        setCatagoryDropDownShow(true)
      }else{
        setCatagoryDropDownShow(false)
      }
      if(userDropDownRef.current.contains(e.target)){
        setUserDropDownShow(true)
      }else{
        setUserDropDownShow(false)
      }
      if(cartDropDownRef.current.contains(e.target)){
        setCartDropDownShow(true)
      }else{
        setCartDropDownShow(false)
      }
    })
  },[])

  return (
    <div className='bg-[#F5F5F3] py-6'>
        <Container >
            <Flex className="flex justify-between">
               <div className='flex items-center'>
                <Dropdown className="relative" dropref={catagoryDropDownRef}>
                <p className='flex items-center gap-x-2.5 font-dm font-reguler text-sm'>
                <LiaBarsSolid/> <span className='hidden lg:inline-block'>Shop by Chatagory </span>
                </p>
                {catagoryDropDownShow && 
                <List className="absolute mt-3 w-[263px] bg-primary text-[#FCF4F2] font-dm font-reguler text-sm ">
                <Listitem className="py-4 px-5 border-b border-solid border-[#2D2D2D] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold" itemname="Furniture"/>
                  <Listitem className="py-4 px-5 border-b border-solid border-[#2D2D2D] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold" itemname="Electronics"/>
                  <Listitem className="py-4 px-5 border-b border-solid border-[#2D2D2D] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold" itemname="Clothes"/>
                  <Listitem className="py-4 px-5 border-b border-solid border-[#2D2D2D] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold" itemname="Bags"/>
                  <Listitem className="py-4 px-5 border-b border-solid border-[#2D2D2D] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold"itemname="Home appliances"/>
                </List>
                }
                </Dropdown>
               </div>
                <div className=' w-auto lg:w-[600px] flex items-center  font-dm font-reguler text-sm relative'>
                  <Search className="w-full py-4 px-5 placeholder:text-[#c4c4c4] " placeholder="Enter a search"/>
                  <FiSearch className='absolute top-4 right-3'/>
                </div>
                <div className="flex items-center">
                  <Flex className="flex  gap-x-10">
                    <Dropdown className="relative" dropref={userDropDownRef}>
                    <div className='flex justify-center items-center'>
                      <FaUserAlt/> <RxTriangleDown/>
                    </div>
                    {userDropDownShow && 
                <List className="absolute mt-3 right-[70px] w-[200px] bg-white text-[#cac9c9] font-dm font-reguler text-sm border border-solid border-[#F0F0F0] text-primary">
                <Listitem className="py-4 px-5 border-b border-solid border-[#F0F0F0] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold hover:bg-primary" itemname="My Account"/>
                  <Listitem className="py-4 px-5 border-b border-solid border-[#F0F0F0] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold hover:bg-primary" itemname="Log Out"/>
                  
                </List>
                }
                    </Dropdown>
                    
                      <div>
                          <Dropdown className="relative" dropref={cartDropDownRef}>
                              <FaShoppingCart className='text-xl'/> 
                              {userCartDropDownShow && 
                                <div className='w-[360px] absolute mt-3 right-[70px] border border-solid border-[#F0F0F0]  '>
                                  <div className=' bg-[#F5F5F3] p-5'>
                                  <Flex className="flex justify-between">
                                      <div>
                                        <Images imgsrc="../src/assets/cart.png" />
                                      </div>
                                      <div className='flex flex-col justify-center'>
                                        <h3 className='font-dm font-bold text-sm text-primary'>Black Smart Watch</h3>
                                        <p className='font-dm font-bold text-sm text-primary mt-3'>$44.00</p>
                                      </div>
                                      <div className='flex justify-end items-center'>
                                      <RxCross2 className='text-sm'/>
                                      </div>
                                      
                                  </Flex>
                                  </div>
                                  <div className='bg-white p-5 '>
                                      <h4 className='font-dm text-regular font-base text-[#767676]' >Subtotal: <span className='font-bold text-primary'>$44.00</span> </h4>
                                      <Link to="#" className='font-sm text-bold font-dm py-4 px-9 border border-solid border-primary inline-block mt-3'> View Cart</Link>
                                      <Link to="#" className='font-sm text-bold font-dm py-4 px-9 border border-solid border-primary bg-primary text-white ml-5 inline-block mt-3'> CheckOut</Link>
                                  </div>
                                </div>

                                }
                          </Dropdown>
                       </div>
                    
                  </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header
