import { useLottie } from "lottie-react";
import developRocketLaunch from "../../../assets/lotties/black-rocket.json";

const RocketLaunchTwo = () => {
  const options = {
    animationData: developRocketLaunch,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default RocketLaunchTwo;
