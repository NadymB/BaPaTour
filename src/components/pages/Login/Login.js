// import { useState } from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '~/components/layout/AuthForm/AuthForm';
import InputForm from '~/components/layout/InputForm/InputForm';

console.log(document.getElementById('login__icon'));

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const errorRef = useRef();
    const usersdata = JSON.parse(localStorage.getItem('data'));

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usersdata === null) {
            window.confirm('Bạn chưa có tài khoản, bạn có muốn đăng ký không?');
            return navigate('/register');
        } else {
            usersdata.map((data) => {
                if (email === data.email && pwd === data.password) {
                    return navigate('/');
                } else {
                    return (errorRef.current.innerText = 'Email hoặc mật khẩu chưa chính xác');
                }
            });
        }
    };

    return (
        <AuthForm onSubmit={handleSubmit} title="Đăng Nhập">
            <InputForm
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                placeholder="abc@gmail.com"
                errorMessage="Vui lòng nhập email"
                // pattern={usersdata.map((data) => `${data.username}`)}
            />
            <InputForm
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                label="Mật khẩu"
                placeholder="abc123@"
                errorMessage="Vui lòng nhập mật khẩu"
                // pattern={usersdata.map((data) => `${data.password}`)}
            />
            <span
                style={{
                    fontSize: 14,
                    color: 'red',
                    fontWeight: 500,
                    paddingBottom: 20,
                }}
                ref={errorRef}
                className="errormsg"
            ></span>
        </AuthForm>
    );
}

export default Login;
