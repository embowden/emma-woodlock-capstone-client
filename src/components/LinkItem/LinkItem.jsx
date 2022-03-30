import React from "react";
import "./link-item.scss";

const LinkItem = ({ link, title }) => {
  return (
    <a className="link-item" href={link}>
      {title}
    </a>
  );
};

export default LinkItem;
