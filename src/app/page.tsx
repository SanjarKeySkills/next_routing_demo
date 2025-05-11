import Link from "next/link";

export default function Home() {
    return (
        <div
            style={{
                backgroundColor: "#FF8C00",
                padding: "1rem",
                color: "#483D8B",
                fontWeight: "bold",
            }}>
            <h2>Welcome home</h2>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </div>
    );
}
