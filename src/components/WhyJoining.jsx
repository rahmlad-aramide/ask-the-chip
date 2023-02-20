import React from 'react'
import { whyData } from '../data/whyData'
import WhyCard from './WhyCard'

const WhyJoining = () => {
  return (
    <div>
        <section className="flex justify-center items-center flex-col min-h-screen">
        <h1 className="font-bold text-[36px] text-center max-w-[29ch] leading-[44px] mt-8 mb-4">Why should you join our Community</h1>
        <h2 className="text-[20px] max-w-[36ch] text-center mb-12">
            And indeed the worst of my faults was a certain impatient gaiety of disposition
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
            {whyData.map((item, index) => <WhyCard key={index} title={item.title} text={item.text} />)}
        </div>
        </section>
    </div>
  )
}

export default WhyJoining