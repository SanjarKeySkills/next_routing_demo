import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function PhotoFeed() {
    return (
        <main>
            <h1>New Wonders of ecology</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div>
                {wonders.map(({ id, src, name }) => (
                    // <Link key={id} href={`photo-feed/${id}`}>
                    <Link key={id} href={`photo-feed/${id}`}>
                        <Image alt={name} src={src} width={400} height={400} />
                    </Link>
                ))}
            </div>
        </main>
    );
}
