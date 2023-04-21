import classNames from 'classnames/bind';
import styles from './HomeHeading.module.scss';

const cx = classNames.bind(styles);

function HomeHeading({ heading, title, order }) {
    return (
        <div className={cx('grid')}>
            <div className={cx('wrapper', 'row')}>
                <h2 className={cx('heading', 'col-12 col-m-4 col-l-4', { order })}>{heading}</h2>
                <span className={cx('title', 'col-0 col-m-4 col-l-4', { order })}>{title}</span>
                <span className={cx('empty', 'col-0 col-m-4 col-l-4')}></span>
            </div>
        </div>
    );
}

export default HomeHeading;
