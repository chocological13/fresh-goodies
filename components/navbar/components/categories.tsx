import React from "react";

type CategoriesProp = {
  list: string;
};

const Categories: React.FC<CategoriesProp> = ({ list }: { list: string }) => {
  return <div>{list}</div>;
};

export default Categories;
