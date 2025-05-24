function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Это продукт! Ошибка братан!");
    }

    return (
        <>
            {children}
            <h2>Featured products ProdictId folder</h2>
        </>
    );
}
