import React from "react";
import "./resources.scss";
import Keyboard from "../Widgets/Keyboard/Keyboard";

const Resources = () => {
  return (
    <section className="resources">
      <section className="resources__container">
        <div className="resources__animation">
          <Keyboard />
        </div>
        <h1 className="resources__title">{"{ resources }"}</h1>
      </section>
    </section>
  );
};

export default Resources;
