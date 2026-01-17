

const fetchNews = async (category: string = "", search: string="") =>{
    try{
const response = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news?
category=${category}&search=${search}`);
// const response = await fetch(`https://naofel-badsha.github.io/api/db.json`)
    }catch(error){
        console.error("Error fetching news data", error);
        return []
    }
}