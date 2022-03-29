import { useLottie } from "lottie-react";
import astronautData from "../../../assets/lotties/running-asto.json";

const Astronaut = () => {
  const options = {
    animationData: astronautData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default Astronaut;
