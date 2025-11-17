import DetailAction from "@/components/detail/DetailAction.tsx";
import DetailDescription from "@/components/detail/DetailDescription.tsx";
import DetailImage from "@/components/detail/DetailImage.tsx";
import DetailInfoItem from "@/components/detail/DetailInfoItem.tsx";
import DetailTitle from "@/components/detail/DetailTitle.tsx";


export default function DetailInfo() {
    return <div className="flex flex-col gap-4 items-center md:flex-row md:gap-9">
        <DetailImage>
            <img className="w-full h-auto" src="/images/book-1.png" alt="Book Thumbnail"/>
        </DetailImage>
        <div className="basis-3/4 flex flex-col gap-4 md:gap-5">
            <DetailTitle title="The Psychology of Money" category="Business & Economics" author="Morgan Housel" rate="4.9"/>
            <div className="flex gap-5">
                <DetailInfoItem count={320} text="Page"/>
                <div className="vertical-line"></div>
                <DetailInfoItem count={212} text="Rating"/>
                <div className="vertical-line"></div>
                <DetailInfoItem count={179} text="Reviews"/>
            </div>
            <div className="w-full horizontal-line md:8/10 lg:w-7/10"></div>
            <DetailDescription/>
            <DetailAction/>
        </div>
    </div>;
}
