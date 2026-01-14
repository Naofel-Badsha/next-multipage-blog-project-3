import Link from 'next/link'
import React from 'react'

const NewsLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <section className='py-12'>
            <h1 className='text-2xl font-bold mb-8'>Latest News</h1>
            <nav className='space-x-4 mb-4'>
                <Link href="/news/sports">Sports</Link>
                <Link href="/news/health">Health</Link>
            </nav>
            <div className='flex justify-between'>
                {/*---------Middle----Children-------*/}
                <div className="md:w-4/5 h-96 bg-slate-200 flex items-center justify-center">
                    {children}
                </div>
               {/*---------Sidebar----Change-------*/}
                <div className='bg-purple-300 h-96 md:w-1/5'>
                    Side Bar
                </div>
            </div>
        </section>
    )
}

export default NewsLayout