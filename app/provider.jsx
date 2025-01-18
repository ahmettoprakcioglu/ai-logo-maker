import React from 'react'
import Header from './_components/Header'
import { LogoProvider } from './_context/LogoContext'

const Provider = ({
  children
}) => {
  return (
    <LogoProvider>
      <div className='overflow-hidden'>
        <Header />
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 overflow-auto main-container'>
          {children}
        </div>
      </div>
    </LogoProvider>
  )
}

export default Provider
