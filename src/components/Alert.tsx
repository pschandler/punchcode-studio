import { ReactNode } from "react";
import { AlertTypes } from "../helpers/Enums";

interface Props {
  type: AlertTypes;
  children: ReactNode;
}
const Alert = ({ children, type }: Props) => {
  return <div className={`alert alert-${type}`}>{children}</div>;
};

export default Alert;
