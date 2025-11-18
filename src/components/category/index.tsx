import CategoryFilter from "@/components/category/CategoryFilter.tsx";
import BookCard from "@/components/ui/BookCard.tsx";
import Image from "@/components/ui/Image.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import useBooks from "@/hooks/useBooks.ts";


export default function Category() {
    const {data} = useBooks({page: 1, limit: 10});
    console.log(data)

    return <div className="flex flex-col gap-4 md:gap-8">
        <SectionTitle title="Book List"/>
        <div className="flex flex-col gap-4 items-start md:flex-row md:gap-10">
            <CategoryFilter/>
            <section className="grow grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            </section>
        </div>
    </div>;
}
