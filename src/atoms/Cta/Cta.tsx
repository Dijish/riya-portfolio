import React from "react";
import "./Cta.scss";

interface CtaProps {
  label: string;
  styleClass?: 'cta--primary' | 'cta--secondary' | 'cta--tertiary';
  href?: string;
  onClick?: () => void;
  target?: '__blank' | '__self';
}

const Cta: React.FC<CtaProps> = (props: CtaProps) => {
  const Tag = props.href ? "a" : "button";
  const Target = props.target ? props.target : "__blank";

  return (
    <div className={props.styleClass ? `cta ${props.styleClass}` : "cta"}>
      <Tag onClick={() => props.onClick && props.onClick()} href={props.href} target={Target}>
        {props.label}
      </Tag>
    </div>
  );
};

export default Cta;
