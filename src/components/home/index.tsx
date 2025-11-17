import HomeCategory from "@/components/home/HomeCategory.tsx";
import HomeHero from "@/components/home/HomeHero.tsx";
import HomePopularAuthor from "@/components/home/HomePopularAuthor.tsx";
import HomeRecommendation from "@/components/home/HomeRecommendation.tsx";
import {Fragment} from "react";


export default function Home() {
    return <Fragment>
        <HomeHero/>
        <HomeCategory/>
        <HomeRecommendation/>
        <div className="horizontal-line"></div>
        <HomePopularAuthor/>
    </Fragment>;
}
