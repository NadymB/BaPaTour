import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <ul className={cx('footer__menu')}>
                <li className={cx('footer__item')}>
                    <Link>PRIVACY</Link>
                </li>
                <li className={cx('footer__item')}>
                    <Link>DICLOSURE</Link>
                </li>
                <li className={cx('footer__item')}>
                    <Link>COOKIE</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
