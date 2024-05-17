import React from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import DetailsDrawer from "../../drawer/details-drawer";

interface CardProps {
  name: string;
  price: number;
  weight: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  name,
  price,
  weight,
  imageUrl,
}: {
  name: string;
  price: number;
  weight: number;
  imageUrl: string;
}) => {
  const [totalWeight, setTotalWeight] = useState(weight);
  const [active, setActive] = useState(false);

  const handleIncrement = () => {
    setTotalWeight(totalWeight + 100);
    if (!active) {
      setActive(true);
    }
  };

  const handleDecrement = () => {
    setTotalWeight(totalWeight - 100);
    if (totalWeight === weight) {
      setActive(false);
    }
  };

  return (
    <div className="product-card my-2 w-fit overflow-hidden rounded-lg border-2 font-sf-pro-display shadow-md">
      <Image src={imageUrl} alt={name} width={154} height={144} />
      <div className="p-4">
        <p className="mt-2 text-xl font-semibold">
          ${(price * weight).toFixed(2)}
        </p>
        <p className="text-md font-medium">{name}</p>
        <div className="weight flex flex-row items-center justify-between">
          {active ? (
            <>
              <button type="button" onClick={handleDecrement}>
                <RemoveIcon />
              </button>
              <p className="mt-3 text-sm text-gray-500">
                {(totalWeight / 1000).toFixed(2)} kg
              </p>
              <button type="button" onClick={handleIncrement}>
                <AddIcon />
              </button>
            </>
          ) : (
            <>
              <p className="mt-3 text-sm text-gray-500">{weight / 1000} kg</p>
              <button type="button" onClick={handleIncrement}>
                <AddIcon />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
