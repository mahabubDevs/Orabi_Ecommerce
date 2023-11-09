import React from 'react'

const Dropdown = ({children,ClassName,title,onClick}) => {
  return (
    <div className={ClassName} onClick={onClick}>
        <p>{title}</p>
      {children}
    </div>
  )
}

export default Dropdown
