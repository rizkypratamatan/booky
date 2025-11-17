export default function CheckoutReturn() {
    return <div className="flex flex-col p-3 bg-neutral-100 rounded-xl md:p-4">
        <p className="text-sm font-bold md:text-base">Return Date</p>
        <p className="text-sm font-medium md:text-base">Please return the book no later than&nbsp;
            <span className="font-bold text-error-100">31 August 2025</span></p>
    </div>;
}
