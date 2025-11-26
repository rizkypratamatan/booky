import CartList from "@/components/cart/CartList.tsx";
import CartSummary from "@/components/cart/CartSummary.tsx";
import CheckboxHorizontal from "@/components/ui/CheckboxHorizontal.tsx";
import SectionTitle from "@/components/ui/SectionTitle.tsx";
import useCart from "@/hooks/useCart.ts";
import type {RootState} from "@/stores/store.ts";
import type {CartItem} from "@/types/interfaces/Cart.ts";
import {Fragment} from "react";
import {useSelector} from "react-redux";


export default function Cart() {
    const token: string = useSelector((state: RootState) => state.token.value);

    const {data} = useCart(token);

    return <div className="flex flex-col gap-8">
        <SectionTitle title="My Cart"/>
        <div className="flex flex-col gap-10 items-start md:flex-row">
            <section className="grow flex flex-col gap-6 w-full">
                <CheckboxHorizontal containerClass="gap-4" value="all" checked={false}>Select All</CheckboxHorizontal>
                {data?.data?.items.map((item: CartItem, index: number) =>
                    <Fragment key={index}>
                        <CartList item={item}/>
                        {index < data?.data?.items.length - 2 && <div className="horizontal-line"></div>}
                    </Fragment>)}
            </section>
            <CartSummary items={data?.data?.items}/>
        </div>
    </div>;
}
