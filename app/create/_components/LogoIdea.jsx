import React, { useEffect, useRef, useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { Loader2Icon } from 'lucide-react'
import { useLogoContext } from '@/app/_context/LogoContext'

function LogoIdea({ formData, onHandleInputChange }) {
  const { logoIdeas, updateLogoIdeas, fetchLogoIdeas, loading } = useLogoContext();
  const [selectedOption, setSelectedOption] = useState(formData?.idea);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      if (!formData?.idea && formData?.design) {
        fetchLogoIdeas(formData);
      }
    }
  }, [formData?.idea, formData?.design]);

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoIdeaTitle}
        description={Lookup.LogoIdeaDesc}
      />
      <div className='flex items-center justify-center'>
        {loading && <Loader2Icon className='animate-spin my-10' />}
      </div>
      <div className='flex flex-wrap gap-3 mt-6'>
        {logoIdeas && logoIdeas.map((item, index) => (
          <h2 
            key={index}
            onClick={() => {
              setSelectedOption(item);
              onHandleInputChange(item);
            }}
            className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedOption === item && 'border-primary'}`}
          >
            {item}
          </h2>
        ))}
        <h2 
          onClick={() => {
            setSelectedOption('Let AI Select the best idea');
            onHandleInputChange('Let AI Select the best idea');
          }}
          className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedOption === 'Let AI Select the best idea' && 'border-primary'}`}
        >
          Let AI Select the best idea
        </h2>
      </div>
    </div>
  )
}

export default LogoIdea