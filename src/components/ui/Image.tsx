import React from "react";


type Props = {
    className?: string;
    src: string;
    alt: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

export default function Image({className, src, alt, onClick}: Props) {
    return <img className={`${className || ''} select-none`} src={src} alt={alt} onClick={onClick}/>;
}
