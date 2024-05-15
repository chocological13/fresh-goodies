import React from "react";
import Image from "next/image";

const SideBtns: React.FC = () => {
  return (
    <div id="side-btns" className="flex flex-row">
      <button type="button">
        <Image src={"/icons/filter.png"} width={17} height={20} alt="filter" />
      </button>
      <button type="button">
        <Image src={"/icons/search.png"} width={42} height={32} alt="search" />
      </button>
    </div>
  );
};

export default SideBtns;
