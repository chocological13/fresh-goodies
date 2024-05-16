import React from "react";
import CategoryTitle from "./components/cat-title";
import SideBtns from "./components/side-btns";
import Categories from "./components/categories";

const NavBar: React.FC = () => {
  return (
    <nav className="mb-3 flex flex-col gap-2">
      <div className="upper-nav mb-3 mt-8 flex flex-row items-center justify-between">
        <CategoryTitle cat="Vegetables" />
        <SideBtns />
      </div>
      <div className="category-list flex flex-row">
        <Categories />
      </div>
    </nav>
  );
};

export default NavBar;
