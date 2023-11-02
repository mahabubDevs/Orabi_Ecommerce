import React, { Children } from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Flex
