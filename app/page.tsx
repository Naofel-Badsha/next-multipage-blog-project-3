import Image from "next/image";
import Banner from "./components/shared/Banner";
import NewsCard from "./components/shared/NewsCard";

const Home = async() => {
    const data = await fetch('https://naofel-badsha.github.io/api/db.json')
      const news = await data.json()
      console.log(news)
  return (
    <div className="text-5xl py-24">
       <Banner />

       <div className="my-12">
        <h1 className="text-2xl font-bold mb-8">Latest News</h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard />
        </div>
       </div>
      </div>
  );
}
export default Home;