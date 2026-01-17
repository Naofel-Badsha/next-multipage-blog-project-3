import Link from 'next/link'
import React from 'react'
import NewsList from '../components/news/NewsList'

const NewsPage = () => {
    return (
        <section className='py-12'>
           <h1 className='text-2xl font-bold mb-8'>Latest News </h1>

           <NewsList />
        </section>
    )
}

export default NewsPage
