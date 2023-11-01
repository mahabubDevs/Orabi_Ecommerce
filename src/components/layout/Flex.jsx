import React, { Children } from 'react'

const Flex = ({children}) => {
  return (
    <div className='flex'>
      {children}
    </div>
  )
}

export default Flex
