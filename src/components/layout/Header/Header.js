import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const btnRef = useRef();

    const showNav = () => {
        btnRef.current.classList.toggle(cx('responsive__nav'));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <nav className={cx('header__menu', 'col-4')}>
                    <FontAwesomeIcon className={cx('menu__icon')} onClick={showNav} icon={faBars} />
                    <ul ref={btnRef} className={cx('header__menu__list')}>
                        <li className={cx('header__menu__item')}>
                            <Link className={cx('header__menu__link')} to="/hotel">
                                HOTELS
                            </Link>
                        </li>
                        <li className={cx('header__menu__item')}>
                            <Link className={cx('header__menu__link')} to="/journal">
                                JOURNAL
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/" className={cx('header__logo', 'col-4')}>
                    KOBU
                </Link>
                <div className={cx('header__icon', 'col-4')}>
                    <Link className={cx('header__icon__link')} to="/login">
                        <FontAwesomeIcon className={cx('login__icon')} icon={faUser}></FontAwesomeIcon>
                        <img id="login__icon" className={cx('login__account')} src={images.avatar} />
                    </Link>
                    <FontAwesomeIcon className={cx('search__icon')} icon={faSearch}></FontAwesomeIcon>
                </div>
            </header>
        </div>
    );
}

export default Header;
