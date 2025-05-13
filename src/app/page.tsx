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
            <h2>Welcome home!</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: "24px",
                }}>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: "24px",
                }}>
                <Link href="/blog">Blog</Link>
                <Link href="/products">Products</Link>
                <Link href="/order-product">Order Product</Link>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "16px",
                }}>
                <Link href="/articles/breaking-news-123?lang=en">
                    Read in English
                </Link>
                <Link href="/articles/breaking-news-123?lang=es">
                    Read in Spanish
                </Link>
                <Link href="/articles/breaking-news-123?lang=fr">
                    Read in French
                </Link>
            </div>
        </div>
    );
}
