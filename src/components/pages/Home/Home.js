import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import StayCard from '~/components/layout/StayCard/StayCard';
import HotelItem from '~/components/pages/Home/HotelItem/HotelItem';
import hotels from '~/components/HotelsData/HotelsData';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import HomeHeading from '~/components/layout/HomeHeading/HomeHeading';

const cx = classNames.bind(styles);

function Home() {
    var indexPopulate = 0;

    const handleOrder = (index) => {
        if (index % 2) {
            return 'order';
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('branch')}>
                    <img className={cx('branch__heading')} src={images.logo} />
                </div>
                <div className={cx('favourite')}>
                    <p className={cx('favourite__title')}>HAND-PICKED SPACES TO BOOK & TO BUY</p>
                    {hotels.map((hotel) => {
                        if (hotel.group.favourite) {
                            indexPopulate = indexPopulate + 1;
                            return (
                                <StayCard
                                    key={hotel.id}
                                    img={hotel.image.main}
                                    title={hotel.name}
                                    price={hotel.price}
                                    address={hotel.address}
                                    to={`/hotel/${hotel.username}`}
                                />
                            );
                        }
                    })}
                </div>
                <div className={cx('populated')}>
                    <HomeHeading
                        heading="Hotel"
                        title="Design-conscious hotels grounded in luxury, craft and sustainability. These hotels will elevate your experience of travel, whether you’re seeking a recharging retreat, a creative escape or an adventure in nature."
                    />
                    <div className={cx('populated__list', 'grid')}>
                        <div className={cx('populated__item', 'row')}>
                            {hotels.map((hotel) => {
                                if (hotel.group.populated) {
                                    indexPopulate = indexPopulate + 1;
                                    return <HotelItem order={handleOrder(indexPopulate)} key={hotel.id} data={hotel} />;
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('journal', 'grid')}>
                    <HomeHeading
                        heading="Journal"
                        title="It’s time to make your dreams an everyday reality. These highly-crafted homes and properties promise contemporary, modern and historic architect-designed elegance in some of the world’s most coveted locations."
                        order="order"
                    />
                    <div className={cx('journal__list', 'row')}>
                        {hotels.map((hotel) => {
                            if (hotel.group.journal) {
                                if (hotel.convention) {
                                    return (
                                        <StayCard
                                            key={hotel.id}
                                            className={cx('journal__item', 'col-12')}
                                            img={hotel.image.main}
                                            title={hotel.name}
                                            priceTitle={false}
                                            address={hotel.address}
                                            to={`/hotel/${hotel.username}`}
                                        />
                                    );
                                } else {
                                    return (
                                        <StayCard
                                            key={hotel.id}
                                            className={cx('journal__item', 'img-custom', 'col-12 col-m-6 col-l-6')}
                                            img={hotel.image.main}
                                            title={hotel.name}
                                            priceTitle={false}
                                            address={hotel.address}
                                            to={`/hotel/${hotel.username}`}
                                        />
                                    );
                                }
                            }
                        })}
                    </div>
                </div>
                <div className={cx('management__team')}>
                    <div className={cx('team__info')}>
                        <p className={cx('team__info__heading')}>
                            We are a group of like-minded people who value travel, property, furniture and objects by
                            the quality of their design, functionality and aesthetic as well as their environmental
                            impact.
                        </p>
                        <div className={cx('team__info__social')}>
                            <Link className={cx('team__info__social-link')} to="/contact">
                                Get In Touch
                            </Link>
                            <Link className={cx('team__info__social-link')} to="/ig">
                                Instagram
                            </Link>
                        </div>
                    </div>
                    <div className={cx('branch')}>
                        <img className={cx('branch__heading')} src={images.logo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
