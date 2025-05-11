import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    },
};

export default function Blog() {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>Blog spot list</h1>;
        </div>
    );
}
