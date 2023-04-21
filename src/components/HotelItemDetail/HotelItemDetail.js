import classNames from 'classnames/bind';
import styles from './HotelItemDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HotelItemDetail({
    address,
    name,
    description,
    mainImage,
    oneDetailImage,
    twoDetailImage,
    threeDetailImage,
    oneRoomImage,
    twoRoomImage,
    threeRoomImage,
    fourRoomImage,
    oneDetailMoreImage,
    twoDetailMoreImage,
    hotelDetailTitle,
    firstRoomTitle,
    secondRoomTitle,
    thirdRoomTitle,
    fourthRoomTitle,
    firstHotelDetailTitleMore,
    secondHotelDetailTitleMore,
}) {
    return (
        <div className={cx('content', 'grid')}>
            <div className={cx('hotel__info', 'row')}>
                <div className={cx('hotel__content', 'col-m-12 col-m-6 col-l-7')}>
                    <p className={cx('hotel__address')}>{address}</p>
                    <h2 className={cx('hotel__title')}>{name}</h2>
                    <p className={cx('hotel__desc')}>{description}</p>
                    <button className={cx('hotel__btn')}>
                        <span className={cx('hotel__btn__name')}>Book Now</span>
                        <FontAwesomeIcon className={cx('hotel__btn__icon')} icon={faArrowRight} />
                    </button>
                </div>
                <img className={cx('hotel__img', 'col-m-12 col-m-6 col-l-5')} src={mainImage} />
            </div>
            <div className={cx('hotel__detail')}>
                <p className={cx('hotel__detail__title')}>{hotelDetailTitle}</p>
                <div className={cx('hotel__detail__img__list', 'row')}>
                    <img className={cx('hotel__detail__img__item', 'col-12 col-m-4 col-l-4')} src={oneDetailImage} />
                    <img
                        className={cx('hotel__detail__img__item', 'center', 'col-12 col-m-4 col-l-4')}
                        src={twoDetailImage}
                    />
                    <img className={cx('hotel__detail__img__item', 'col-12 col-m-4 col-l-4')} src={threeDetailImage} />
                </div>
            </div>
            <div className={cx('hotel__room')}>
                <div className={cx('hotel__room__title')}>
                    <p className={cx('hotel__room__title__item')}>Rooms</p>
                    <p className={cx('hotel__room__title__item')}>Villas</p>
                </div>
                <div className={cx('hotel__room__list', 'row')}>
                    <div className={cx('hotel__room__item', 'col-12 col-m-6 col-l-3')}>
                        <img className={cx('hotel__room__img')} src={oneRoomImage} />
                        <span className={cx('hotel__room__item__title')}>{firstRoomTitle}</span>
                    </div>
                    <div className={cx('hotel__room__item', 'col-12 col-m-6 col-l-3')}>
                        <img className={cx('hotel__room__img')} src={twoRoomImage} />
                        <span className={cx('hotel__room__item__title')}>{secondRoomTitle}</span>
                    </div>
                    <div className={cx('hotel__room__item', 'col-12 col-m-6 col-l-3')}>
                        <img className={cx('hotel__room__img')} src={threeRoomImage} />
                        <span className={cx('hotel__room__item__title')}>{thirdRoomTitle}</span>
                    </div>
                    <div className={cx('hotel__room__item', 'col-12 col-m-6 col-l-3')}>
                        <img className={cx('hotel__room__img')} src={fourRoomImage} />
                        <span className={cx('hotel__room__item__title')}>{fourthRoomTitle}</span>
                    </div>
                </div>
            </div>
            <div className={cx('hotel__detail__more', 'row')}>
                <h4 className={cx('hotel__detail__more__title')}>
                    The Details
                    <span>What makes it Kobu</span>
                </h4>
                <div className={cx('hotel__detail__more__list', 'row')}>
                    <div className={cx('hotel__detail__more__item', 'col-12 col-m-6 col-l-6')}>
                        <img className={cx('hotel__detail__more__item__img')} src={oneDetailMoreImage} />
                        <p className={cx('hotel__detail__more__item__title__left')}>{firstHotelDetailTitleMore}</p>
                    </div>
                    <div className={cx('hotel__detail__more__item', 'col-12 col-m-6 col-l-6')}>
                        <p className={cx('hotel__detail__more__item__title__right')}>{secondHotelDetailTitleMore}</p>
                        <img className={cx('hotel__detail__more__item__img', 'right')} src={twoDetailMoreImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelItemDetail;
