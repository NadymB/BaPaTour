import classNames from 'classnames/bind';
import styles from './Hotel.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hotels from '~/components/HotelsData/HotelsData';
import StayCard from '~/components/layout/StayCard/StayCard';
import { faCalendar, faFilter } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Hotel() {
    return (
        <div className={cx('container', 'grid')}>
            <div className={cx('filter')}>
                <div className={cx('filter__date')}>
                    <FontAwesomeIcon icon={faCalendar} />
                    <p className={cx('filter__title')}>Any Dates</p>
                </div>
                <FontAwesomeIcon className={cx('filter__icon')} icon={faFilter} />
            </div>
            <div className={cx('content', 'row')}>
                <div className={cx('sidebar', 'col-0 col-m-0 col-l-4')}>
                    <ul className={cx('destinations__list')}>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>All Destinations</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Africa</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Asia-Pacific</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Balearic Islands</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Europe</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>France</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Greence</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Italy</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Mediterranean</Link>
                        </li>
                        <li className={cx('destination__item')}>
                            <Link className={cx('destination__link')}>Mecico</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('hotel__list', 'col-12 col-m-12 col-l-8')}>
                    <div className={cx('row')}>
                        {hotels.map((hotel) => {
                            if (hotel.group.hotel) {
                                return (
                                    <StayCard
                                        key={hotel.id}
                                        img={hotel.image.main}
                                        title={hotel.name}
                                        price={hotel.price}
                                        address={hotel.address}
                                        size="small"
                                        to={`/hotel/${hotel.username}`}
                                        className={cx('hotel__item', 'col-12 col-m-6 col-l-6')}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotel;
