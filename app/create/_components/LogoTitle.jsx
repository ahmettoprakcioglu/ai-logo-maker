'use client';

import React, { useEffect, useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({
  onHandleInputChange,
  formData = {}
}) => {
  const searchParam = useSearchParams();
  const title = searchParam?.get('title')

  useEffect(() => {
    if (title) {
      onHandleInputChange(title);
    }
  }, []);
  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup?.LogoTitle}
        description={Lookup?.LogoTitleDesc}
      />
      <input
        type='text'
        placeholder={Lookup.InputPlaceHolder}
        className='p-4 border rounded-lg mt-5 w-full focus-visible:outline-primary'
        defaultValue={formData?.title || title}
        onChange={({ target: { value = '' } = {} }) => onHandleInputChange(value)}
      />
    </div>
  )
}

export default LogoTitle
