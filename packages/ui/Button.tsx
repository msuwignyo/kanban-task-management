import * as React from "react";

interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button = (props: Props) => {
  const { label, primary, size } = props;
  return (
    <button
      className="rounded-lg p-5"
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
};
