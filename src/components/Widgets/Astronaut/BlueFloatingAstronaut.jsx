import { useLottie } from "lottie-react";
import blueFloating from "../../../assets/lotties/blue-floating-asto.json";

const BlueFloatingAstronaut = () => {
  const options = {
    animationData: blueFloating,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default BlueFloatingAstronaut;
