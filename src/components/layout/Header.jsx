import Container from './Container'
import React, { useState } from 'react'
import Flex from './Flex'
import Dropdown from './Dropdown'
import {LiaBarsSolid} from 'react-icons/lia'
import Listitem from './Listitem'
import List from './List'


const Header = () => {

  let [show,setShow] = useState(false);
  let handelDropdown =()=>{
    setShow(!show)
  }

  return (
    <div className='bg-[#F3F3F3]'>
        <Container >
            <Flex className="flex justify-between">
               <div>
                <Dropdown onClick={handelDropdown}>
                <p className='flex items-center gap-x-2.5 '>
                <LiaBarsSolid/> Shop by Chatagory 
                </p>
                {show && 
                <List className="absolute">
                <Listitem itemname="skdjfksdj"/>
                  <Listitem itemname="skdjfksdj"/>
                  <Listitem itemname="skdjfksdj"/>
                </List>
                }
                </Dropdown>
               </div>
                <h1>kasdk</h1>
                <h1>kasdk</h1>
            </Flex>
        </Container>
    </div>
  )
}

export default Header
