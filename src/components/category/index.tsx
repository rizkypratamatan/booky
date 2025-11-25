import CategoryFilter from "@/components/category/CategoryFilter.tsx";
import BookCard from "@/components/ui/BookCard.tsx";
import Image from "@/components/ui/Image.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import useBooks from "@/hooks/useBooks.ts";
import type {RootState} from "@/stores/store.ts";
import type Book from "@/types/interfaces/Book.ts";
import type Filter from "@/types/interfaces/Filter.ts";
import {useSelector} from "react-redux";


export default function Category() {
    const filter: Filter = useSelector((state: RootState) => state.filter);

    const {data} = useBooks({page: 1, categoryId: filter.category, limit: 10});

    return <div className="flex flex-col gap-4 md:gap-8">
        <SectionTitle title="Book List"/>
        <div className="flex flex-col gap-4 items-start md:flex-row md:gap-10">
            <CategoryFilter/>
            <section className="grow grid grid-cols-2 gap-5 max-w-[calc(100%-19.125rem)] sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data?.data?.books?.map((book: Book, index: number) =>
                    <BookCard key={index} id={book.id} author={book.Author.name} rate={book.rating.toString()} title={book.title}>
                        <Image className="w-full h-auto" src={book.coverImage} alt={`${book.title} Cover`}/>
                    </BookCard>)}
            </section>
        </div>
    </div>;
}
