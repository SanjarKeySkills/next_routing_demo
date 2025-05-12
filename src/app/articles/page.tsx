import Link from "next/link";

export default function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{ artilceId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
    return (
        <div>
            <h1>News article id</h1>
            <p>Reading in language</p>
            <div>
                <Link href={`/articles/${id}?lang=en`}>English</Link>
                <Link href="/articles/id?lang=es">Spanish</Link>
                <Link href="/articles/id?lang=fr">French</Link>
            </div>
        </div>
    );
}
