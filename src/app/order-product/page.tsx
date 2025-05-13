"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/");
        // send you to the main
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: "24px",
                padding: "16px 0",
            }}>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place order</button>
        </div>
    );
}
