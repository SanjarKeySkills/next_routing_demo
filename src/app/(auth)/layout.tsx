"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import "./styles.css";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link
                        className={
                            isActive ? "font-bold mr-8" : "text-blue-700 mr-8"
                        }
                        href={link.href}
                        key={link.name}>
                        {link.name}
                    </Link>
                );
            })}
            <Link href="/">Home</Link>
            {children}
        </div>
    );
}
//  <header
//   style={{
//     backgroundColor: "aqua",
//     padding: "1rem",
//     }}>
//     <p>This is header for auth</p>
//     </header>
//     <footer
//     style={{
//     backgroundColor: "yellowgreen",
//     padding: "1rem",
//     }}>
//     <p>Footer for auth</p>
// </footer>
