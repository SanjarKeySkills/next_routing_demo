export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
    // React.ReactNode означает, что в children можно передать любые React-элементы или содержимое, которое может быть отображено.
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}
