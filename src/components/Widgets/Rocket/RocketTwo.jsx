import { useLottie } from "lottie-react";
import developRocket from "../../../assets/lotties/black-rocket-only.json";

const RocketTwo = () => {
  const options = {
    animationData: developRocket,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default RocketTwo;
