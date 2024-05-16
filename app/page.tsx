import FilterSearch from "@/components/filter-search/filter-search";
import Categories from "@/components/navbar/components/categories";
import ProductDisplay from "@/components/product-display/product-display";
import {
  fetchDataFromAPI,
  getUniqueCategories,
  getCardInfo,
} from "@/components/fetch";
import { Product } from "@/types/product";

export default function Home() {
  fetchDataFromAPI("http://localhost:8080/products").then((data) => {
    // console.log(data);

    const categories = data.map((each: Product) => each.category);

    // console.log(categories);

    const uniqueCategories = new Set(categories);

    // console.log(uniqueCategories);
  });

  getCardInfo("http://localhost:8080/products").then((data) => {
    console.log(data);
  });

  return (
    <main>
      <div className="products-card">
        <ProductDisplay />
      </div>
      <FilterSearch />
    </main>
  );
}
