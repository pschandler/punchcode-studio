import React, { ReactNode } from "react";
import { ButtonTypes } from "../../helpers/Enums";

interface Props {
  children: ReactNode;
  type: ButtonTypes;
}

const Button = ({ children, type }: Props) => {
  return (
    <button type="button" className={`btn btn-${type}`}>
      {children}
    </button>
  );
};

export default Button;
