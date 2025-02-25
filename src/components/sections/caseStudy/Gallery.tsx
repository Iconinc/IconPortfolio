import Image from "next/image";

interface ProjectGalleryProps {
    gallery?: { image: string; imageAlt: string }[] | undefined
}

export function ProjectGallery({gallery}: ProjectGalleryProps) {
    return (
        <div className="w-full grid grid-cols-2 gap-2">
            {gallery?.map((image, index) => (
                <Image key={index} src={image.image} alt={image.imageAlt} height={560} width={360} className={'rounded-2xl'}/>
            ))}
        </div>
    );
}