import { useLottie } from "lottie-react";
import rocket from "../../../assets/lotties/rocket-only.json";

const Rocket = () => {
  const options = {
    animationData: rocket,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default Rocket;
