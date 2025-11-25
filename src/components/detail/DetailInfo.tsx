import DetailAction from "@/components/detail/DetailAction.tsx";
import DetailDescription from "@/components/detail/DetailDescription.tsx";
import DetailImage from "@/components/detail/DetailImage.tsx";
import DetailInfoItem from "@/components/detail/DetailInfoItem.tsx";
import DetailTitle from "@/components/detail/DetailTitle.tsx";
import Image from "@/components/ui/Image.tsx";
import type Book from "@/types/interfaces/Book.ts";


type Props = {
    book?: Book;
};

export default function DetailInfo({book}: Props) {
    return <div className="flex flex-col gap-4 items-center md:flex-row md:gap-9">
        <DetailImage>
            <Image className="w-full h-auto" src={book?.coverImage ?? ''} alt={`${book?.title} Cover`}/>
        </DetailImage>
        <div className="basis-3/4 flex flex-col gap-4 md:gap-5">
            <DetailTitle title={book?.title} category={book?.Category.name} author={book?.Author.name} rate="4.9"/>
            <div className="flex gap-5">
                <DetailInfoItem count={320} text="Page"/>
                <div className="vertical-line"></div>
                <DetailInfoItem count={book?.rating} text="Rating"/>
                <div className="vertical-line"></div>
                <DetailInfoItem count={book?.reviewCount} text="Reviews"/>
            </div>
            <div className="w-full horizontal-line md:8/10 lg:w-7/10"></div>
            <DetailDescription description={book?.description}/>
            <DetailAction id={book?.id}/>
        </div>
    </div>;
}
