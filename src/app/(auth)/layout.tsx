"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    const [input, setInput] = useState("");
    const pathname = usePathname();
    return (
        <div>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            {navLinks.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexDirection: "row",
                        }}>
                        <Link href={link.href} key={link.name}>
                            {link.name}
                        </Link>
                    </div>
                );
            })}

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
