import AccountReviewItem from "@/components/account/AccountReviewItem.tsx";
import Search from "@/components/ui/Search.tsx";


export default function AccountReview() {
    return <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold md:text-2xxl">Reviews</h2>
        <Search className="max-w-136" placeholder="Search reviews"/>
        <AccountReviewItem/>
        <AccountReviewItem/>
        <AccountReviewItem/>
    </div>;
}
