// в этом файле также будем строить маршрутизацию через params & Promise
export default async function Doc({
    params,
}: {
    params: Promise<{ slug: string[] }>;
    // здесь аргумент ключ slug идет со значением string[] в квадратных скобках индекса
}) {
    // создаем переменную куда и будем записыват значения slug
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        );
    } else if (slug?.length === 1) {
        return <h1>Viewing docs for feature {slug[0]}</h1>;
    }
    return <h1>Docs home page</h1>;
}
