import { useLottie } from "lottie-react";
import codeData from "../../../assets/lotties/code.json";

const CodeSign = () => {
  const options = {
    animationData: codeData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default CodeSign;
