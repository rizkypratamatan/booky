type Props = {
    containerClass: string;
    imageClass: string;
    fontClass: string;
};

export default function Logo({containerClass, imageClass, fontClass}: Props) {
    return <div className={`${containerClass} flex items-center`}>
        <img className={imageClass} src="/images/logo.png" alt="Logo"/>
        <h1 className={`${fontClass} font-bold`}>Booky</h1>
    </div>;
}
