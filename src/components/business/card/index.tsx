import { FC } from 'react';
import { Link } from 'react-router-dom';
import ReIcon from '@/components/reIcon';
import './style/index.scss';
interface ICardProps {
  icon?: string;
  name?: string;
  path: string;
  className?: string;
}

const Card: FC<ICardProps> = (props: ICardProps) => {
  const classNames = props.className ? `r-card ${props.className}` : 'r-card';
  return (
    <Link to={props.path} className={classNames}>
      <ReIcon className="r-card__bg-icon" name={props.icon || ''}></ReIcon>
      <div className="r-card__content">
        <span className="text">{props.name}</span>
      </div>
    </Link>
  );
};

export default Card;
