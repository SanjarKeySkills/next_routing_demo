"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const propductId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h2>Review {reviewId} not found</h2>
        </div>
    );
}
