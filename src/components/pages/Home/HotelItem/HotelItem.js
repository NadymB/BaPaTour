import classNames from 'classnames/bind';
import styles from './HotelItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StayCard from '../../../layout/StayCard/StayCard';
import { faBath, faBed, faHotel, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HotelItem({ order, data }) {
    return (
        <div className={cx('hotel__item', 'col-12 col-m-6 col-l-12', 'grid')}>
            <div className={cx('hotel__card__wrapper', 'row')}>
                <div className={cx('hotel__card', 'col-12 col-m-12 col-l-5', { order })}>
                    <table>
                        <thead className={cx('thead')}>
                            <tr>
                                <th className={cx('border')} colSpan={2}>
                                    <h3 className={cx('hotel__card__name')}>{data.name}</h3>
                                    <p className={cx('hotel__card__desc')}>{data.description}</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody className={cx('tbody')}>
                            <tr>
                                <td className={cx('hotel__card__info', 'border')}>
                                    <FontAwesomeIcon className={cx('hotel__card__info-icon')} icon={faUserGroup} />
                                    <span className={cx('hotel__card__info-title')}>{data.maxPeople} people</span>
                                </td>
                                <td className={cx('hotel__card__info', 'border')}>
                                    <FontAwesomeIcon className={cx('hotel__card__info-icon')} icon={faHotel} />
                                    <span className={cx('hotel__card__info-title')}>{data.area} m2</span>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('hotel__card__info', 'border')}>
                                    <FontAwesomeIcon className={cx('hotel__card__info-icon')} icon={faBed} />
                                    <span className={cx('hotel__card__info-title')}>{data.rooms} ensuite rooms</span>
                                </td>
                                <td className={cx('hotel__card__info', 'border')}>
                                    <FontAwesomeIcon className={cx('hotel__card__info-icon')} icon={faBath} />
                                    <span className={cx('hotel__card__info-title')}>{data.bathrooms} bathrooms</span>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('hide__highlights', 'border')} colSpan={2}>
                                    <div className={cx('hotel__card__highlights', 'grid')}>
                                        <p className={cx('hotel__card__highlights__title')}>HIGHLIGHTS</p>
                                        <ul className={cx('hotel__card__highlights__list', 'row')}>
                                            {data.highlights.map((highlight, index) => (
                                                <li
                                                    key={index}
                                                    className={cx('hotel__card__highlights__item', 'col-4')}
                                                >
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className={cx('tfoot')}>
                            <tr>
                                <td className={cx('border')} colSpan={2}>
                                    <StayCard
                                        className={cx('hotel__card__btn')}
                                        title={data.name}
                                        price={data.price}
                                        address={data.address}
                                        size="small"
                                        to={`/hotel/${data.username}`}
                                    />
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className={cx('hotel__img', 'col-12 col-m-12 col-l-7')}>
                    <img className={cx('hotel__img__item')} src={data.image.main} />
                </div>
            </div>
        </div>
    );
}

export default HotelItem;
