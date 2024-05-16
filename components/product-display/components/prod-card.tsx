"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getCardInfo } from "@/components/fetch";
import { Product } from "@/types/product";

const ProductCard: React.FC = () => {
  const [details, setDetails] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const details = await getCardInfo("http://localhost:8080/products");
        setDetails(details);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <p>Loading categories...</p>}
      {error && <p>Error: {error.message}</p>}
      {details.map((each: Product) => (
        <div
          key={each.id}
          className="product-card my-2 w-fit overflow-hidden rounded-lg border-2 font-sf-pro-display shadow-md"
        >
          <Image
            src={each.imageUrl || "/products/not-found.jpg"}
            alt={each.name}
            width={154}
            height={144}
          />
          <div className="p-4">
            <p className="mt-2 text-xl font-semibold">${each.price}</p>
            <p className="text-md font-medium">{each.name}</p>
            <div className="weight flex flex-row justify-between">
              <p className="mt-3 text-sm text-gray-500">{each.weight} g</p>
              <button type="button">
                <Image
                  src={"/icons/add.png"}
                  width={40}
                  height={40}
                  alt="add"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
