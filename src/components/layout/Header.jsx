import Container from './Container'
import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import Dropdown from './Dropdown'
import {LiaBarsSolid} from 'react-icons/lia'
import Listitem from './Listitem'
import List from './List'
import Search from './Search'
import {FiSearch} from 'react-icons/fi'
import {FaUserAlt,FaShoppingCart} from 'react-icons/fa'
import {RxTriangleDown} from 'react-icons/rx'


const Header = () => {

  let [catagoryDropDownShow,setCatagoryDropDownShow] = useState(false);
  let [userDropDownShow,setUserDropDownShow] = useState(false);
  let catagoryDropDownRef = useRef()
  let userDropDownRef = useRef()

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
    })
  },[])

  return (
    <div className='bg-[#F3F3F3] py-6'>
        <Container >
            <Flex className="flex justify-between">
               <div className='flex items-center'>
                <Dropdown className="relative" dropref={catagoryDropDownRef}>
                <p className='flex items-center gap-x-2.5 font-dm font-reguler text-sm'>
                <LiaBarsSolid/> Shop by Chatagory 
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
                <div className='w-[600px] flex items-center font-dm font-reguler text-sm relative'>
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
                <List className="absolute mt-3 right-[250px] w-[200px] bg-white text-[#cac9c9] font-dm font-reguler text-sm border border-solid border-[#F0F0F0] text-primary">
                <Listitem className="py-4 px-5 border-b border-solid border-[#F0F0F0] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold hover:bg-primary" itemname="My Account"/>
                  <Listitem className="py-4 px-5 border-b border-solid border-[#F0F0F0] duration-300 ease-in hover:px-7 hover:text-white hover:font-bold hover:bg-primary" itemname="Log Out"/>
                  
                </List>
                }
                    </Dropdown>
                    <div><FaShoppingCart/></div>
                  </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header
