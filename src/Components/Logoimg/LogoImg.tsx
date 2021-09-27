import { FC } from "react";
import headerImg from "../../images/headerImg.png";

interface ILogoImg {
  nameClass: string;
}
const LogoImg: FC<ILogoImg> = ({ nameClass }) => {
  return <img className={nameClass} src={headerImg} alt="header-img"></img>;
};

export default LogoImg;
