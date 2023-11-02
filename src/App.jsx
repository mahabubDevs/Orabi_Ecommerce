

import './App.css'
import Images from './components/layout/Images'
import Flex from './components/layout/Flex'
import List from './components/layout/List'
import Listitem from './components/layout/Listitem'
import {FaBars} from "react-icons/fa"
import { useEffect, useState } from 'react'

function App() {

  let [show,setShow] = useState(true);
  useEffect(()=>{
    function scrollWith(e){
      if(window.innerWidth < 1024 ){
        setShow(false);
      }else{
        setShow(true);
      }
    }
    window.addEventListener("resize",scrollWith);
  })

  return (
    <>
      <nav>
        <div className='max-w-container mx-auto p-2.5'>
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
        </div>
      </nav>
    </>
  )
}

export default App
