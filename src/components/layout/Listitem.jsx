import React from 'react'

const Listitem = ({itemname,className}) => {
  return (
    <div>
      <li className={className}>{itemname}</li>
    </div>
  )
}

export default Listitem
