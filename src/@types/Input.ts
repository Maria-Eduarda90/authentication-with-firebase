import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputType = "text" | "email" | "password";

export type InputTypeProps = {
  type: InputType;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
