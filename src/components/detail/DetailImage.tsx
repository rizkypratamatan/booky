import type {ReactNode} from "react";


type Props = {
    children: ReactNode;
};

export default function DetailImage({children}: Props) {
    return <div className="basis-1/4 p-2 bg-neutral-400">{children}</div>;
}
