import Link from "next/link";
// params & search params

export default async function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{ artilceId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const { artilceId } = await params;
    const { lang = "en" } = await searchParams;
    return (
        <div>
            <h1>News article {artilceId}</h1>
            <p>Reading in {lang} </p>
            <div>
                <Link href={`/articles/${artilceId}?lang=en`}>English</Link>
                <Link href={`/articles/${artilceId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${artilceId}?lang=fr`}>French</Link>
            </div>
        </div>
    );
}
