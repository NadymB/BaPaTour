import classNames from 'classnames/bind';
import styles from './BookingModal.module.scss';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

const getCurrentDate = () => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (day < 10) {
        date = `0${day}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }

    var currentDate = `${year}-${month}-${day}`;
    console.log(currentDate);
    return currentDate;
};

function BookingModal({ price, onSubmit }) {
    const [value, setValue] = useState(1);
    const modalRef = useRef();

    var priceHotel = price;
    return (
        <div ref={modalRef} className={cx('modal')}>
            <div className={cx('modal__overlay')}></div>
            <form className={cx('booking', 'grid')} onSubmit={onSubmit}>
                <div className={cx('booking__title')}>
                    <h2 className={cx('booking__heading')}>Booking Form</h2>
                    <span className={cx('booking__msg')}>Let's start To booking Now</span>
                </div>
                <div className={cx('booking__info', 'row')}>
                    <div className={cx('info__item', 'col-12 col-m-6 col-l-6')}>
                        <label className={cx('info__item__title')}>Check In</label>
                        <input
                            className={cx('info__item__input')}
                            type="date"
                            min={getCurrentDate()}
                            max="2023-12-31"
                            required
                        />
                    </div>
                    <div className={cx('info__item', 'col-12 col-m-6 col-l-6')}>
                        <label className={cx('info__item__title')}>Check Out</label>
                        <input
                            className={cx('info__item__input')}
                            type="date"
                            min={getCurrentDate()}
                            max="2023-12-31"
                            required
                        />
                    </div>
                    <div className={cx('info__item', 'col-12 col-m-6 col-l-6')}>
                        <label className={cx('info__item__title')}>Rooms</label>
                        <input
                            onChange={(e) => setValue(e.target.value)}
                            className={cx('info__item__input')}
                            type="number"
                            placeholder={1}
                            min={1}
                            max={10}
                            required
                        />
                    </div>
                    <div className={cx('info__item', 'col-12 col-m-6 col-l-6')}>
                        <label className={cx('info__item__title')}>People</label>
                        <input
                            className={cx('info__item__input')}
                            type="number"
                            placeholder={1}
                            min={1}
                            max={30}
                            required
                        />
                    </div>
                    <p className={cx('info__item__title', 'col-12 col-m-12 col-l-12', 'price')}>
                        Price:<span className={cx('info__item__title__price')}>{`${priceHotel * value}$`}</span>
                    </p>
                    <div className={cx('submit__btn', 'col-12 col-m-12 col-l-12')}>
                        <input className={cx('sumit')} type="submit" value="Booking" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BookingModal;
