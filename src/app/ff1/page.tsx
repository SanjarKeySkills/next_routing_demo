import Link from "next/link";

export default function FF1() {
    return (
        <>
            <h1>FF1 page</h1>
            <div>
                <Link href={"/ff1/ff2"}>FF2</Link>
                <Link href={"/ff3"}>FF3</Link>
            </div>
        </>
    );
}
// target folder
