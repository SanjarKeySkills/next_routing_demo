// params & search params
"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
    params,
    searchParams,
}: // здесь парам в виде промиса разрешающих объекты с динамическими роутами параметров (Айди)
// searchParams здесь промис который разрешает объект содержащий очредность параметров (фильры и отбор)
// при том что имея доступ как в парамс так и searchParams лэй ауты имею доступ только к парамс
{
    params: Promise<{ artilceId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const { artilceId } = use(params);
    const { lang = "en" } = use(searchParams);
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>News article {artilceId}</h1>
            <p>Reading in {lang} </p>
            <ul
                style={{
                    backgroundColor: "lightblue",
                    padding: "0.2rem",
                    color: "Green",
                    fontWeight: "bold",
                }}>
                <li
                    style={{
                        padding: "16px 0",
                    }}>
                    <Link href={`/articles/${artilceId}?lang=en`}>English</Link>
                </li>
                <li
                    style={{
                        padding: "16px 0",
                    }}>
                    <Link href={`/articles/${artilceId}?lang=es`}>Spanish</Link>
                </li>
                <li
                    style={{
                        padding: "16px 0",
                    }}>
                    <Link href={`/articles/${artilceId}?lang=fr`}>French</Link>
                </li>
            </ul>
        </div>
    );
}
