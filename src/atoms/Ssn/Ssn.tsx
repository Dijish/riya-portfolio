import React from "react";
import { buildIcon } from "../../builder/buildIcons";
import "./Ssn.scss";

interface SsnProps {
  type: string;
  href: string;
  styleClass?: 'ssn--secondary';
}

const Ssn: React.FC<SsnProps> = (props: SsnProps) => {
  return <a className={`ssn ${props.styleClass ? props.styleClass : ''}`} href={props.href} target="_blank">{buildIcon(props.type)}</a>;
};

export default Ssn;
