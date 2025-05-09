export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string; reviewId: string }>;
    // здесь productId: и reviewId: корреспондируют с папкой [productId] и [reviewId] в динамике
}) {
    const { productId, reviewId } = await params;
    // деструктуризуется { productId, reviewId }
    return (
        <h1>
            Review {reviewId} for product {productId}
        </h1>
    );
}
