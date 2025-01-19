  'use client'

import React, { useEffect, useState } from 'react'
import LogoTitle from './_components/LogoTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoDesc from './_components/LogoDesc';
import LogoColorPalette from './_components/LogoColorPalette';
import LogoIdea from './_components/LogoIdea';
import LogoDesigns from './_components/LogoDesigns';
import PricingModel from './_components/PricingModel';

const CreateLogo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState('title');
  const onHandleInputChange = (field, value = '') => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }
  console.log("formData: ", formData);
  
  useEffect(() => {
    if (step === 1) {
      setActiveStep('title');
    } else if (step === 2) {
      setActiveStep('desc')
    } else if (step === 3) {
      setActiveStep('palette')
    } else if (step === 4) {
      setActiveStep('design')
    } else if (step === 5) {
      setActiveStep('idea')
    } else if (step === 6) {
      setActiveStep('pricing')
    } else {
      setActiveStep('')
    }
  }, [step]);

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      {step === 1 ? (
        <LogoTitle onHandleInputChange={val => onHandleInputChange('title', val)} formData={formData} />
      ) : step === 2 ? (
        <LogoDesc onHandleInputChange={val => onHandleInputChange('desc', val)} formData={formData} />
      ) : step === 3 ? (
        <LogoColorPalette onHandleInputChange={val => onHandleInputChange('palette', val)} formData={formData} />
      ) : step === 4 ? (
        <LogoDesigns onHandleInputChange={val => onHandleInputChange('design', val)} formData={formData} />
      ) : step === 5 ? (
        <LogoIdea onHandleInputChange={val => onHandleInputChange('idea', val)} formData={formData} />
      ) : step === 6 ? (
        <PricingModel onHandleInputChange={val => onHandleInputChange('pricing', val)} formData={formData} />
      ) : null}
      <div className='flex items-center justify-between'>
        {step !== 1 && (
          <Button variant='outline' onClick={() => setStep(curr => curr - 1)}>
            <ArrowLeft />
            Previous
          </Button>
        )}
        <Button
          onClick={() => setStep(curr => curr + 1)}
          disabled={!formData[activeStep]}
        >
          <ArrowRight />
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo
