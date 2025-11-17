import CartList from "@/components/cart/CartList.tsx";
import CartSummary from "@/components/cart/CartSummary.tsx";
import CheckboxHorizontal from "@/components/ui/CheckboxHorizontal.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";


export default function Cart() {
    return <div className="flex flex-col gap-8">
        <SectionTitle title="My Cart"/>
        <div className="flex flex-col gap-10 items-start md:flex-row">
            <section className="grow flex flex-col gap-6 w-full">
                <CheckboxHorizontal containerClass="gap-4">Select All</CheckboxHorizontal>
                <CartList/>
                <div className="horizontal-line"></div>
                <CartList/>
                <div className="horizontal-line"></div>
                <CartList/>
                <div className="horizontal-line"></div>
                <CartList/>
            </section>
            <CartSummary/>
        </div>
    </div>;
}
