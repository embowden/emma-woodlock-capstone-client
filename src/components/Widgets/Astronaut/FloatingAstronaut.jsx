import { useLottie } from "lottie-react";
import floatingData from "../../../assets/lotties/floating-asto.json";

const FloatingAstronaut = () => {
  const options = {
    animationData: floatingData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default FloatingAstronaut;
