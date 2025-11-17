import BookCard from "@/components/ui/BookCard.tsx";
import {Button} from "@/components/ui/button.tsx";
import Image from "@/components/ui/Image.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import useBookRecommends from "@/hooks/useBookRecommends.ts";
import type {BookRecommendResponseDataBook} from "@/types/interfaces/BookRecommendsResponse.ts";


export default function HomeRecommendation() {
    const {data} = useBookRecommends({limit: 10});

    return <section className="flex flex-col gap-10 items-center">
        <SectionTitle title="Recommendation"/>
        <div className="grid grid-cols-2 gap-5 w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data?.data.books.map((book: BookRecommendResponseDataBook, index: number) =>
                <BookCard key={index} title={book.title} author={book.author.name} rate={book.rating.toString()}>
                    <Image className="w-full h-auto" src={book.coverImage} alt={`${book.title} Cover`}/>
                </BookCard>)}
        </div>
        <Button className="w-50 h-12 mt-5 border border-neutral-300 rounded-full text-sm font-bold md:text-base">Load
            More</Button>
    </section>;
}
