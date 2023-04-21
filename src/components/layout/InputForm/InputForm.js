import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function InputForm({ onChange, errorMessage, label, ...props }) {
    const [focused, setFocused] = useState(false);

    return (
        <div className={cx('authform__content')}>
            <label className={cx('authform__label')} type={props.type}>
                {label}
            </label>
            <input
                onBlur={(e) => setFocused(true)}
                onFocus={(e) => setFocused(false)}
                className={cx('authform__control')}
                {...props}
                type={props.type}
                onChange={onChange}
                focused={focused.toString()}
            />
            <span className={cx('authform__errormsg')}>{errorMessage}</span>
        </div>
    );
}

export default InputForm;
