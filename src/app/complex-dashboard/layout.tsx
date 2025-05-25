import UserAnalytics from "path/to/UserAnalytics";
import RevenueMetrics from "path/to/RevenueMetrics";
import Notifications from "path/to/Notifications";

export default function ComplexDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div>{children}</div> {/* Content from page.tsx */}
            <UserAnalytics /> {/* Component for user analytics */}
            <RevenueMetrics /> {/* Component from revenue metrics */}
            <Notifications /> {/* Componnet from notifications */}
        </>
    );
}
