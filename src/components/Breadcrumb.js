import React from "react";

const Breadcrumb = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <span
          key={index}
          className={`${
            index === items.length - 1 ? "text-gray-500" : "text-gray-500"
          }`}
        >
          {item}
          {index < items.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
