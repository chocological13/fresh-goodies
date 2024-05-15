import React from "react";

type CatProp = {
  cat: string;
};

const CategoryTitle: React.FC<CatProp> = ({ cat }: { cat: string }) => {
  return <p className="text-3xl font-bold font-sf-pro-display">{cat}</p>;
};

export default CategoryTitle;
