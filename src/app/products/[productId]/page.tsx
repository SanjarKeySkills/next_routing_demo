export default async function ProductDetails({
    // здесь ставим async (так как вытаскиваем id по каждому товару)
    params,
}: // params как аргумент так как он позволяет выбрать по какому id на какой продукт выходить
{
    params: Promise<{ productId: string }>;
    // здесть обращаемся к Promise и деструктуризируем productId в стринговом значении
}) {
    const productId = (await params).productId;
    return <h1>Details about products {productId}</h1>;
}
