import React from 'react'
import Icons from './Icons'

const Footer = ({data}) => {
  return (
    <div className='h-40 bg-primary w-full flex items-center justify-center flex-col'>
      <div className='flex items-center flex-[4]'>
        <Icons images={data}/>
      </div>
      <p className='flex-1 text-xs font-semibold'>@2021 IndianFoooood.com</p>
    </div>
  )
}

export default Footer