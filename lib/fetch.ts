import { Product } from "@/types/product";

export function fetchDataFromAPI(url: string): Promise<any> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json(); // Assuming the response is JSON
  });
}

export async function getUniqueCategories(url: string): Promise<Set<string>> {
  // Specify return type as Set<string>
  const data = await fetchDataFromAPI(url); // Call your existing function
  const categories = data.map((each: Product) => each.category);

  if (!categories) {
    // Check for existence of "products" property (adjust based on actual structure)
    throw new Error("Invalid data format. Missing 'products' property.");
  }

  const uniqueCategories = new Set<string>(categories);
  return uniqueCategories;
}

export async function getCardInfo(url: string): Promise<Product[]> {
  try {
    const data = await fetchDataFromAPI(url);
    const details = data.map((each: Product) => ({
      id: each.id,
      name: each.name,
      price: each.price,
      weight: each.weight,
      imageUrl: each.imageUrl,
    }));
    return details;
  } catch (e) {
    throw new Error("Uh Oh.. :(");
  }
}
