"use client";
import { getUniqueCategories } from "@/components/fetch";
import { useState, useEffect } from "react";
import React from "react";

const Categories: React.FC = () => {
  const [uniqueCategories, setUniqueCategories] = useState<Set<string>>(
    new Set(),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const categories = await getUniqueCategories(
          "http://localhost:8080/products",
        );
        setUniqueCategories(categories);
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
      <ul className="flex flex-row flex-nowrap gap-7 overflow-hidden overflow-x-scroll">
        <li className="list-non text-nowrap font-sf-pro-display text-lg capitalize">
          <button type="button">All</button>
        </li>

        {Array.from(uniqueCategories).map((category) => (
          <li
            key={category}
            className="list-non text-nowrap font-sf-pro-display text-lg capitalize"
          >
            <button type="button">{category}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
