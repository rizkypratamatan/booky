import CheckboxHorizontal from "@/components/ui/CheckboxHorizontal.tsx";


export default function CheckoutAgreement() {
    return <div className="flex flex-col gap-2">
        <CheckboxHorizontal containerClass="gap-4" labelClass="text-sm font-semibold md:text-base" value="agree" checked={false}>I
            agree
            to return the book(s)
            before the due date.</CheckboxHorizontal>
        <CheckboxHorizontal containerClass="gap-4" labelClass="text-sm font-semibold md:text-base" value="accept" checked={false}>I
            accept
            the library borrowing
            policy.</CheckboxHorizontal>
    </div>;
}
