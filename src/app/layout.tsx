export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <p>Main Header</p>
                </header>
                {children}
                <footer>
                    <p>Main Footer</p>
                </footer>
            </body>
        </html>
    );
}
