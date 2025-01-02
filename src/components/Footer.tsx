import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center justify-ceter text-lg">
          <p className='text-gray-700'>© Travel</p>
          <div className='flex  flex-col sm:flex-row text-pink-400 text-center justify-center gap-4 sm:gap-0'>
          <a href="#" className=" hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Affiliate Disclosures</a>
            <a href="#" className=" hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">• Privacy Policy</a>
            <a href="#" className=" hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">• Terms Of Use</a>
            </div>
            <p className=' mt-4 sm:mt-0 text-gray-700'>Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission at no extra cost to you. As an affiliate, I only recommend products and services that I feel are high quality and helpful to my readers. Thanks for your support.</p>
          </div>
        </div>
      </div>
  )
}

export default Footer
