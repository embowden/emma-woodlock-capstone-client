import { useLottie } from "lottie-react";
import discoverRocketLaunch from "../../../assets/lotties/rocket.json";

const RocketLaunch = () => {
  const options = {
    animationData: discoverRocketLaunch,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default RocketLaunch;
