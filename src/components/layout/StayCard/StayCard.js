import classNames from 'classnames/bind';
import styles from './StayCard.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function StayCard({ img, title, priceTitle = true, price, address, size, to, className }) {
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <img className={cx('card__img')} src={img} />
            <div className={cx('card')}>
                <Link to={to}>
                    <span className={cx('card__title', `${size}`)}>{title}</span>
                    <FontAwesomeIcon className={cx('card__icon', `${size}`)} icon={faArrowRight} />
                </Link>

                <p className={cx('card__price')}>{priceTitle && `From ${price}/nt`}</p>
            </div>
            <a className={cx('card__address')} href="#">
                {address}
            </a>
        </div>
    );
}

export default StayCard;
