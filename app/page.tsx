import Image from "next/image";
import Banner from "./components/shared/Banner";
import NewsCard from "./components/shared/NewsCard";

export default function Home() {
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
