import DividerImage from '../../assets/images/divider.svg';
import './Divider.scss';

const Divider = () => {
    return (
        <div className="divider">
            <img src={DividerImage} alt="Divider" />
        </div>
    );
};

export default Divider;

