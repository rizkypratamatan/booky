import Image from "@/components/ui/Image";
import type {ReactNode} from "react";
import {Link} from "react-router";


type Props = {
    children: ReactNode;
    bookCount?: number;
    id?: number;
    name?: string;
};

export default function AuthorCard({children, bookCount, id, name}: Props) {
    return <Link className="flex gap-4 items-center p-4 rounded-xl blur-20" to={`/author/${id ?? 0}`}>
        {children}
        <div className="flex flex-col gap-0.5">
            <p className="font-bold md:text-lg">{name ?? ''}</p>
            <div className="flex gap-1.5 items-center">
                <Image className="size-6" src="/images/icons/icon-book-blue.png" alt="Book Icon"/>
                <p className="text-sm font-medium md:text-base">{bookCount ?? 0} books</p>
            </div>
        </div>
    </Link>;
}
