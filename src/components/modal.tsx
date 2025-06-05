export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "20px" }}>
            <div style={{ backgroundColor: "white", padding: "20px" }}>
                {children}
            </div>
        </div>
    );
}
