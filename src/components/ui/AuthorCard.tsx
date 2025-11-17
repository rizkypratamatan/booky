import Image from "@/components/ui/Image";
import type {ReactNode} from "react";


type Props = {
    children: ReactNode;
    bookCount: number;
    name: string;
};

export default function AuthorCard({children, bookCount, name}: Props) {
    return <section className="flex gap-4 items-center p-4 rounded-xl blur-20">
        {children}
        <div className="flex flex-col gap-0.5">
            <p className="font-bold md:text-lg">{name}</p>
            <div className="flex gap-1.5 items-center">
                <Image className="size-6" src="/images/icons/icon-book-blue.png" alt="Book Icon"/>
                <p className="text-sm font-medium md:text-base">{bookCount} books</p>
            </div>
        </div>
    </section>;
}
