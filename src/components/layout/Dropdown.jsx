import React from 'react'

const Dropdown = ({children,ClassName,title,dropref}) => {
  return (
    <div className={ClassName}  ref={dropref}>
        <p>{title}</p>
      {children}
    </div>
  )
}

export default Dropdown
