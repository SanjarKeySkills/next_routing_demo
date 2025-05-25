import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    },
};

export default async function Blog() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("international delay - Loading");
        }, 2000);
    });
    return (
        <div className="container">
            <Link href="/">Home</Link>
            {/* <h1>Blog spot list</h1>
             */}
            <p>Lorem, ipsum dolor.</p>
        </div>
    );
}
