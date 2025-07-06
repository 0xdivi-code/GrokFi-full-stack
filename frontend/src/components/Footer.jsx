import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Swank NG offers a curated collection of modern home furnishings and housewares that bring you high-quality pieces at an approachable price point. Shop for unique frames, shelf designs at our stores or online. Plus, find unique home accessories, modern lighting, contemporary rugs, modern dinnerware sets and more as part of our robust offerings as a home store.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>WhatsApp</li>
                <li>TikTok</li>
                <li>Instagram</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 <a href="https://t.me/vicckr" target="_blank" rel="noopener noreferrer">@feoludev</a> - Made with Love ❤️.</p>
        </div>

    </div>
  )
}

export default Footer
