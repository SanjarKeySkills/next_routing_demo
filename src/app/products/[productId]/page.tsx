// [] - динамический сегмент, где будут отображаться данные через пропс params. Это и есть динамический роутинг,
// этот файл обрабатывает путь вида /products/:productId
export default async function ProductDetails({
    // здесь ставим async (так как вытаскиваем id по каждому товару)
    params,
}: // params (props) как аргумент так как он позволяет выбрать по какому id на какой продукт выходить
{
    params: Promise<{ productId: string }>;
    // здесть обращаемся к Promise и деструктуризируем productId в стринговом значении, что позволяет брать не только номера но и слова
}) {
    const productId = (await params).productId;
    // Мы дожидаемся, когда params "разрешится", и вытаскиваем из него productId
    return <h1>Details about products {productId}</h1>;
}
