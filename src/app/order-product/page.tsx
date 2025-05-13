import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const handleClick = () => {
        console.log("Placing your order");
    };
    return (
        <>
            <h1>Order product</h1>;
            <button onClick={handleClick}>Place order</button>
        </>
    );
}
