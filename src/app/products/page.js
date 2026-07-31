import ProductListing from "@/components/products/ProductListing";
import ProductsBanner from "@/components/products/ProductsBanner";

export const metadata = {
  title: "Our Collection - Altwood",
  description: "Explore our wide range of products and find the perfect solution for your needs.",
};

export default function Products() {
    return (
        <>
            <ProductsBanner />
            <ProductListing />
        </>
    );
}