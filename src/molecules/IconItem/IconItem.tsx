import Label from "../../atoms/Label/Label";
import { buildIcon } from "../../builder/buildIcons";
import './IconItem.scss';

interface IconItemProps {
    icon: string;
    title: string;
    description: string;
}

const IconItem: React.FC<IconItemProps> = (props: IconItemProps) => {
    return (
        <div className="iconitem">
            <div className="iconitem__icon">
                {buildIcon(props.icon)}
            </div>
            <div className="iconitem__content">
                <Label text={props.title} styleClass="label--secondary" />
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default IconItem;
