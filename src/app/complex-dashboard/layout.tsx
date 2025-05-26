export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    // React.ReactNode означает, что в children можно передать любые React-элементы или содержимое, которое может быть отображено.
}) {
    return (
        <div>
            <div>{children}</div>
            <div>
                <div>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div>{notifications}</div>
            </div>
        </div>
    );
}
