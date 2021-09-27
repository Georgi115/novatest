import { FC } from "react";

interface IBtn {
  nameClass: string;
  content: string;
}
const Button: FC<IBtn> = ({ nameClass, content }) => {
  return <button className={nameClass}>{content}</button>;
};

export default Button;
