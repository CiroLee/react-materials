import { FC } from 'react';
import { Link } from 'react-router-dom';
interface ICardProps {
  icon: string;
  name: string;
  path: string;
}

const Card: FC<ICardProps> = (props: ICardProps) => {
  return (
    <Link to={props.path} className="r-card">
      <i className="r-card__bg-icon"></i>
      <div className="r-card__content">
        <span className="r-card__text">{props.name}</span>
      </div>
    </Link>
  );
};

export default Card;
