import BookBorrowedItemStatus from "@/components/ui/BookBorrowedItemStatus.tsx";
import CartItem from "@/components/ui/CartItem.tsx";
import Image from "@/components/ui/Image.tsx";
import type {Loan} from "@/types/interfaces/Loan.ts";
import dayjs from "dayjs";


type Props = {
    loan: Loan;
};

export default function AdminBorrowedItem({loan}: Props) {
    return <div className="flex flex-col gap-4 w-full p-5 rounded-2xl blur-20 md:gap-5">
        <BookBorrowedItemStatus dueDate={loan.dueAt} status={loan.status}/>
        <div className="horizontal-line"></div>
        <div className="flex flex-col gap-6 justify-between items-center md:flex-row">
            <CartItem author={loan.book.author?.name} category={loan.book.category?.name} name={loan.book.title} date={dayjs(loan.borrowedAt).format('DD MMM YYYY')} duration={`Duration ${dayjs(loan.dueAt).diff(dayjs(loan.borrowedAt), 'day').toString()} Days`}>
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
