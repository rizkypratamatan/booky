import CheckoutUserInfo from "@/components/checkout/CheckoutUserInfo.tsx";
import CartItem from "@/components/ui/CartItem.tsx";
import Image from "@/components/ui/Image";


export default function CheckoutSummary() {
    return <section className="w-full flex flex-col gap-4 md:w-1/2 md:gap-8">
        <CheckoutUserInfo/>
        <div className="horizontal-line"></div>
        <div className="flex flex-col gap-4">
            <p className="text-lg font-bold md:text-2xl">Book List</p>
            <CartItem category="Category" name="Book Name" author="Author name">
                <Image className="w-17.5 h-auto md:w-23" src="/images/book-1.png" alt="Book Thumbnail"/>
            </CartItem>
            <CartItem category="Category" name="Book Name" author="Author name">
                <Image className="w-17.5 h-auto md:w-23" src="/images/book-1.png" alt="Book Thumbnail"/>
            </CartItem>
        </div>
    </section>;
}
