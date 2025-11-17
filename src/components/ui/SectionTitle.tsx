type Props = {
    title: string;
};

export default function SectionTitle({title}: Props) {
    return <h2 className="w-full text-2xl font-bold md:text-4xl">{title}</h2>;
}
