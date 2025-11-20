import AuthorCard from "@/components/ui/AuthorCard.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import BookCard from "@/components/ui/BookCard.tsx";
import Image from "@/components/ui/Image.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import useAuthorDetail from "@/hooks/useAuthorDetail.ts";
import type Book from "@/types/interfaces/Book.ts";
import {useParams} from "react-router";


export default function Author() {
    const {id} = useParams();

    const {data} = useAuthorDetail(Number(id));

    return <div className="flex flex-col gap-10">
        <AuthorCard id={data?.data.author.id} bookCount={data?.data.books.length} name={data?.data.author.name}>
            <Avatar className="size-15 md:size-20.25">
                <AvatarImage src="/images/avatar-default.png" alt="Avatar"/>
                <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
        </AuthorCard>
        <section className="flex flex-col gap-8">
            <SectionTitle title="Book List"/>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {data?.data.books.map((book: Book, index: number) =>
                    <BookCard key={index} id={book.id} author={data?.data.author.name} rate={book.rating.toString()} title={book.title}>
                        <Image className="w-full h-auto" src={book.coverImage} alt={`${book.title} Cover`}/>
                    </BookCard>)}
            </div>
        </section>
    </div>;
}
