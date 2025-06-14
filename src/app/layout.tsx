import { Metadata } from "next";
import { ErrorWrapper } from "./error-wrapper";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        default: "Next.js Tutorial - Codevolution",
        template: "%s | Codevolution",
        absolute: "",
    },
    // здесь данные метадаты аффектят на все страницы в директории ниже уровная app и на те страницы где нет своих настроек
    description: "Generated by Next.js",
};

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header
                    style={{
                        backgroundColor: "lightblue",
                        padding: "1rem",
                        color: "blue",
                        fontWeight: "bold",
                    }}>
                    <p>Header - App folder</p>
                    <Link href="/">Home</Link>
                </header>
                {children}
                {/* <ErrorWrapper>{children}</ErrorWrapper> */}
                <footer
                    style={{
                        backgroundColor: "grey",
                        padding: "1rem",
                        color: "yellow",
                        fontWeight: "bold",
                    }}>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    );
}
