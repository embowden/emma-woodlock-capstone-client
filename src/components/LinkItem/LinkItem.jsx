import React from "react";
// import "./link-item.scss";

const LinkItem = ({ link, title }) => {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

export default LinkItem;
