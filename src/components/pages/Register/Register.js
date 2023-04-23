import { useState } from 'react';
import AuthForm from '~/components/layout/AuthForm/AuthForm';
import InputForm from '~/components/layout/InputForm/InputForm';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [value, setValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [values, setValues] = useState(JSON.parse(localStorage.getItem('data')) || []);

    const navigate = useNavigate();

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'abc',
            label: 'Username:',
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'abc@gmail.com',
            label: 'Email:',
            errorMessage: 'It should be a valid email address!',
            required: true,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'abc123@',
            label: 'Password:',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'abc123@',
            label: 'Confirm Password',
            errorMessage: "Passwords don't match!",
            pattern: value.password,
            required: true,
        },
    ];

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues((prev) => {
            const newValues = [...prev, value];
            localStorage.setItem('data', JSON.stringify(newValues));
            return newValues && navigate('/login');
        });
    };

    return (
        <div className="register">
            <AuthForm onSubmit={handleSubmit} title="Register" show={false}>
                {inputs.map((input) => (
                    <InputForm key={input.id} {...input} value={value[input.name]} onChange={handleChange} />
                ))}
            </AuthForm>
        </div>
    );
}

export default Register;
