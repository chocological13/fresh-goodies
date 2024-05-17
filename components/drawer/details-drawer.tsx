import React from "react";
import Image from "next/image";
import NutritionsFacts from "./components/nutritions-facts";

const DetailsDrawer: React.FC = () => {
  return (
    <section className="details-drawer font-sf-pro-display">
      <div className="mx-3 flex flex-col gap-3">
        <Image
          src={"/products/not-found.png"}
          width={300}
          height={300}
          alt="img"
          className="place-self-center"
        />

        <h2 className="product-name text-2xl font-bold leading-6">
          Prod Name*
        </h2>
        <p className="font-sf-pro-display text-lg font-semibold leading-5">
          In 100 grams
        </p>

        <div className="nutrition-facts rounded-lg border-2 border-gray-200">
          <ul className="mx-5 flex flex-row items-center justify-between py-2">
            <NutritionsFacts
              calorie={111}
              proteins={111}
              fats={111}
              carbs={111}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DetailsDrawer;
