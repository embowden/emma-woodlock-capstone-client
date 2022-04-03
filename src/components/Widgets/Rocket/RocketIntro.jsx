import { useLottie } from "lottie-react";
import introRocket from "../../../assets/lotties/intro-rocket.json";

const RocketIntro = () => {
  const options = {
    animationData: introRocket,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default RocketIntro;
