import React from "react";
import "./Title.scss";

interface TitleProps {
  text: string;
  styleClass?: 'title--primary' | 'title--secondary';
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  if (!props.text) {
    return null;
  }

  return (
    <h2 className={props.styleClass ? `title ${props.styleClass}` : "title"}>
      {props.text}
    </h2>
  );
};

export default Title;
