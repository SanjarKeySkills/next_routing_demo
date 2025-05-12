import Link from "next/link";

export default function NewsArticle() {
    return (
        <div>
            <h1>News article id</h1>
            <p>Reading in language</p>
            <div>
                <Link href="/articles/id?lang=en">English</Link>
            </div>
        </div>
    );
}
