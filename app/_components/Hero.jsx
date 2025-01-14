'use client';

import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation';

const Hero = () => {
  const [logoTitle, setLogoTitle] = useState('');

  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
      <h2 className='text-primary text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
      <h2 className='text-5xl text-center font-bold'>{Lookup.HeroSubHeading}</h2>
      <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

      <div className='flex gap-6 w-full max-w-2xl items-center mt-10'>
        <input
          placeholder={Lookup.InputPlaceHolder}
          className='p-3 border rounded-md w-full shadow-md focus:border-primary focus-visible:outline-none focus-visible:shadow-primary'
          onChange={({ target: { value = '' } = {} }) => setLogoTitle(value)}
        />
        <Button
          onClick={() => {
            if (logoTitle) redirect(`/create?title=${logoTitle}`)
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default Hero
