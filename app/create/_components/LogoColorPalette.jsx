import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

const LogoColorPalette = ({
  onHandleInputChange = () => {},
  formData = {}
}) => {
  const [selectedOption, setSelectedOption] = useState(formData?.palette || '');

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {Colors.map((palette, index) => (
          <div
            className={`flex p-1 cursor-pointer ${selectedOption === palette?.name ? 'border-2 rounded border-primary' : ''}`}
            key={index}
            onClick={() => {
              setSelectedOption(palette?.name)
              onHandleInputChange(palette?.name)
            }}
          >
            {palette?.colors.map((color, index) => (
              <div
                className='h-24 w-full'
                style={{
                  backgroundColor: color
                }}
                key={index}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoColorPalette
