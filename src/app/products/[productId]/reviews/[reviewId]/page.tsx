// import { redirect } from "next/dist/server/api-utils";
import { notFound, redirect } from "next/navigation";

export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000) {
        // notFound();
        // changet for redirections
        redirect("/products");
    }
    return (
        <h1>
            Review {reviewId} for product {productId}
        </h1>
    );
}
