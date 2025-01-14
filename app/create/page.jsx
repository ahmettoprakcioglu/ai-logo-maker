  'use client'

import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoDesc from './_components/LogoDesc';
import LogoColorPalette from './_components/LogoColorPalette';
import LogoIdea from './_components/LogoIdea';
import LogoDesigns from './_components/LogoDesigns';

const CreateLogo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const onHandleInputChange = (field, value = '') => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  console.log('formData: ', formData);

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
      ) : null}
      <div className='flex items-center justify-between'>
        {step !== 1 && (
          <Button variant='outline' onClick={() => setStep(curr => curr - 1)}>
            <ArrowLeft />
            Previous
          </Button>
        )}
        <Button onClick={() => setStep(curr => curr + 1)}>
          <ArrowRight />
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo
