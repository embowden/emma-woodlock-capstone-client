import React from "react";

const Preview = ({ text, userInput }) => {
  //TURN TEXT INTO ARRAY TO CHECK LETTER BY LETTER
  const splitText = text.split("");

  //MAP THROUGH THE SPLIT TEXT SO EACH LETTER IS A SPAN
  //IF THE USER INPUT MATCHES THE TEXT, SHOW GREEN
  //IF THE USER INPUT DOES NOT MATCH, SHOW RED
  return (
    <div>
      {splitText.map((char, index) => {
        let colour;
        if (index < userInput.length) {
          colour = char === userInput[index] ? "#42f57e" : "#f54242";
        }
        return (
          <span style={{ backgroundColor: colour }} key={index}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default Preview;
