import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@radix-ui/react-label";
import type {ReactNode} from "react";


type Props = {
    children: ReactNode;
    containerClass?: string,
    labelClass?: string;
};

export default function CheckboxHorizontal({children, containerClass, labelClass, ...props}: Props) {
    return <div className={`${containerClass} flex`}>
        <Checkbox className="size-5" {...props}/>
        <Label className={labelClass}>{children}</Label>
    </div>;
}
