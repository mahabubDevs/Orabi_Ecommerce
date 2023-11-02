import React from 'react'

const List = ({children,className}) => {
  return (
    <div>
      <ul className={className}>{children}</ul>
    </div>
  )
}

export default List
