import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default async function PhotoPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
    return (
        <div>
            <div>
                <div>
                    <h1>{photo.name}</h1>
                </div>
                <Image alt={photo.name} src={photo.src} />
                <div>
                    <h3>{photo.author}</h3>
                    <h3>{photo.location}</h3>
                </div>
            </div>
        </div>
    );
}
