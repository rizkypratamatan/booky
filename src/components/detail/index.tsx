import DetailBreadcrumb from "@/components/detail/DetailBreadcrumb.tsx";
import DetailInfo from "@/components/detail/DetailInfo.tsx";
import DetailRelated from "@/components/detail/DetailRelated.tsx";
import DetailReview from "@/components/detail/DetailReview.tsx";
import useBookDetail from "@/hooks/useBookDetail.ts";
import {Fragment} from "react";
import {useParams} from "react-router";


export default function Detail() {
    const {id} = useParams();

    const {data} = useBookDetail(Number(id));

    return <Fragment>
        <section className="flex flex-col gap-6">
            <DetailBreadcrumb title={data?.data.title}/>
            <DetailInfo book={data?.data}/>
        </section>
        <div className="horizontal-line"></div>
        <DetailReview reviews={data?.data.reviews}/>
        <div className="horizontal-line"></div>
        <DetailRelated/>
    </Fragment>;
}
