import BookCard from "@/components/ui/BookCard.tsx";
import Image from "@/components/ui/Image.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";


export default function DetailRelated() {
    return <section className="flex flex-col gap-10">
        <SectionTitle title={"Related Books"}/>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <BookCard author="Author name" rate="4.9" title="Book Name">
                <Image className="w-full h-auto" src="/images/book-1.png" alt="Book Cover"/>
            </BookCard>
            <BookCard author="Author name" rate="4.9" title="Book Name">
                <Image className="w-full h-auto" src="/images/book-1.png" alt="Book Cover"/>
            </BookCard>
            <BookCard author="Author name" rate="4.9" title="Book Name">
                <Image className="w-full h-auto" src="/images/book-1.png" alt="Book Cover"/>
            </BookCard>
            <BookCard author="Author name" rate="4.9" title="Book Name">
                <Image className="w-full h-auto" src="/images/book-1.png" alt="Book Cover"/>
            </BookCard>
            <BookCard author="Author name" rate="4.9" title="Book Name">
                <Image className="w-full h-auto" src="/images/book-1.png" alt="Book Cover"/>
            </BookCard>
        </div>
    </section>;
}
