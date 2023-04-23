import classNames from 'classnames/bind';
import styles from './AuthForm.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AuthForm({ children, onSubmit, title, className, show = true }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('authform')}>
                <div className={cx('authform__head')}>
                    <h3 className={cx('authform__head__title')}>{title}</h3>
                </div>
                <form onSubmit={onSubmit} className={cx('authform__body')}>
                    {children}
                    {show && <span className={cx('authform__forget')}>Forget me!</span>}
                    <input type="submit" className={cx('form__btn')} value={title} />
                    {show && (
                        <span
                            className={cx('authform__link', {
                                [className]: className,
                            })}
                        >
                            Already have an account?
                            <Link to="/register">Register</Link>
                        </span>
                    )}
                </form>
            </div>
        </div>
    );
}

export default AuthForm;
