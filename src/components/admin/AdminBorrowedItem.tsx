import BookBorrowedItemStatus from "@/components/ui/BookBorrowedItemStatus.tsx";
import CartItem from "@/components/ui/CartItem.tsx";
import Image from "@/components/ui/Image.tsx";


export default function AdminBorrowedItem() {
    return <div className="flex flex-col gap-4 w-full p-5 rounded-2xl blur-20 md:gap-5">
        <BookBorrowedItemStatus/>
        <div className="horizontal-line"></div>
        <div className="flex flex-col gap-6 justify-between items-center md:flex-row">
            <CartItem author="Author name" category="Category" name="Book Name" date="29 Aug 2025" duration="Duration 3 Days">
                <Image className="w-23 h-auto" src="/images/book-1.png" alt="Book Thumbnail"/>
            </CartItem>
            <div className="w-full horizontal-line md:hidden"></div>
            <div className="flex flex-col w-full md:w-auto">
                <p className="font-semibold">borrower's name</p>
                <p className="text-xl font-bold">John Doee</p>
            </div>
        </div>
    </div>;
}
