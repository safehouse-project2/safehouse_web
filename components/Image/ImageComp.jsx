import Image from "next/image";

export default function ImageComp({
    src = "/vercel.svg",
    width = 100,
    height = 100,
}) {
    return (
        <div>
            <Image
                src={src}
                width={width}
                height={height}
            />
        </div>
    )
}