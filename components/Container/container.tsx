import React from 'react'
type Props = {
  children: React.ReactNode
}

const Cotainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
    </div>
  )
}

export default Cotainer
