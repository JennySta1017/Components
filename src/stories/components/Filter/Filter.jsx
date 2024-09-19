import React from "react";
import Title from "./Title";
import Image from "./Image";
import Name from "./Name";

const Filter = () => {
  return (
    <div>
      <Title />
      <div>
        <a href="#" target="_blank">
          <Image />
          <Name />
        </a>
      </div>
    </div>
  );
};

export default Filter;
