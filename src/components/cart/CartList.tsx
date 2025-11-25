import CartItem from "@/components/ui/CartItem.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import Image from "@/components/ui/Image.tsx";
import type {CartItem as CartItemProp} from "@/types/interfaces/Cart";


type Props = {
    item: CartItemProp;
};

export default function CartList({item}: Props) {
    return <div className="flex gap-4">
        <Checkbox className="size-5"/>
        <CartItem category="Category Name" name={item.book.title} author="Author Name">
            <Image className="w-23 h-auto" src={item.book.coverImage} alt={`${item.book.title} Cover`}/>
        </CartItem>
    </div>
}
