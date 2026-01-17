import { NewsCardProps, } from '@/app/types/news'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'


const NewsCard = ({item}: NewsCardProps) => {
    return (
        <section className="border p-4 rounded-md shadow-md">
            <Link href="#">
                <Image
                    src={item?.imageUrl}
                    alt="Banner images"
                    width={500}
                    height={500}
                    className='mb-5 md:h-56 rounded-md hover:scale-105 cursor-pointer transition-all duration-200'
                />

            </Link>
            <div className="">
                <h2 className='text-2xl font-semibold my-3'>What To Expect From United Natural Foods Inc (UNFI) Q4 2024 Earni</h2>
                <p className='mb-4 text-[18px]'>United Natural Foods Inc (UNFI) will release its Q4 2024 earnings on October 1, 2024</p>
                <Link href="#">
                    <Button variant="default">Read More</Button>
                </Link>
            </div>
        </section>
    )
}

export default NewsCard