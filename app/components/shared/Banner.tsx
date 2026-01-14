import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='bg-slate-100 rounded-md'>
            <div className='px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                <div className="">
                    <Image
                        src="/assets/banner.jpg"
                        alt="Banner images"
                        width={560}
                        height={420}
                        className='rounded-md'
                    />
                </div>
                <div className="space-y-4 flex flex-col">
                    <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
                    <h2 className='text-3x1 font-bold'>OpenAI Is Growing Fast and Burning Through Piles of Money</h2>
                    <p className='text-[18px] mt-5 leading-6'>OpenAI monthly revenue hit US$300 million in August, up 1,700% since the beginning of 2023, and the company expects about $3.7 billion in annual sales this year, according to financial documents reviewed by The New York Times.
                        OpenAI estimates that its revenue will balloon to copy1.6 billion next year. OpenAI revenue in August more than tripled from a year earlier, according to the documents, and about 350 million people up from around 100 million in March of this year used its services each month as of June.
                    </p>
                    <Button className='mt-4' variant="default">Read More</Button>
                </div>
            </div>
        </section>
    )
}

export default Banner