import DetailBreadcrumb from "@/components/detail/DetailBreadcrumb.tsx";
import DetailInfo from "@/components/detail/DetailInfo.tsx";
import DetailRelated from "@/components/detail/DetailRelated.tsx";
import DetailReview from "@/components/detail/DetailReview.tsx";
import {Fragment} from "react";


export default function Detail() {
    return <Fragment>
        <section className="flex flex-col gap-6">
            <DetailBreadcrumb title="The Psychology of Money"/>
            <DetailInfo/>
        </section>
        <div className="horizontal-line"></div>
        <DetailReview/>
        <div className="horizontal-line"></div>
        <DetailRelated/>
    </Fragment>;
}
