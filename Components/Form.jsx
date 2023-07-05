import React from 'react'
import {Input} from '../src/exports'
import {Button} from '../src/exports'

const Form = ({data , buttonData}) => {
  return (
    <div className='w-full flex flex-col gap-8'>
        {data.map((item , index) => (
            <Input key={index} {...item}/>
        ))}
        <Button link="/contact" text={buttonData}/>
    </div>
  )
}

export default Form