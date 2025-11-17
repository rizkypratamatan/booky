import {Button} from "@/components/ui/button.tsx";
import CartItem from "@/components/ui/CartItem.tsx";
import Image from "@/components/ui/Image.tsx";


export default function AdminBookItem() {
    return <div className="flex flex-col gap-4 w-full p-5 rounded-2xl blur-20 md:gap-5">
        <div className="flex gap-6 justify-between items-center">
            <CartItem author="Author name" category="Category" name="Book Name" date="29 Aug 2025" rate="4.9">
                <Image className="w-23 h-auto" src="/images/book-1.png" alt="Book Thumbnail"/>
            </CartItem>
            <div className="relative">
                <div className="hidden gap-3 md:flex md:w-auto">
                    <Button className="w-23.75 h-12 p-2 border border-neutral-300 rounded-full font-bold">Preview</Button>
                    <Button className="w-23.75 h-12 p-2 border border-neutral-300 rounded-full font-bold">Edit</Button>
                    <Button className="w-23.75 h-12 p-2 border border-neutral-300 rounded-full font-bold text-error-100">Delete</Button>
                </div>
            </div>
        </div>
    </div>;
}
