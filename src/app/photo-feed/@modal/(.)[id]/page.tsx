import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";

export default async function PhotoModal({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

    return (
        <Modal>
            <Image alt={photo.name} src={photo.src} />
            <div>
                <h2>{photo.name}</h2>
                <h3>{photo.author}</h3>
                <h3>{photo.location}</h3>
            </div>
            <h1>Modal</h1>
        </Modal>
    );
}
