import CheckoutAgreement from "@/components/checkout/CheckoutAgreement.tsx";
import CheckoutBorrowDate from "@/components/checkout/CheckoutBorrowDate.tsx";
import CheckoutBorrowDuration from "@/components/checkout/CheckoutBorrowDuration.tsx";
import CheckoutReturn from "@/components/checkout/CheckoutReturn.tsx";
import CheckoutSummary from "@/components/checkout/CheckoutSummary.tsx";
import {Button} from "@/components/ui/button.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";


export default function Checkout() {
    return <div className="flex flex-col gap-6 md:gap-8">
        <SectionTitle title="Checkout"/>
        <div className="flex flex-col gap-6 items-start md:flex-row md:gap-14.5">
            <CheckoutSummary/>
            <section className="basis-1/2 flex flex-col gap-6 p-5 rounded-2xxl blur-20">
                <p className="text-xl font-bold md:text-2xxl">Complete Your Borrow Request</p>
                <CheckoutBorrowDate/>
                <CheckoutBorrowDuration/>
                <CheckoutReturn/>
                <CheckoutAgreement/>
                <Button className="h-12 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:text-base">Confirm
                    & Borrow</Button>
            </section>
        </div>
    </div>;
}
