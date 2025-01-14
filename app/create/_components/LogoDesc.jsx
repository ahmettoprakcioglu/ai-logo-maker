import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({ onHandleInputChange = () => {}, formData = {}}) => {
  return (
    <div className='my-10'>
      <HeadingDescription title={Lookup.LogoDescTitle} description={Lookup.LogoDescDesc} />
      <input
        type='text'
        placeholder={Lookup.InputPlaceHolder}
        className='p-4 border rounded-lg mt-5 w-full focus-visible:outline-primary'
        defaultValue={formData?.desc || ''}
        onChange={({ target: { value = '' } = {} }) => onHandleInputChange(value)}
      />
    </div>
  )
}

export default LogoDesc
