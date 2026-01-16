export interface NewsItem {
    _id: string;
    title: string;
    description: string;
    snippet: string;
    url: string;
    imageUrl: string;
    language: string;
    published_at: string;
    source: string;
    categorie: string[];
    relevance_score: null
}

export interface NewsCardProps {
    item: NewsItem 
}