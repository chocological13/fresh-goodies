import React from "react";

interface NutritionsProps {
  calorie: number;
  proteins: number;
  fats: number;
  carbs: number;
}

const NutritionsFacts: React.FC<NutritionsProps> = ({
  calorie,
  proteins,
  fats,
  carbs,
}: {
  calorie: number;
  proteins: number;
  fats: number;
  carbs: number;
}) => {
  return (
    <>
      <li className="flex flex-col items-center">
        <p>{calorie}</p>
        <small className="text-gray-200">calorie</small>
      </li>
      <li className="flex flex-col items-center">
        <p>{proteins}</p>
        <small className="text-gray-200">proteins</small>
      </li>
      <li className="flex flex-col items-center">
        <p>{fats}</p>
        <small className="text-gray-200">fats</small>
      </li>
      <li className="flex flex-col items-center">
        <p>{carbs}</p>
        <small className="text-gray-200">carbs</small>
      </li>
    </>
  );
};

export default NutritionsFacts;
