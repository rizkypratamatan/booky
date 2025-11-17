import CartItem from "@/components/ui/CartItem.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";


export default function CartList() {
    return <div className="flex gap-4">
        <Checkbox className="size-5"/>
        <CartItem category="Category" name="Book Name" author="Author name">
            <img className="w-23 h-auto" src="/images/book-1.png" alt="Book Thumbnail"/>
        </CartItem>
    </div>
}
