import React from "react";
import "./resources.scss";
import Keyboard from "../Widgets/Keyboard/Keyboard";

const Resources = () => {
  return (
    <section className="resources">
      <section className="resources__container">
        <h1 className="resources__title">{"{ resources }"}</h1>
        <div className="resources__animation">
          <Keyboard />
        </div>
      </section>
    </section>
  );
};

export default Resources;
