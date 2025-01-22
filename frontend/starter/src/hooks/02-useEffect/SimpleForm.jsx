// SimpleForm.jsx
import React, { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'kevi',
        email: 'alpizar@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="bg-sky-400 h-screen flex justify-center items-center">
            <h2>Formulario Simple</h2>
            <form className="flex flex-col gap-8" action="">
                <input
                    type="text"
                    placeholder="name"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
            </form>

            {/* Pasar el username a Message */}
            {/* <Message username={username} /> */}
            {
                (username === 'kevin') && <Message />
            }
        </div>
    );
};
