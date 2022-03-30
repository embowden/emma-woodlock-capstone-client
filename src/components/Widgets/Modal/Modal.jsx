import React from "react";
import "./modal.scss";

const Modal = () => {
  const discoverMode = (
    <>
      <h1 className="modal__title">DISCOVER MODE</h1>
      <p className="modal__instructions">INSTRUCTIONS</p>
      <p className="modal__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et
        optio ab necessitatibus adipisci. Earum porro aut non molestias
        repellat. Numquam repellendus ipsa omnis expedita quae obcaecati! Quos,
        officia ratione?
      </p>
    </>
  );

  const developMode = (
    <>
      <h1 className="modal__title">DEVELOPER MODE</h1>
      <p className="modal__instructions">INSTRUCTIONS</p>
      <p className="modal__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et
        optio ab necessitatibus adipisci. Earum porro aut non molestias
        repellat. Numquam repellendus ipsa omnis expedita quae obcaecati! Quos,
        officia ratione?
      </p>
    </>
  );

  return (
    <aside className="modal">
      <section className="modal__container border-gradient border-gradient-purple">
        {discoverMode}
      </section>
    </aside>
  );
};

export default Modal;
