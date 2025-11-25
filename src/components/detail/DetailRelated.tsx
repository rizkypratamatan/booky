import BookCard from "@/components/ui/BookCard.tsx";
import Image from "@/components/ui/Image.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import useBookRecommends from "@/hooks/useBookRecommends.ts";
import type Book from "@/types/interfaces/Book.ts";


export default function DetailRelated() {
    const {data} = useBookRecommends({limit: 4});

    return <section className="flex flex-col gap-10">
        <SectionTitle title={"Related Books"}/>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data?.data?.books.map((book: Book, index: number) =>
                <BookCard key={index} id={book.id} title={book.title} author={book.Author.name} rate={book.rating.toString()}>
                    <Image className="w-full h-auto" src={book.coverImage} alt={`${book.title} Cover`}/>
                </BookCard>)}
        </div>
    </section>;
}
