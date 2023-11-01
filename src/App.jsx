

import './App.css'
import Images from './components/layout/Images'
import Flex from './components/layout/Flex'
import List from './components/layout/List'
import Listitem from './components/layout/Listitem'

function App() {

  return (
    <>
      <nav>
        <div className='max-w-container mx-auto bg-red-500'>
          <Flex>
            <div className='w-3/12'> 
            <Images imgsrc='../src/assets/Logo.png' />
            
            </div>
            <div className='w-9/12'>
              <List>
                <Listitem  itemname='Home'/>
                <Listitem  itemname='About'/>
                <Listitem  itemname='Page'/>
              </List>
            </div>
          </Flex>
        </div>
      </nav>
    </>
  )
}

export default App
