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


export default function AccountBorrowedItem() {
    return <div className="flex flex-col gap-4 w-full p-5 rounded-2xl blur-20 md:gap-5">
        <BookBorrowedItemStatus/>
        <div className="horizontal-line"></div>
        <div className="flex flex-col gap-6 justify-between items-center md:flex-row">
            <CartItem author="Author name" category="Category" name="Book Name" date="29 Aug 2025" duration="Duration 3 Days">
                <Image className="w-23 h-auto" src="/images/book-1.png" alt="Book Thumbnail"/>
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
