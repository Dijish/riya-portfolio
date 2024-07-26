import React from "react";
import "./Ssn.scss";
import { buildIcon } from "../../builder/buildIcons";

interface SsnProps {
  type: string;
  href: string;
}

const Ssn: React.FC<SsnProps> = (props: SsnProps) => {
  return <a className="ssn" href={props.href} target="_blank">{buildIcon(props.type)}</a>;
};

export default Ssn;
