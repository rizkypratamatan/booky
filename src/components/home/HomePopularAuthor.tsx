import AuthorCard from "@/components/ui/AuthorCard.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import useAuthors from "@/hooks/useAuthors.ts";
import type Author from "@/types/interfaces/Author.ts";
import {Fragment} from "react";


export default function HomePopularAuthor() {
    const {data} = useAuthors();

    return <Fragment>
        <SectionTitle title="Popular Authors"/>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.data.authors.map((author: Author, index: number) =>
                <AuthorCard key={index} name={author.name} bookCount={5}>
                    <Avatar className="size-15 md:size-20.25">
                        <AvatarImage src="/images/avatar-default.png" alt="Avatar"/>
                        <AvatarFallback>Avatar</AvatarFallback>
                    </Avatar>
                </AuthorCard>)}
        </div>
    </Fragment>;
}
