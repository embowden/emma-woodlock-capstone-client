import { useLottie } from "lottie-react";
import rocketAnimation from "../../../assets/lotties/rocket.json";

const RocketLaunch = () => {
  const options = {
    animationData: rocketAnimation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default RocketLaunch;
