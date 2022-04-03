import { useLottie } from "lottie-react";
import keyboardData from "../../../assets/lotties/keyboard.json";

const Keyboard = () => {
  const options = {
    animationData: keyboardData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default Keyboard;
