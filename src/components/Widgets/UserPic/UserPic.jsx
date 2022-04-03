import { useLottie } from "lottie-react";
import userData from "../../../assets/lotties/user-pic.json";

const UserPic = () => {
  const options = {
    animationData: userData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return View;
};

export default UserPic;
