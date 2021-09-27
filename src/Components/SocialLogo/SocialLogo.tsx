import { FC } from "react";
import "./SocialLogo.scss";

const SocialLogo: FC = () => {
  return (
    <div className="socialLogo">
      <div className="socialLogo__circle">
        <i className="fa fa-instagram fa-lg"></i>
      </div>
      <div className="socialLogo__circle">
        <i className="fa fa-facebook fa-lg"></i>
      </div>
      <div className="socialLogo__circle">
        <i className="fa fa-vk fa-lg"></i>
      </div>
    </div>
  );
};

export default SocialLogo;
