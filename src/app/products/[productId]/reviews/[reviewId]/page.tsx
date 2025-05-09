import { notFound } from "next/navigation";

export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
    // здесь productId: и reviewId: корреспондируют с папкой [productId] и [reviewId] в динамике
}) {
    const { productId, reviewId } = await params;
    // деструктуризуется { productId, reviewId }
    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>
            Review {reviewId} for product {productId}
        </h1>
    );
}
