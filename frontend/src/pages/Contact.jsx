import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Store Address</p>
          <p className=' text-gray-500'>Opposite Old Eko Ende Garage <br />Ikirun, Osun State.</p>
          <p className=' text-gray-500'>Tel: +234 903-8248-423 <br /> Email: admin@swankng.com</p>
          <p className='font-semibold text-xl text-gray-600'>Opportunities @ Swank NG</p>
          <p className=' text-gray-500'>Learn more about our new collections and and job openings.</p>
          <a href="https://wa.link/8qze0y" target="_blank" rel="noopener noreferrer"><button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>DM on Whatsapp</button></a>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
