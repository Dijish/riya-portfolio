import React from "react";
import "./Label.scss";

interface LabelProps {
  text: string;
  styleClass?: 'label--primary' | 'label--secondary';
}

const Label: React.FC<LabelProps> = (props: LabelProps) => {
  if (!props.text) {
    return null;
  }

  return (
    <span className={props.styleClass ? `label ${props.styleClass}` : "label"}>
      {props.text}
    </span>
  );
};

export default Label;
