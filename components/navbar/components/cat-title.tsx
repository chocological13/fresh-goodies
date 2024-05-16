import React from "react";

type CatProp = {
  cat: string;
};

const CategoryTitle: React.FC<CatProp> = ({ cat }: { cat: string }) => {
  return (
    <p className="font-sf-pro-display text-xl font-bold capitalize leading-6">
      {cat}
    </p>
  );
};

export default CategoryTitle;
