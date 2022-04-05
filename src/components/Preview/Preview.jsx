import React from "react";
import "./preview.scss";
import TypeText from "../Widgets/TypeText/TypeText";

const Preview = ({ text, userInput, cont }) => {
  //TURN TEXT INTO ARRAY TO CHECK LETTER BY LETTER
  const splitText = text.split("");

  //MAP THROUGH THE SPLIT TEXT SO EACH LETTER IS A SPAN
  //IF THE USER INPUT MATCHES THE TEXT, SHOW GREEN
  //IF THE USER INPUT DOES NOT MATCH, SHOW RED
  return (
    <section className="preview">
      <div className="preview__container" ref={cont}>
        {userInput.length > 0 ? null : <TypeText />}
        {splitText.map((char, index) => {
          let colour;
          if (index < userInput.length) {
            colour = char === userInput[index] ? "#17ab49" : "#f54242";
          }
          return (
            <span
              style={{ backgroundColor: colour, color: "white" }}
              key={index}
            >
              {char}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Preview;
