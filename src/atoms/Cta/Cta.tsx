import React from "react";
import "./Cta.scss";

interface CtaProps {
  label: string;
  styleClass?: 'cta--secondary' | 'cta--tertiary';
  href?: string;
  onClick?: () => void;
}

const Cta: React.FC<CtaProps> = (props: CtaProps) => {
  const Tag = props.href ? "a" : "button";

  return (
    <div className={props.styleClass ? `cta ${props.styleClass}` : "cta"}>
      <Tag onClick={() => props.onClick && props.onClick()} href={props.href}>
        {props.label}
      </Tag>
    </div>
  );
};

export default Cta;
