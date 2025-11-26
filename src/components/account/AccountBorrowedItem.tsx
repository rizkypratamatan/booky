import BookBorrowedItemStatus from "@/components/ui/BookBorrowedItemStatus.tsx";
import {Button} from "@/components/ui/button.tsx";
import CartItem from "@/components/ui/CartItem.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import Image from "@/components/ui/Image.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import type {Loan} from "@/types/interfaces/Loan.ts";
import dayjs from "dayjs";


type Props = {
    loan: Loan;
};

export default function AccountBorrowedItem({loan}: Props) {
    return <div className="flex flex-col gap-4 w-full p-5 rounded-2xl blur-20 md:gap-5">
        <BookBorrowedItemStatus dueDate={loan.dueAt} status={loan.status}/>
        <div className="horizontal-line"></div>
        <div className="flex flex-col gap-6 justify-between items-center md:flex-row">
            <CartItem author={loan.Book.Author?.name} category={loan.Book.Category?.name} name={loan.Book.title} date={dayjs(loan.borrowedAt).format('DD MMM YYYY')} duration={`Duration ${dayjs(loan.dueAt).diff(dayjs(loan.borrowedAt), 'day').toString()} Days`}>
                <Image className="w-23 h-auto" src={loan.Book.coverImage} alt={`${loan.Book.title} Cover`}/>
            </CartItem>
            <Dialog>
                <DialogTrigger className="w-full h-10 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:w-45.5 md:text-base">Give
                    Review</DialogTrigger>
                <DialogContent className="flex flex-col gap-6 p-4 bg-background-100 border-0 rounded-2xl md:p-6">
                    <DialogHeader className="gap-6">
                        <DialogTitle className="text-lg font-bold text-left md:text-2xl md:text-center">Give
                            Review</DialogTitle>
                        <DialogDescription className="flex flex-col gap-6">
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-bold md:text-base">Give Rating</p>
                                <div className="flex gap-1">
                                    <img className="size-10 md:size-12.25" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                                    <img className="size-10 md:size-12.25" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                                    <img className="size-10 md:size-12.25" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                                    <img className="size-10 md:size-12.25" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                                    <img className="size-10 md:size-12.25" src="/images/icons/icon-star-yellow.png" alt="Star Icon"/>
                                </div>
                            </div>
                            <Textarea className="h-58 border-neutral-300 rounded-xl resize-none" placeholder="Please share your thoughts about this book"/>
                            <Button className="h-12 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:text-base">Send</Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    </div>;
}
