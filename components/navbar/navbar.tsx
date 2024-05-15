import React from "react";
import CategoryTitle from "./components/cat-title";
import SideBtns from "./components/side-btns";

const NavBar: React.FC = () => {
  return (
    <section id="navbar" className="flex flex-row justify-between mt-8 mb-3">
      <CategoryTitle cat="title" />
      <SideBtns />
    </section>
  );
};

export default NavBar;
