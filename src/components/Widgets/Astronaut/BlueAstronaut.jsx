import { useLottie } from "lottie-react";
import blueAstro from "../../../assets/lotties/blue-asto.json";

const BlueAstronaut = () => {
  const options = {
    animationData: blueAstro,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default BlueAstronaut;
