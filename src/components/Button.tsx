import React from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "disabled";
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  children,
}) => {
  return (
    <button className={`button ${variant}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
