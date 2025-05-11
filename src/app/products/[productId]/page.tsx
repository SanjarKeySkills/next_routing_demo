import { Metadata } from "next";
// import Link from "next/link";

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const id = (await params).productId;

    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${id}`);
        });
    });
    return {
        title: `Product ${title}`,
    };
};
// выше настройка метаданных в динамике на каждый из продуктов
//

export default async function ProductDetails({ params }: Props) {
    const productId = (await params).productId;
    return (
        <h1>Details about product {productId}</h1>
        //  <Link href="/products">Products</Link>
    );
}
