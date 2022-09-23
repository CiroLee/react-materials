import { FC } from 'react';
import { Link } from 'react-router-dom';
import ReIcon from '../reIcon';
import './index.scss';
interface ICardProps {
  icon?: string;
  name?: string;
  path: string;
}

const Card: FC<ICardProps> = (props: ICardProps) => {
  return (
    <Link to={props.path} className="r-card">
      <ReIcon className="r-card__bg-icon" name={props.icon || ''}></ReIcon>
      <div className="r-card__content">
        <span className="text">{props.name}</span>
      </div>
    </Link>
  );
};

export default Card;
