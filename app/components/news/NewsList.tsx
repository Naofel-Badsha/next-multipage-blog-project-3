'use-client'

import { NewsItem } from '@/app/types/news';
import React, { useEffect, useState } from 'react';

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([])
    const [search, setSerach] = useState<string>("");
    const [category, setCategory] = useState<string>("")
    useEffect(() => {

    }, [])
    
    
    return (
        <div>
            jkkdfs
        </div>
    );
};

export default NewsList;