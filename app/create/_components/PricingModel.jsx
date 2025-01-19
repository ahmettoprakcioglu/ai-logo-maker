import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '../../_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'

const PricingModel = ({ formData = {} }) => {
  const { user } = useUser();
  useEffect(() => {
    if (typeof formData === 'object' && Object.keys(formData).length === 5 && typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData))
    }
  }, [formData]);
  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
        {Lookup.pricingOption.map((pricing, index) => (
          <div className='flex flex-col items-center p-5 border rounded-xl gap-2' key={index}>
            <Image
              src={pricing.icon} alt={pricing.title}
              width={60} height={60}
            />
            <h2 className='font-medium text-2xl'>{pricing.title}</h2>
            <div>
              {pricing.features.map((feature, index) => (
                <h2 key={index} className='text-lg mt-3'>{feature}</h2>
              ))}
            </div>
            {user ? (
              <Button className='mt-auto'>{pricing.button}</Button>
            ) : (
              <SignInButton mode='modal' forceRedirectUrl={`/generate-logo?type=${pricing.title}`}>
                <Button className='mt-auto'>{pricing.button}</Button>
              </SignInButton>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingModel
