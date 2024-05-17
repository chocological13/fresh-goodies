"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getCardInfo } from "@/lib/fetch";
import { Product } from "@/types/product";
import Card from "./singular-card";

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
        <Card key={each.id} {...each} />
      ))}
    </>
  );
};

export default ProductCard;
