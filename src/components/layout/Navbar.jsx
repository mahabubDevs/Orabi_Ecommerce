import Images from './Images'
import Flex from './Flex'
import List from './List'
import Listitem from './Listitem'
import {FaBars} from "react-icons/fa"
import { useEffect, useState } from 'react'
import Container from './Container'

const Navbar = () => {
    
  let [show,setShow] = useState(true);
  useEffect(()=>{
    function scrollWith(){
      if(window.innerWidth < 1024 ){
        setShow(false);
      }else{
        setShow(true);
      }
    }
    
    scrollWith() 
    window.addEventListener("resize",scrollWith);
  },[])

  return (
    <nav className='py-8'>
    <Container>
      <Flex className="lg:flex">
        <div className='lg:w-3/12'> 
        <Images imgsrc='../src/assets/Logo.png' />
        
        </div>
        <div className='w-9/12 w-full'>
          <FaBars onClick={()=>setShow(!show)} className='block lg:hidden ml-auto absolute top-2.5 right-2.5'/>
          {show && 
          <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
            <Listitem className="font-dm text-sm font-regular hover:font-bold my-2 lg:my-0" itemname='Home'/>
            <Listitem className="font-dm text-sm font-regular hover:font-bold my-2 lg:my-0" itemname='About'/>
            <Listitem className="font-dm text-sm font-regular hover:font-bold my-2 lg:my-0" itemname='Page'/>
            <Listitem className="font-dm text-sm font-regular hover:font-bold my-2 lg:my-0" itemname='Page'/>
            <Listitem className="font-dm text-sm font-regular hover:font-bold my-2 lg:my-0" itemname='Page'/>
          </List>
          }
        </div>
      </Flex>
    </Container>
  </nav>
  )
}

export default Navbar
