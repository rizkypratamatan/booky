import CartItem from "@/components/ui/CartItem.tsx";


export default function AccountReviewItem() {
    return <div className="flex flex-col gap-4 w-full p-5 rounded-2xl blur-20 md:gap-5">
        <p className="text-sm font-semibold md:text-base">25 August 2025, 13:38</p>
        <div className="horizontal-line"></div>
        <div className="flex gap-6 justify-between items-center">
            <CartItem author="Author name" category="Category" name="Book Name" date="29 Aug 2025" duration="Duration 3 Days">
                <img className="w-17.5 h-auto md:w-23" src="/images/book-1.png" alt="Book Thumbnail"/>
            </CartItem>
        </div>
        <div className="horizontal-line"></div>
        <div className="flex flex-col gap-1">
            <div className="flex gap-0.5">
                <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                <img className="size-6" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
            </div>
            <p className="text-sm font-semibold md:text-base">Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor
                aliquam viverra nunc sed facilisis. Integer tristique nullam morbi mauris ante.</p>
        </div>
    </div>;
}
