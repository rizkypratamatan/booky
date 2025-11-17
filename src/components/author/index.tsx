import AuthorCard from "@/components/ui/AuthorCard.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import BookCard from "@/components/ui/BookCard.tsx";
import Image from "@/components/ui/Image.tsx";
import SectionTitle from "../ui/SectionTitle";


export default function Author() {
    return <div className="flex flex-col gap-10">
        <AuthorCard bookCount={5} name="Author name">
            <Avatar className="size-15 md:size-20.25">
                <AvatarImage src="/images/avatar-default.png" alt="Avatar"/>
                <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
        </AuthorCard>
        <section className="flex flex-col gap-8">
            <SectionTitle title="Book List"/>
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
        </section>
    </div>;
}
