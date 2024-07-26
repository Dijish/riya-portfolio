import React from "react";
import "./SubTitle.scss";

interface SubTitleProps {
  text: string;
  styleClass?: string;
}

const SubTitle: React.FC<SubTitleProps> = (props) => {
  if (!props.text) {
    return null;
  }

  return (
    <h3
      className={props.styleClass ? `subtitle ${props.styleClass}` : "subtitle"}
    >
      {props.text}
    </h3>
  );
};

export default SubTitle;
