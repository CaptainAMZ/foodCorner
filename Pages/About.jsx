import React from 'react'

const About = ({data}) => {
  return (
    <div className='h-full '>
      <div className='h-1/2 bg-cover bg-center bg-img-about'>
      </div>
      <div className='container text-black'>
        <h1 className='title'>{data.title}</h1>
        <p className='subtitle'>{data.subtitle}</p>
      </div>
    </div>
  )
}

export default About