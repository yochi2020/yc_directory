import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

interface Post {
    _createdAt: string
    views: number
    author: {
        _id: number
        name: string
    }
    title: string
    images: string
    _id: number
    category: string
    description: string
}
const StartupCars = ({ post }: { post: Post }) => {
    const {
        _createdAt,
        views,
        author: { _id: authorId, name },
        title,
        description,
        category,
        images,
        _id
    } = post
    return (
        <li className='startup-card group'>
            <div className="flex-between">
                <p className="startup_card_date">
                    {
                        formatDate(_createdAt)
                    }
                </p>
                <div className="flex gap-1 5">
                    <EyeIcon className='size-6 text-primary' />
                    <span className='text-16-medium'>{views}</span>
                </div>


            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">
                            {name}
                        </p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-medium line-clamp-1">{title}</h3>
                    </Link>

                    <Link href={`/user/${authorId}`}>
                        <Image
                            className='rounded-full'
                            src={images}
                            alt='placeholder'
                            width={48} height={48} key={_id} />
                    </Link>

                    <Link href={`/user/${authorId}`}>
                        <p className='startup-card_desc'>
                            {description}
                        </p>
                        <img src={images} alt="placeholder" className='startup-card_img' />
                    </Link>

                    <div className="flex-between gap-3 mt-5">
                        <Link href={`/query=${category}`}>
                            <p className='text-16-medium'>{category}</p>
                        </Link>
                        <Button className="">
                            <Link href={`/startup/${_id}`}>
                                Details</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default StartupCars